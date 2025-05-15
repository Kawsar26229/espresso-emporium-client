import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import DetailedCoffee from "../pages/DetailesCoffee/DetailedCoffee";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`http://localhost:4000/coffees/${params.id}`)
      },
      {
        path: "/details-coffee/:id",
        element: <DetailedCoffee />,
        loader: ({params}) => fetch(`http://localhost:4000/coffees/${params.id}`)
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
