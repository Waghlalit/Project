import React from "react";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-end justify-center bg-gray-50 px-4 pb-10">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition mb-3">
          Create Account
        </button>
        <button className="w-full bg-purple-100 text-purple-900 py-3 rounded-lg font-medium text-lg hover:bg-purple-200 transition">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}




