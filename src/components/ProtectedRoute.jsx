import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? children : "please login first";
};

export default ProtectedRoute;
