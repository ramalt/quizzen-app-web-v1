import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Feed } from "@mui/icons-material";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.accessToken ? (
    <Outlet /> // TODO: değiştir
  ) : auth?.access ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
