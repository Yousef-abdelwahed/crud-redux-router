import { cloneElement } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const newComponent = cloneElement({ children }, { title: "new Component" });
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? children : "please login first";
};

export default ProtectedRoute;
