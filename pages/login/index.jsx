"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message before submission
    console.log("Customer Login", formData);

    try {
      // Sending POST request to the login API using axios
      const response = await axios.post("/api/users/login", formData);

      // Show success message or handle the response as needed
      setMessage(response.data.message || "Login successful!");
      // Redirect or perform other actions after a successful login
    } catch (error) {
      setMessage(error.response?.data?.error || "Login failed"); // Show error message
    }
  };

  useEffect(() => {
    // Check if email and password are not empty
    if (formData.email.trim() && formData.password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  return (
    <div>
      <Head>
        <title>QuickStay - Login</title>
      </Head>
      <div className='h-screen flex justify-between items-center bg-login-background bg-no-repeat bg-cover opacity-85'>
        {/* Left Side - Welcome Text */}
        <div className='flex flex-col pl-10 lg:pl-20 text-white w-1/2'>
          <h2 className='text-4xl lg:text-5xl font-bold'>
            Welcome Back to QuickStay
          </h2>
          <p className='font-bold text-xl lg:text-2xl mt-2'>
            Your Perfect Stay Awaits
          </p>
          <p className='font-bold text-3xl lg:text-4xl mt-10'>
            Access Your Personalized Stays and Special Deals
          </p>
          <p className='text-lg lg:text-xl mt-5'>
            Login to Continue Enjoying Convenience and Comfort
          </p>
        </div>

        {/* Right Side - Login Box */}
        <div className='w-full max-w-md border bg-white p-5 lg:p-8 rounded-lg shadow-lg mr-10 lg:mr-20'>
          <p className='h-10 flex items-center px-5 bg-blue-600 text-lg font-bold text-white'>
            Login
          </p>
          <form onSubmit={handleSubmit} className='mt-5'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              className='outline-none border my-3 border-gray-600 px-3 py-1 w-full h-10 rounded-lg'
              aria-label='Email'
              required
            />
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              className='outline-none border my-3 border-gray-600 px-3 py-1 w-full h-10 rounded-lg'
              aria-label='Password'
              required
            />
            <button
              type='submit'
              className={`w-full h-14 text-lg font-bold ${
                isButtonDisabled ? "bg-gray-400" : "bg-blue-600"
              } text-white my-5 rounded-lg`}
              disabled={isButtonDisabled}
            >
              Login
            </button>
            {message && (
              <p
                className={`text-center ${
                  message.includes("failed") ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}
            <Link href='/signup'>
              <p className='text-md text-center '>
                Don't have an account? &nbsp;
                <span className='text-blue-600 hover:cursor-pointer'>
                  Sign up here
                </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
