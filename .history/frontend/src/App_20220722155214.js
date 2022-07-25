import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/admin/Sidebar";
import ProductGrid from "./components/products/productGrid";
import Slider from "./components/Slider/Slider";
function App({ isAdmin }) {
  return isAdmin ? (
    <>
      <ToastContainer />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : (
    <>
      <Slider />
      <ProductGrid />
    </>
  );
}

export default App;
