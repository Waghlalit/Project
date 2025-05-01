import React from "react";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
  const navigate = useNavigate()
  return (
    
    <div style={{ maxWidth: "375px", margin: "0 auto", border: "1px solid #ccc" }} className="min-h-screen flex items-end justify-center bg-gray-50 px-4 pb-10">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button onClick={() => navigate("/signup") } className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition mb-3">
          Create Account
        </button>
        <button onClick={() => navigate("/login")} className="w-full bg-purple-100 text-purple-900 py-3 rounded-lg font-medium text-lg hover:bg-purple-200 transition">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}




