import React from "react";
import AddProduct from "../src/components/AddProduct";
import ProfileIcon from "../src/components/ProfileIcon";

function Dashboard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 p-6">

      
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-4 mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">
          Product Inventory
        </h2>

        <ProfileIcon />
      </div>

     
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Product Inventory System
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Manage products using MERN Stack
        </p>

        <AddProduct />
      </div>
    </div>
  );
}

export default Dashboard;
