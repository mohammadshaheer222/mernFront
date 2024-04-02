import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(email);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hai", email);
    try {
      await axios
        .post("https://mernback-5-r5jk.onrender.com//api/v1/auth/forgotPassword", {
          email: email,
        })
        .then((res) => {
          if (res) {
            alert("Check your email for reset password link");
            toast.success("Login Successfull!");
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setError(error.response.data.message);
          } else if (error.response.status === 404) {
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
        <h1 className="text-3xl font-bold mb-4 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full btn-dark py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
