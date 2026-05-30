
import { createBrowserRouter } from "react-router";
import MainLeyout from "../MainLeyout/MainLeyout";
import Home from "../Pages/Home";
import PageNoteFount from "../Components/Error/PageNoteFount";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ViewsDetails from "../Components/Home/ViewsDetails";


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
        path:"views-details/:id",
        loader: ({params})=>fetch(`http://localhost:3000/products/${params.id}`),
        Component: ViewsDetails
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