import { useState } from "react";

export default function useToken() {
	const getToken = () => {
		const tokenString = localStorage.getItem("user");
		const userToken = JSON.parse(tokenString);
		return userToken?.token;
	};

	const [token, setToken] = useState(getToken());

	const saveToken = (user) => {
		localStorage.setItem("user", JSON.stringify(user));
		setToken(user.token);
	};

	return {
		setToken: saveToken,
		token,
	};
}
