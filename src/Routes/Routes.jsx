import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Checkout from "../pages/checkout/Checkout";
import BookService from "../pages/bookServices/BookService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "bookservice/:id",
        element: <BookService></BookService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/services/${params.id}`),
      },
      {
        path: `checkout/:id`,
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/services/${params.id}`),
      },
    ],
  },
]);

export default router;
