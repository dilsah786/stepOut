import React, { useContext } from "react";
import Register from "./Auth/register";
import Login from "./Auth/login";
import { AuthContext } from "./Context/authContext";
import HomePage from "./pages/HomePage";
import AllRoutes from "./Routing/AllRoutes";

const App = () => {

  return (
    <div className="bg-slate-400 min-h-[100vh]" >
     <AllRoutes/>
    </div>
  );
};

export default App;
