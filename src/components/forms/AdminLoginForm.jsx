import React, { useState } from "react";
import FormInputHandler from "../formInputHandler/FormInputHandler";
import LoginSignupFormBtn from "../../Utilities/buttons/LoginSignupFormBtn";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Utilities/base/baseURL";
import axios from "axios";

function AdminLoginForm({ setSuccessMsg, setFailedMsg }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${baseUrl}/admin/login`, formData, {
        headers: { "Content-Type": "Application/json" },
      });

      const { message, token } = response.data;
      console.log(response.data);
      if (token) {
        localStorage.setItem("admin-token", token);

        setSuccessMsg(message);
        setError({});
        setFailedMsg("");

        setTimeout(() => {
          window.location.href = "/admin-dashboard";
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        setFailedMsg(error.response.data.message);
      }
      if (error.response && error.response.data.errors) {
        setError(error.response.data.errors);
      }
    }
  }
  return (
    <>
      <div className="h-auto w-[400px] shadow-[0px_5px_25px_rgba(0,0,0,0.1)] bg-white rounded-tl-lg rounded-bl-lg ">
        <div className="px-8 mt-10">
          <h2 className="text-2xl font-medium">Login</h2>
          <p className="mb-3 text-sm text-gray">Please login to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="px-8">
          <FormInputHandler
            state={email}
            setState={setEmail}
            type="email"
            name="diuEmail"
            placeholder="Enter email"
          />

          <p
            className={`${
              error.email ? "block text-xs text-red bg-rose-100 p-1" : "hidden"
            }`}
          >
            {`${error.email ? error.email.msg : ""}`}
          </p>

          <FormInputHandler
            state={password}
            setState={setPassword}
            type="password"
            name="password"
            placeholder="Password"
          />

          <div className="flex justify-end text-sm font-medium text-black">
            <p>Forgot password?</p>
          </div>

          <LoginSignupFormBtn
            type="submit"
            btnName="Login"
            btnColor="black" //color from color-scheme
          />

          <div className="py-6">
            <p className="text-sm text-center">
              Don't have an account?
              <span className=" font-bold text-black cursor-pointer hover:underline">
                <Link to="/signup"> Signup</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLoginForm;
