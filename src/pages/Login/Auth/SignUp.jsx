import React from 'react';
import Img from '../../../assets/firstbg.png';
import Logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const Hop = () => navigate('/');
  const Login = () => navigate('/Login');

  return (
    <div className="h-[90vh] max-w-6xl mx-auto bg-cover bg-center grid grid-cols-1 md:grid-cols-2 items-center justify-center px-6 gap-10">
      {/* Left Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          onClick={Hop}
          src={Img}
          className="w-full h-auto object-contain rounded-lg"
          alt="SignUp visual"
        />
      </div>

      {/* Right Form */}
      <form className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto">
        <div className="flex  items-center justify-center">
          <img src={Logo} alt="logo" />
        </div>
        <h1 className="text-xl font-medium text-[#daa81f71] mb-6 text-center">
          Sign Up
        </h1>

        {/* Name */}
        <div className="flex gap-5">
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm text-gray-200 mb-2">
              First Name
            </label>

            <input
              type="text"
              required
              id="firstname"
              name="firstname"
              placeholder="Enter your First name"
              className="w-full border text-sm border-[#daa81f81] rounded-[20px] px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600  focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm text-gray-200 mb-2">
              Last Name
            </label>

            <input
              type="text"
              required
              id="lastname"
              name="lastname"
              placeholder="Enter your Last name"
              className="w-full border text-sm border-[#daa81f81] rounded-[20px] px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600  focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-200 mb-2">
            Username
          </label>

          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Enter your Username"
            className="w-full border text-sm border-[#daa81f81] rounded-[20px] px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600  focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-200 mb-2">
            Email Address
          </label>

          <input
            type="email"
            required
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full border text-sm border-[#daa81f81] rounded-[20px] px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600  focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm text-gray-200 mb-2"
          >
            Create Password
          </label>
          <input
            type="password"
            required
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border text-sm border-[#daa81f81] rounded-[20px] px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600  focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm text-gray-200 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            required
            id="password"
            name="password"
            placeholder="Confirm your password"
            className="w-full border text-sm border-[#daa81f81] rounded-[20px] px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600  focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#DAA71F] text-black font-medium py-2 rounded-lg hover:bg-[#a30b0b] transition"
        >
          Sign Up
        </button>

        {/* Extra */}
        <p className="mt-4 text-sm text-gray-400 text-center">
          Already have an account?{' '}
          <a onClick={Login} className="text-[#DAA71F] hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
