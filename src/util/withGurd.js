import React from "react";
import { useSelector } from "react-redux";

export const withGurd = (Component) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <div>please login first </div>
    );
  };
  return Wrapper;
};
