"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/context/AuthContext"; // Import useAuth

const Login = () => {
  const { user, login } = useAuth(); // Get user and login function from context
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/"); // Redirect to home if already logged in
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Customer Login", formData);

    try {
      const response = await axios.post("/api/login", formData);

      // Log in the user after successful login
      login({ email: formData.email }); // Adjust user data as necessary

      // Display success toast notification
      toast.success(response.data.message || "Login successful!");

      // Redirect to home page after a delay
      setTimeout(() => {
        router.push("/"); // Redirect to home page
      }, 4000); // 4000 milliseconds = 4 seconds
    } catch (error) {
      console.log("Login error:", error.response?.data?.message);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Head>
        <title>QuickStay - Login</title>
      </Head>
      <ToastContainer />
      <div className='h-screen flex justify-between items-center bg-login-background bg-no-repeat bg-cover opacity-85'>
        <div className='flex flex-col pl-10 lg:pl-20 text-white w-1/2'>
          <h2 className='text-4xl lg:text-5xl font-bold'>Welcome Back!</h2>
          <p className='font-bold text-xl lg:text-2xl mt-2'>
            Your perfect stay awaits you
          </p>
          <p className='font-bold text-3xl lg:text-4xl mt-10'>
            Login to your account
          </p>
          <p className='text-lg lg:text-xl mt-5'>
            Access personalized stays and special deals
          </p>
        </div>

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
              className='w-full h-10 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Login
            </button>
          </form>
          <div className='mt-5 text-center'>
            <p className='text-gray-600'>
              Don't have an account?{" "}
              <Link href='/signup'>
                <span className='text-blue-600 hover:underline'>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
