const { exec } = require("../helpers/db");
const { signUpEmail, loginEmail } = require("./mailController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
  
// ToDO
// Send email to user after login
// reset password

module.exports = {
  signup: async (req, res) => {
    const { fullName, email, telephone, password } = req.body;
    try {
      const userExists = await exec("verify_exists", {
        email,
      });

      if (userExists.recordset.length > 0) {
        return res.status(401).json({
          status: 401,
          success: false,
          message: `User already exists, try a different email`,
        });
      }

      const hashPass = await bcrypt.hash(password, 8);

      await exec("insert_user", {
        fullName,
        email,
        telephone,
        password: hashPass,
      });
      const token = jwt.sign({ email }, process.env.JWTKEY, {
        expiresIn: "1h",
      });
      signUpEmail(email, fullName);
      return res.status(201).json({
        status: 201,
        success: true,
        message: `A user has been registered successfully`,
        token: token,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const emailExists = await exec("verify_exists", {
        email,
      });

      console.log(emailExists);

      if (emailExists.recordset.length > 0) {
        const user = emailExists.recordset[0];

        const passMatches = await bcrypt.compare(password, user.password);

        if (!passMatches) {
          return res.status(401).json({
            status: 401,
            success: false,
            message: "Invalid credentials!",
          });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWTKEY, {
          expiresIn: "1h",
        });
        loginEmail(email);

        return res.status(201).json({
          status: 201,
          success: true,
          message: "logged in successfully",
          token,
        });
      } else {
        return res.status(401).json({
          status: 401,
          success: false,
          message: "Invalid credentials!",
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    const { fullName, email, telephone } = req.body;

    try {
      const userExists = await exec("verify_exists", {
        email,
      });

      if (userExists.recordset.length == 0) {
        return res.status(401).json({
          status: 401,
          success: false,
          message: `User does not exist`,
        });
      }
      const user = userExists.recordset[0];

      const _fullname = fullName || user.fullname;
      const _telephone = telephone || user.telephone;

      await exec("update_user", {
        email,
        fullName: _fullname,
        telephone: _telephone,
      });

      return res.status(201).json({
        status: 201,
        success: true,
        message: `user details updated successfully`,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  },
  userStatus: async (req, res) => {
    const { email } = req.body;
    try {
      const users = await exec("user_status", { email });
      return res.status(201).json({
        status: 201,
        success: true,
        message: `user status`,
        data: users.recordset,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  },
  getusers: async (req, res) => {
    try {
      const page = req.query.page || 1;
      const size = req.query.size || 10;
      const search = req.query.search || "";

      const result = await exec("customer_pagination", { page, size, search });
      const count = result.recordsets[1][0];

      return res.status(201).json({
        status: 201,
        success: true,
        size: size,
        records: result.recordsets[0],
        filtered: count.Filtered,
        total: count.Total,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: 500,
        success: false,
        message: error,
      });
    }
  },
};
