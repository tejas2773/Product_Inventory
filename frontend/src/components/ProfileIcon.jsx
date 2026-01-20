import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/authSlice";

function ProfileIcon() {
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const reduxIntialstate=useSelector((state)=>state.auth);
  console.log(reduxIntialstate);
  
  const handleToggle = () => {
    setOpen(!open);
  };

  const Leave=()=>{
    dispatch(logout(null));
    navigate("http://localhost:5173/register")
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold hover:bg-indigo-700 transition"
      >
        U
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border p-4 z-50">
          <p className="text-xs text-gray-500 mb-1">Signed in as</p>

          
          <p className="text-sm font-semibold text-gray-800">{reduxIntialstate?.user?.name}</p>
          <p className="text-xs text-gray-600 mb-4">{reduxIntialstate?.user?.email}</p>

          <div className="h-px bg-gray-200 mb-3" />

          <button className="w-full text-left px-3 py-2 text-sm rounded-lg text-red-600 hover:bg-red-50" onClick={Leave}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
