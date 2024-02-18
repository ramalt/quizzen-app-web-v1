import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";

const RequireAuth = () => {
  const location = useLocation();

  const token = useSelector(selectCurrentToken);

  // const localAuth = JSON.parse(localStorage.getItem("auth"));

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
