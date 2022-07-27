import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductGrid from "./components/products/productGrid";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import DashBoard from "./components/admin/Main";
import Customers from "./components/admin/Customers";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Order";
import Settings from "./components/admin/Settings";
import Cart from "./components/products/Cart";
import Bookmark from "./components/products/Bookmark";
import Error from "./components/Error";

import AdminWrapper from "./pages/AdminWrapper";
import Login from "./components/logins/Login";
import SignUp from "./components/logins/SignUp";
import { loadCategories, loadProducts } from "./redux/slices/productReducer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./components/products/ProductDetails";
import Categories from "./components/admin/Categories";

const App = () => {
	const dispatch = useDispatch();

	let { isAdmin } = useSelector((state) => state.user);
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
		<Router>
			<ToastContainer />
			<Navbar />
			<Routes>
				{isAdmin ? (
					<Route path="/" element={<AdminWrapper />}>
						<Route path="/" element={<DashBoard />} />
						<Route path="admin/customers" element={<Customers />} />
						<Route path="admin/products" element={<Products />} />
						<Route path="admin/categories" element={<Categories />} />
						<Route path="admin/orders" element={<Orders />} />
						<Route path="admin/settings" element={<Settings />} />
					</Route>
				) : (
					<>
						<Route path="/" element={<ProductGrid />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/products/:productName" element={<ProductDetails />} />
						<Route path="/bookmark" element={<Bookmark />} />
					</>
				)}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
