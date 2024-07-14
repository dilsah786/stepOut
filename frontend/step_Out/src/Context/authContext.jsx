import React, { createContext, useState, useContext } from "react";
import { api } from "../../config";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token,setToken] = useState("null")
  // const history = useHistory();

// Function for registering the user
  const register = async (e, name, email, password) => {
    e.preventDefault();

    try {
      const result = await fetch(`${api}/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const res = await result.json();
      setIsAuthenticated(true);
    } catch (err) {
      console.log("Error occured while registering a new user", err);
    }
  };


  // Function for logging the user

  const login = async (e, email, password) => {
    e.preventDefault();

    try {
      const result = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await result.json();
      console.log(res);
      setIsAuthenticated(true);

    } catch (err) {
      console.log("Error occured while loggin in a new user", err);
    }

    // history.push('/');
  };

  const logout = () => {
    setIsAuthenticated(false);
    // history.push('/login');
  };



  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
