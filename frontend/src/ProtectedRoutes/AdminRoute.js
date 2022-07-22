import { Outlet } from "react-router-dom";
import Login from "../components/logins/Login";
const useAuth = () => {
  const user = { admin: true };
  return user && user.admin;
};
const AdminRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default AdminRoute;  
