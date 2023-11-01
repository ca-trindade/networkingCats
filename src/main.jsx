import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Search } from "./pages/Search"
import { LoginPage } from "./pages/Login"
import { Catalog } from "./pages/Catalog"
import { Loading } from "./components/Meowdulating";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/Catalog",
    element: <Catalog />,
  },
  {
    path: "/Loading",
    element: <Loading />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
