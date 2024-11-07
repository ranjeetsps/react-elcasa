import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { state } = useAuth();
  const { isAuthenticated } = state;

  const navigate = useNavigate();

  useEffect(
    function () {
      console.log("effect clled as iauthenticated changed to", isAuthenticated);
      if (!isAuthenticated) {
        console.log("navigating to login");
        navigate("/login");
      } else {
        console.log("navigating to app");
      }
    },
    [isAuthenticated, navigate]
  );

  if (children) {
    return children;
  }
  console.log("no children null");
  return null;
}

export default ProtectedRoute;
