import React from "react";
export default function AccountSettings() {
  return (
    <div className="min-h-screen bg-[#f7f9f8] px-4 pt-6" style={{ maxWidth: "375px", margin: "0 auto", border: "1px solid #ccc" }}>
      <h2 className="text-xl font-medium mb-4">Account Settings</h2>

      <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 13V16H7L16.2929 6.70711L13.2929 3.70711L4 13ZM17.7071 5.29289C18.0976 4.90237 18.0976 4.2692 17.7071 3.87868L16.1213 2.29289C15.7308 1.90237 15.0976 1.90237 14.7071 2.29289L13.2929 3.70711L16.2929 6.70711L17.7071 5.29289Z" />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Marry Doe</h3>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-gray-700 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}
