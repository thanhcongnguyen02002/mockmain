import { createBrowserRouter } from "react-router-dom";
import Register from "../page/Register";
import Home from "../page/Home";
import Product from "../page/Menu/Product";
import Profile from "../page/Menu/Profile";
import NotFound from "../page/Menu/NotFound";
import PrivateRoute from "../Commponents/PrivateRoute";

import Layout from "../page/Menu/Layout";
import { App } from "antd";
import Login1 from "../page/Menu/login1";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout/>
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      { 
      index: true, path:"/home",

      element: <Home /> },
      {
        path: "/product",
        element: <Product />,
      },
      {
path:"/product/{id}",
element:<Product/>
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
 
  {
    path: "/login",
    element: <Login1 />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
