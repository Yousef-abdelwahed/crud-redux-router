import React from "react";

export const withGurd = (Component) => {
  return () => {
    return <Component />;
  };
};
