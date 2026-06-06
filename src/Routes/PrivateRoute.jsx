import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!user) {
    <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
