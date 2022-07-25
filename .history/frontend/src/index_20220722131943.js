import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/logins/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/logins/SignUp";

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
import ProductGrid from "./components/products/productGrid";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<Router>
			<Navbar />

			<Routes>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/" element={<App isAdmin={true} />}>
						<Route path="/" element={<DashBoard />} />
						<Route path="admin/customers" element={<Customers />} />
						<Route path="admin/products" element={<Products />} />
						<Route path="admin/orders" element={<Orders />} />
						<Route path="admin/messages" element={<Messages />} />
						<Route path="admin/settings" element={<Settings />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/bookmark" element={<Bookmark />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</Provider>
);
