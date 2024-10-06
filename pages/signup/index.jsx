"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/context/AuthContext"; // Import useAuth

const SignUp = () => {
  const { login } = useAuth(); // Get login function from context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Customer Sign Up", formData);

    try {
      const response = await axios.post("/api/signup", formData);
      toast.success(response.data.message || "Sign up successful!");

      // Automatically log in the user after signup
      setTimeout(() => {
        login({ name: formData.name, email: formData.email }); // Adjust user data as necessary
        router.push("/"); // Redirect to the homepage after logging in
      }, 2500); // Delay of 2.5 seconds
    } catch (error) {
      console.log("Signup error:", error.response?.data?.message);
      toast.error(error.response?.data?.message || "Sign up failed");
    }
  };

  useEffect(() => {
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.password.trim()
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  return (
    <div>
      <Head>
        <title>QuickStay - Sign Up</title>
      </Head>
      <ToastContainer />
      <div className='h-screen flex justify-between items-center bg-login-background bg-no-repeat bg-cover opacity-85'>
        <div className='flex flex-col pl-10 lg:pl-20 text-white w-1/2'>
          <h2 className='text-4xl lg:text-5xl font-bold'>
            Welcome to Your Perfect Stay
          </h2>
          <p className='font-bold text-xl lg:text-2xl mt-2'>
            Experience Convenience and Comfort at Your Fingertips
          </p>
          <p className='font-bold text-3xl lg:text-4xl mt-10'>
            There's a smarter way to Quick around
          </p>
          <p className='text-lg lg:text-xl mt-5'>
            Sign Up to Access Personalized Stays and Special Deals
          </p>
        </div>

        <div className='w-full max-w-md border bg-white p-5 lg:p-8 rounded-lg shadow-lg mr-10 lg:mr-20'>
          <p className='h-10 flex items-center px-5 bg-blue-600 text-lg font-bold text-white'>
            Sign Up
          </p>
          <form onSubmit={handleSubmit} className='mt-5'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              className='outline-none border my-3 border-gray-600 px-3 py-1 w-full h-10 rounded-lg'
              aria-label='Name'
              required
            />
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
              disabled={isButtonDisabled}
              className={`w-full h-10 rounded-lg text-white font-bold ${
                isButtonDisabled
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Sign Up
            </button>
          </form>
          <div className='mt-5 text-center'>
            <p className='text-gray-600'>
              Already have an account?{" "}
              <Link href='/login'>
                <span className='text-blue-600 hover:underline'>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
