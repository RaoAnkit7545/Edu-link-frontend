"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const toggleLoginMethod = () => {
    setLoginMethod(loginMethod === "email" ? "username" : "email");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative max-w-sm w-full mx-auto rounded-xl p-4 md:p-6 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-lg text-neutral-800 dark:text-neutral-200">
        Welcome Back to Edu-Link
      </h2>
      <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
        Log in to continue your learning journey
      </p>

      <div className="flex justify-center my-3">
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          <button
            type="button"
            onClick={toggleLoginMethod}
            className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
              loginMethod === "email"
                ? "bg-customPurple text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={toggleLoginMethod}
            className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
              loginMethod === "username"
                ? "bg-customPurple text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Username
          </button>
        </div>
      </div>

      <form className="my-6" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-3">
          <Label htmlFor="login-identifier">
            {loginMethod === "email" ? "Email Address" : "Username"}
          </Label>
          <Input
            id="login-identifier"
            placeholder={
              loginMethod === "email"
                ? "Enter your email"
                : "Enter your username"
            }
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-3">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              className="pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </LabelInputContainer>

        <div className="text-right mb-3">
          <button
            type="button"
            className="text-sm text-customPurple hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          className="bg-customPurple w-full text-white rounded-md h-9 font-medium"
          type="submit"
        >
          Log In &rarr;
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <button className="text-customPurple font-medium underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 w-full", className)}>
      {children}
    </div>
  );
};
