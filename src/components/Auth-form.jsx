"use client";
import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";

export default function AuthForm() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [role, setRole] = useState("learner");
  const fileInputRef = useRef(null);
  const [authMode, setAuthMode] = useState("signup");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "signup") {
      console.log("Signup submitted", {
        role,
        avatar: selectedAvatar,
      });
    } else {
      console.log("Login submitted");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const toggleRole = () => {
    setRole(role === "learner" ? "instructor" : "learner");
  };

  const removeAvatar = () => {
    setSelectedAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
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
        <>
          {/* Role Toggle */}
          <div className="flex justify-center my-3">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                type="button"
                onClick={toggleRole}
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
                onClick={toggleRole}
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

          {/* Avatar Upload */}
          <div className="mb-4">
            <Label className="block mb-2 text-center">Profile Picture</Label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              className="hidden"
            />
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed rounded-md w-24 h-24 mx-auto cursor-pointer hover:bg-gray-50 transition"
              onClick={triggerFileInput}
            >
              {selectedAvatar ? (
                <div className="relative">
                  <img
                    src={selectedAvatar}
                    alt="Selected Avatar"
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeAvatar();
                    }}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FaCloudUploadAlt className="text-3xl text-gray-400 mb-1" />
                  <p className="text-gray-600 text-xs">Upload Avatar</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <form className="my-6" onSubmit={handleSubmit}>
        {authMode === "signup" && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-3">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="abc" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="xyz" type="text" />
            </LabelInputContainer>
          </div>
        )}
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
            />
          </LabelInputContainer>
        )}
        <LabelInputContainer className="mb-3">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Edu-Link@fc.com" type="email" />
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
            />
          </LabelInputContainer>
        )}

        <LabelInputContainer className="mb-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
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
