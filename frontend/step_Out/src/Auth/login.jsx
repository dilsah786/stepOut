import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/authContext';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isAuthenticated ,token} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e,email, password);
  };

  // Redirect to home if authenticated
  if (token && isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex pt-32 justify-center items-center">
      <div className="">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-center font-bold text-3xl text-blue-500 mb-1">Welcome to Irctc</h1>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              isAuthenticated && 'cursor-not-allowed opacity-50'
            }`}          
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
