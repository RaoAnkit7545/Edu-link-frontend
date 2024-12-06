"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [role, setRole] = useState("learner");
  const [authMode, setAuthMode] = useState("signup");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (authMode === "signup") {
        const formDataToSend = new FormData();
        formDataToSend.append("username", formData.username);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        formDataToSend.append("role", role);
        const defaultAvatarUrl = "public/user.png";
        const response = await fetch(defaultAvatarUrl);
        const avatarBlob = await response.blob();
        formDataToSend.append("avatar", avatarBlob, "user.png");

        const apiResponse = await axios.post(
          "http://localhost:8000/api/v1/users/signup",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Signup successful:", apiResponse.data);
        setAuthMode("login");
      } else if (authMode === "login") {
        const apiResponse = await axios.post(
          "http://localhost:8000/api/v1/users/login",
          {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }
        );

        console.log("Login successful:", apiResponse.data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(
        `${authMode === "signup" ? "Signup" : "Login"} error:`,
        error
      );
    }
  };

  return (
    <div className="relative max-w-sm w-full mx-auto rounded-xl p-4 md:p-6 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-lg text-neutral-800 dark:text-neutral-200">
        Welcome to Edu-Link
      </h2>
      <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
        {authMode === "signup"
          ? "Create your account and start your learning journey."
          : "Log in to continue your learning journey."}
      </p>

      {authMode === "signup" && (
        <div className="flex justify-center my-3">
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              type="button"
              onClick={() => setRole("learner")}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                role === "learner"
                  ? "bg-customPurple text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Learner
            </button>
            <button
              type="button"
              onClick={() => setRole("instructor")}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                role === "instructor"
                  ? "bg-customPurple text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Instructor
            </button>
          </div>
        </div>
      )}

      <form className="my-6" onSubmit={handleSubmit}>
        {authMode === "login" && (
          <LabelInputContainer className="mb-3">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder={
                role === "learner"
                  ? "e.g., StudentLearner123"
                  : "e.g., ProfessionalInstructor"
              }
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        )}
        <LabelInputContainer className="mb-3">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Edu-Link@fc.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        {authMode === "signup" && (
          <LabelInputContainer className="mb-3">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder={
                role === "learner"
                  ? "e.g., StudentLearner123"
                  : "e.g., ProfessionalInstructor"
              }
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        )}

        <LabelInputContainer className="mb-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        <button
          className="bg-customPurple w-full text-white rounded-md h-9 font-medium"
          type="submit"
        >
          {authMode === "signup" ? "Sign up" : "Log in"} &rarr;
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {authMode === "signup"
            ? "Already have an account? "
            : "Don't have an account? "}
          <button
            className="text-customPurple font-medium underline"
            onClick={() =>
              setAuthMode(authMode === "signup" ? "login" : "signup")
            }
          >
            {authMode === "signup" ? "Log in" : "Sign up"}
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
