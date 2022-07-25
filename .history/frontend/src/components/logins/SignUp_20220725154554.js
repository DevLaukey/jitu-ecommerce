import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { loginUser } from "../../redux/slices/userReducer";

function SignUp() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [fullName, setFullName] = useState();
	const [email, setEmail] = useState();
	const [telephone, setTelephone] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	let role;
	const handleSubmit = (e) => {
		e.preventDefault();

		if (email.includes("@tangerinefurn.com")) {
			 role = 1;
		}
		else {
			 role = 0;
		}

		password !== confirmPassword
			? toast.error("Passwords Mismatch, kindly make sure your passwords match", {
					position: toast.POSITION.TOP_RIGHT,
			  })
			: axios
					.post(`http://localhost:3016/signup`, {
						fullName,
						email,
						telephone,
						password,
						role
					})
					.then((response) => {
						localStorage.setItem("token", JSON.stringify(response.data.token));

						toast.success(response.data.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
						dispatch(loginUser());
						navigate("/", { replace: true });
					})
					.catch((error) => {
						toast.error(error.response.data.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
					});
	};
	return (
		<>
			<ToastContainer />
			<div className="h-screen flex bg-gray-bg1">
				<form
					onSubmit={handleSubmit}
					className="w-full max-w-md m-auto bg-blue-500 rounded-lg border border-primaryBorder shadow-default py-10 px-16 text-white">
					<h1 className="mb-8 text-3xl text-center">Sign up</h1>
					<input
						required
						type="text"
						className="block border text-black border-grey-light w-full p-3 rounded mb-4"
						name="fullname"
						placeholder="Full Name"
						onChange={(e) => setFullName(e.target.value)}
					/>
					<input
						required
						type="text"
						className="block border text-black border-grey-light w-full p-3 rounded mb-4"
						name="Telephone"
						placeholder="Telephone number"
						onChange={(e) => setTelephone(e.target.value)}
					/>
					<input
						required
						type="email"
						className="block border  text-black border-grey-light w-full p-3 rounded mb-4"
						name="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						required
						type="password"
						name="password"
						placeholder="Password"
						autoComplete="on"
						className="block text-black border-grey-light w-full p-3 rounded mb-4"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						required
						type="password"
						className="block text-black border border-grey-light w-full p-3 rounded mb-4"
						name="confirm_password"
						autoComplete="on"
						placeholder="Confirm Password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>

					<button
						type="submit"
						className="bg-green w-full py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
						Create Account
					</button>
					<div className="text-grey-dark mt-6 text-center">
						Already have an account?
						<Link className="no-underline ml-3 border-b border-blue text-blue" to="/login">
							Login
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default SignUp;
