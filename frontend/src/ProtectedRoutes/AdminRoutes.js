import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/logins/Login";
const useAdmin = () => {
  const user = { Admin: false };
  return user && user.Admin && user.Admin;
};
const ProtectedRoutes = () => {
  const isAdmin = useAdmin();
  return isAdmin ? <Outlet /> : <App />;
};

export default ProtectedRoutes;
