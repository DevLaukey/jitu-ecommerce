import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductGrid from "./components/products/productGrid";
import Slider from "./components/Slider/Slider";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import DashBoard from "./components/admin/Main";
import Customers from "./components/admin/Customers";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Order";
import Messages from "./components/admin/Messages";
import Settings from "./components/admin/Settings";
import Cart from "./components/products/Cart";
import Bookmark from "./components/products/Bookmark";
import Error from "./components/Error";

import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import AdminWrapper from "./pages/AdminWrapper";
import Login from "./components/logins/Login";
import SignUp from "./components/logins/SignUp";
import { loadCategories, loadProducts } from "./redux/slices/productReducer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {

	const dispatch = useDispatch();

	const baseURL = "http://localhost:3005";

	useEffect(() => {
		axios.get(`${baseURL}/categories`).then((response) => {
			dispatch(loadCategories(response.data.categories));
		});
		axios.get(`${baseURL}/products`).then((response) => {
			dispatch(loadProducts(response.data.records));
		});
	}, [dispatch]);


	return (
		// <>
		// 	<Slider />
		// 	<ProductGrid />
		// </>

		<Router>
			<ToastContainer />
			<Navbar />
			<Routes>
				{/* <Route path="/" element={<ProtectedRoutes />}> */}
				<Route path="/" element={<ProductGrid />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/bookmark" element={<Bookmark />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				<Route path="/admin" element={<AdminWrapper />}>
					<Route index element={<DashBoard />} />
					<Route path="customers" element={<Customers />} />
					<Route path="products" element={<Products />} />
					<Route path="orders" element={<Orders />} />
					<Route path="messages" element={<Messages />} />
					<Route path="settings" element={<Settings />} />
				</Route>

				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
