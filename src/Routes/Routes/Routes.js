import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Categories from "../../Pages/Home/Categories/Categories";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories",
        element: (
          // <PrivateRoute>
          <Categories></Categories>
          // </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/categories/:categoryId",
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-muktaranidas.vercel.app/categories/${params.categoryId}`
          ),
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-muktaranidas.vercel.app/bookings/${params.id}`,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          ),
      },
    ],
  },
]);
export default router;
