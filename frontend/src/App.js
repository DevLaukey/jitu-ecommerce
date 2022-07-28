import axios from "axios";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { loadCategories, loadProducts } from "./redux/slices/productReducer";
import useToken from "./useToken";

import AdminWrapper from "./pages/AdminWrapper";
import DashBoard from "./components/admin/Main";
import Customers from "./components/admin/Customers/Customers";
import Products from "./components/admin/Products/Products";
import Categories from "./components/admin/Categories/Categories";
import Orders from "./components/admin/Orders/Order";
import Settings from "./components/admin/Settings";

import Cart from "./components/products/Cart";
import Bookmark from "./components/products/Bookmark";

import Login from "./components/logins/Login";
import SignUp from "./components/logins/SignUp";

import ProductDetails from "./components/products/ProductDetails";
import ProductGrid from "./components/products/productGrid";

import Error from "./components/Error";
import ModalEditCat from "./components/admin/ModalEditCat";

const App = () => {
	const dispatch = useDispatch();

	const { token, setToken } = useToken();

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
						<Route path="/cart" element={<Cart token={token} />} />
						<Route path="/products/:productName" element={<ProductDetails />} />
						<Route path="/bookmark" element={<Bookmark />} />
					</>
				)}
				<Route path="/login" element={<Login setToken={setToken} />} />
				<Route path="/signup" element={<SignUp setToken={setToken} />} />

				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
