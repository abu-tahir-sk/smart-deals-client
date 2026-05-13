import AuthProvider from "./Providers/AuthProvider";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router/dom";


const App = () => {
  return (
    <div>
       <AuthProvider>
         <RouterProvider router={router} />,
       </AuthProvider>
    </div>
  );
};

export default App;