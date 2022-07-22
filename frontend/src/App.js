import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/admin/Sidebar";
import ProductGrid from "./components/products/productGrid";

function App({ isAdmin }) {
	return !isAdmin ? (
		<>
			<ToastContainer />
			<div className="flex ">
				<Sidebar />
				<Outlet />
			</div>
		</>
	) : (
		<ProductGrid />
	);
}

export default App;
