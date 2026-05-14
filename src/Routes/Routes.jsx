
import { createBrowserRouter } from "react-router";
import MainLeyout from "../MainLeyout/MainLeyout";
import Home from "../Pages/Home";
import PageNoteFount from "../Components/Error/PageNoteFount";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLeyout,
    
    children:[
      {
           index: true,
           Component: Home
      },
      {
        path:"login",
        Component: Login
      },
      {
        path:"register",
        Component: Register
      },
    ]
  },
  {
    path: "*",
    Component: PageNoteFount
  }
]);
export default router;