import React from "react";
import { PropTypes } from "prop-types";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
