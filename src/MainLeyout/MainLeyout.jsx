import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLeyout = () => {
      return (
            <div>
                  <Navbar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default MainLeyout;