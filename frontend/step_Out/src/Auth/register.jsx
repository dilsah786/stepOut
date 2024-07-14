import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/authContext';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {register,token} = useContext(AuthContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        register(e,name,email,password);
        setName("");
        setEmail("");
        setPassword("");

    }

    if(token){
      <Navigate to={"/"} />
      console.log("token hai isme",token);
    }
  


  return (
    <div className='min-[264px]:flex justify-center items-center pt-28' >
    <div className=''>
    <form onSubmit={(e)=>handleSubmit(e,name,email,password)} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
    <h1 className='text-center font-bold text-3xl text-blue-500 mb-1' >Welcome to Irctc</h1>
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" 
          required 
        />
      </div>
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
      <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Register
      </button>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-indigo-600 hover:underline"> <Link to={"/"} >Login</Link> </Link>
      </p>
    </form>
    </div>
    </div>
  )
}

export default Register