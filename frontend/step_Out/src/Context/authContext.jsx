import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../config";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");







 console.log(isAuthenticated);









  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

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
      console.log("Error occurred while registering a new user", err);
    }
  };

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
      setToken(res.token);
      setIsAuthenticated(true);
      localStorage.setItem("token", JSON.stringify(res.token));
    } catch (err) {
      console.log("Error occurred while logging in a user", err);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, token }}>
      {children}
    </AuthContext.Provider>
  );
};
