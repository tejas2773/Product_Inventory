import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
  });

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(login(form));
    setForm({email:"",password:"",name:""})
    navigate("http://localhost:5173/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-purple-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>

        </form>

       
        <p className="text-center text-sm text-gray-500 mt-6">
          have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Registration;
