import Head from "next/head";
import React, { useState } from "react";

const Login = () => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (isSignUp && !formData.name)) {
      alert("Please fill in the required fields.");
      return;
    }
    console.log(isCustomer ? "Customer Login/Signup" : "Admin Login", formData);
    // Authentication logic for customer/admin can be implemented here
  };

  return (
    <div>
      <Head>
        <title>QuickStay - Login</title>
      </Head>
      <div className='h-screen flex justify-between items-center bg-login-background bg-no-repeat bg-cover opacity-85'>
        {/* Left Side - Welcome Text */}
        <div className='flex flex-col pl-10 lg:pl-20 text-white w-1/2'>
          <h2 className='text-4xl lg:text-5xl font-bold'>
            Welcome to Your Perfect Stay
          </h2>
          <p className='font-bold text-xl lg:text-2xl mt-2'>
            Experience Convenience and Comfort at Your Fingertips"
          </p>
          <p className='font-bold text-3xl lg:text-4xl mt-10'>
            There's a smarter way to Quick around
          </p>
          <p className='text-lg lg:text-xl mt-5'>
            Sign Up to Access Personalized Stays and Special Deals
          </p>
        </div>

        {/* Right Side - Login Box */}
        <div className='w-full max-w-md border bg-white p-5 lg:p-8 rounded-lg shadow-lg mr-10 lg:mr-20'>
          <p className='h-10 flex items-center px-5 bg-blue-600 text-lg font-bold text-white'>
            {isCustomer
              ? isSignUp
                ? "Sign Up"
                : "Customer Login"
              : "Admin Login"}
          </p>
          <form onSubmit={handleSubmit} className='mt-5'>
            {isCustomer && isSignUp && (
              <div>
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
                />
              </div>
            )}
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
            />
            <button
              type='submit'
              className='w-full h-14 text-lg font-bold bg-blue-600 hover:cursor-pointer hover:bg-blue-600 text-white my-5 rounded-lg'
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
            <p className='text-lg text-center'>
              {isCustomer ? (
                isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <span
                      className='text-blue-600 hover:cursor-pointer'
                      onClick={() => setIsSignUp(false)}
                    >
                      Login here
                    </span>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <span
                      className='text-blue-600 hover:cursor-pointer'
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign up here
                    </span>
                  </>
                )
              ) : (
                <>
                  Or sign in as{" "}
                  <span
                    className='text-blue-600 hover:cursor-pointer'
                    onClick={() => setIsCustomer(true)}
                  >
                    Customer
                  </span>
                </>
              )}
            </p>
          </form>

          {/* Login options at the bottom */}
          <div className='mt-5'>
            <p className='text-center text-sm font-bold'>Or sign in as</p>
            <div className='flex justify-around mt-2'>
              <span
                className={`text-blue-600 font-bold hover:cursor-pointer ${
                  isCustomer ? "underline" : ""
                }`}
                onClick={() => setIsCustomer(true)}
              >
                Customer
              </span>
              <span
                className={`text-blue-600 font-bold hover:cursor-pointer ${
                  !isCustomer ? "underline" : ""
                }`}
                onClick={() => setIsCustomer(false)}
              >
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
