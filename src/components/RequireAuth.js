import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  const storedAuth = JSON.parse(localStorage.getItem("auth"));
  console.log(storedAuth);
  return storedAuth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
