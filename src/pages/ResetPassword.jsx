import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const params = useParams();
  const { accessToken } = params;
  //   console.log(accessToken)

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(password);
    try {
      await axios
        .post(
          `https://mernback-5-r5jk.onrender.com//api/v1/auth/resetPassword/${accessToken}`,
          { password }
        )
        .then((res) => {
          if (res) {
            navigate("/login");
            // localStorage.setItem("auth-token", res.data.accessToken);
          }
          //   toast.success("Login Successfull!");
          //   setTimeout(() => {
          //     navigate("/");
          //   }, 1000);
        })
        .catch((error) => {
          if (error.response.status === 401) {
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
        <h1 className="text-3xl font-bold mb-4 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full btn-dark py-2"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
