import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Index from "./components/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "/post", element: <Index /> },

      { path: "/post/add", element: <Index /> },
      { path: "/post/:id/edit", element: <Edit /> },
      { path: "/post/:id", element: <Details /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
