import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Search } from "./pages/Search"
import { LoginPage } from "./pages/Login"

import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
