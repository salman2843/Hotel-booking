"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter correctly
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // Initialize the router
  const router = useRouter();

  // Method to handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Method to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message before submission
    console.log("Customer Sign Up", formData);

    try {
      // Sending POST request to the signup API using axios
      const response = await axios.post(
        "http://localhost:5000/api/users/signup", // Updated API path
        formData
      );

      // Show success message
      setMessage(response.data.message || "Sign up successful!");
      // Navigate to the login page after successful sign-up
      router.push("/login");
    } catch (error) {
      setMessage(error.response?.data?.error || "Sign up failed"); // Show error message
    }
  };

  // Effect to check if the button should be disabled or not
  useEffect(() => {
    // Check if name, email, and password are not empty
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
      <div className='h-screen flex justify-between items-center bg-login-background bg-no-repeat bg-cover opacity-85'>
        {/* Left Side - Welcome Text */}
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

        {/* Right Side - Sign Up Box */}
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
              className={`w-full h-14 text-lg font-bold ${
                isButtonDisabled ? "bg-gray-400" : "bg-blue-600"
              } text-white my-5 rounded-lg`}
              disabled={isButtonDisabled}
            >
              Sign Up
            </button>
            <Link href='/login'>
              <p className='text-md text-center  hover:cursor-pointer'>
                Already have an account? &nbsp;
                <span className='text-blue-600 hover:cursor-pointer'>
                  Login here
                </span>
              </p>
            </Link>

            {message && (
              <p
                className={`text-center ${
                  message.includes("failed") ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
