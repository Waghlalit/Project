import React from "react";

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-[#f7f9f8] px-4 pt-10">
      <h2 className="text-2xl font-semibold mb-1">Signin to your PopX account</h2>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-[#6C25FF]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#6C25FF]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-gray-300 text-white py-2 rounded-lg text-center font-medium cursor-not-allowed"
          disabled
        >
          Login
        </button>
      </form>
    </div>
  );
}
