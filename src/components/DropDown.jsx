import { NavLink } from "react-router-dom";
import { PiUserThin } from "react-icons/pi";
import { useState } from "react";

const DropDown = () => {
  return (
    <>
      {localStorage.getItem("auth-token") ? (
        <NavLink
          onClick={() => {
            localStorage.removeItem("auth-token");
            window.location.href = "/login";
          }}
          className="btn-dark px-8 py-1 text-sm scale-90 hover:scale-100 transition-all duration-300"
        >
          Logout
        </NavLink>
      ) : (
        <details className="dropdown relative">
          <summary className="m-1 cursor-pointer flex items-center">
            <PiUserThin size={30} />
          </summary>
          <ul className="absolute top-full right-0 mt-8 p-2  menu dropdown-content z-[1]  rounded-box px-1 flex items-center gap-x-2 ">
            <li>
              <NavLink
                to="/login"
                className="bg-blue-500 px-4 py-1  rounded-md text-white cursor-pointer"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="text-nowrap ring-1 ring-gray-400 rounded-md px-4 py-1 cursor-pointer"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </details>
      )}
    </>
  );
};

export default DropDown;
