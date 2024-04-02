import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  axios.defaults.withCredentials = true;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("https://backend-hqzy.onrender.com/api/v1/auth/login", formData)
        .then((res) => {
          if (res) {
            localStorage.setItem("auth-token", res.data.accessToken);
            toast.success("Login Successfull!");
            setTimeout(() => {
              window.location.href="/"
            }, 1000);
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setError(error.response.data.message);
          } else if (error.response.status === 403) {
            setError(error.response.data.message);
          } else {
            console.log(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
          // onClick={() => window.location.href="/"} //because i want to change the navbar dropdown icons(means login logout) auth-token remove and adding only after reloading
            type="submit"
            className="w-full btn-dark py-2"
          >
            Login
          </button>
          <Link className="text-blue-500 underline  text-sm" to="/forgotPassword">
            Forgot Password?
          </Link>
          <p>
            Don't Have Account?{" "}
            <Link
              className="text-blue-500 underline cursor-pointer"
              to="/signup"
            > 
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
    
  );
};
export default Login;
