const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

class Connection {
	constructor() {
		this.connectToDatabase();
	}

	connectToDatabase = async () => {
		try {
			const config = new sql.ConnectionPool(dbConfig);
			this.pool = await config.connect();
			console.log("Connected to database");
		} catch (error) {
			console.log(error.message);
			throw new Error(error.nessage);
		}
	};

	exec = async (procedure, data = {}) => {
		let request = this.pool.request();

		const dataKeys = Object.keys(data);
		dataKeys.map((keyName) => {
			request.input(keyName, data[keyName]);
		});

		const results = await request.execute(procedure);

		return results;
	};
}

module.exports = {
	exec: new Connection().exec,
};
