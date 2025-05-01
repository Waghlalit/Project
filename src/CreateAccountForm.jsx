import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccountForm() {
  const [isAgency, setIsAgency] = useState("yes");
  const navigate = useNavigate();
  return (
    <div
      style={{ maxWidth: "375px", margin: "0 auto", border: "1px solid #ccc" }}
    >
      <div className="min-h-screen bg-[#f7f9f8] px-4 pt-6">
        <h2 className="text-2xl font-semibold mb-6">
          Create your PopX account
        </h2>

        <form className="flex flex-col gap-4">
          {[
            { label: "Full Name", required: true },
            { label: "Phone number", required: true },
            { label: "Email address", required: true },
            { label: "Password", required: true, type: "password" },
            { label: "Company name" },
          ].map(({ label, required, type = "text" }, i) => (
            <div key={i}>
              <label className="text-sm font-medium text-[#6C25FF]">
                {label}
                {required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={type}
                defaultValue="Marry Doe"
                required={required}
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              {["yes", "no"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value={option}
                    checked={isAgency === option}
                    onChange={(e) => setIsAgency(e.target.value)}
                    className="accent-[#6C25FF]"
                  />
                  <span className="capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/account")}
            className="mt-6 w-full bg-[#6C25FF] text-white py-2 rounded-lg text-center font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
