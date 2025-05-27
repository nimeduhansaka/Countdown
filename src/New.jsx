import React, { useState, useEffect } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#000300]">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00df9a] rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#00df9a] rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen grid place-items-center bg-[#000300]">

      <form className="relative bg-white bg-opacity-10 border-2 border-none shadow-xl shadow-[#00df9a] p-8 rounded-[20px] sm:w-96 backdrop-blur-lg">
        <h1 className="text-center py-2 text-2xl font-medium mb-8 text-[#00df9a]">Log and Launch</h1>

        <div className="grid gap-7 mb-6">
          <div className="grid grid-cols-[max-content_1fr] items-center gap-3 border-b-2 border-white relative">
            <i className="ri-user-3-line text-xl text-white"></i>

            <div className="relative w-full">
              <input
                type="email"
                required
                className="w-full py-3 bg-transparent text-white peer focus:outline-none"
                id="login-email"
                placeholder=" "
              />
              <label
                htmlFor="login-email"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-300 peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-[-12px] peer-focus:text-sm"
              >
                Email
              </label>
            </div>
          </div>

          <div className="grid grid-cols-[max-content_1fr] items-center gap-3 border-b-2 border-white relative">
            <i className="ri-lock-2-line text-xl text-white"></i>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full py-3 bg-transparent text-white pr-10 peer focus:outline-none"
                id="login-pass"
                placeholder=" "
              />
              <label
                htmlFor="login-pass"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-300 peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-[-12px] peer-focus:text-sm"
              >
                Password
              </label>
              {showPassword ? (
                <HiEyeSlash
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-xl"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <HiEye
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-xl"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" id="login-check" />
            <label htmlFor="login-check" className="text-sm text-white">Remember me</label>
          </div>

          <a href="#" className="text-sm text-[#00df9a] hover:underline">Forgot Password?</a>
        </div>

        <button
          type="submit"
          className="bg-[#00df9a] w-full my-6 text-[#000300] rounded-md text-[17px] font-semibold py-4 px-8 border border-black shadow-none transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:translate-x-[-2px] hover:shadow-[2px_5px_0_0_black] active:translate-y-[2px] active:translate-x-[1px] active:shadow-none"
        >
          Login
        </button>

        <p className="text-center text-white">
          Don't have an account?{" "}
          <a href="#" className="font-medium hover:underline text-[#00df9a]">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
