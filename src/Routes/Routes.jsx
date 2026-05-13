
import { createBrowserRouter } from "react-router";
import MainLeyout from "../MainLeyout/MainLeyout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLeyout,
    children:[
      {
           index: true,
           Component: Home
      }
    ]
  },
]);
export default router;