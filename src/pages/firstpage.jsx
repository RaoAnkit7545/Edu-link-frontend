import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Meteors from "@/components/ui/meteors";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AuthForm from "@/components/Auth-form.jsx";

gsap.registerPlugin(ScrollTrigger);

function Firstpage() {
  const [showSignup, setShowSignup] = useState(false);
  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <div className="bg-customBgcolor w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern
          className="absolute inset-0 opacity-50"
          squares={[
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
          ]}
        />
      </div>

      {/* Meteors */}
      <div className="absolute inset-0 z-0">
        <Meteors number={20} />
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-2xl sm:text-3xl md:text-4xl text-white font-Gist">
          Edu-Link
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 pt-16 lg:pt-2 relative z-10">
        {/* Mobile and Tablet screen*/}
        <div className="w-full flex flex-col items-center lg:hidden">
          {/* Image */}
          <div className="w-full max-w-md  ">
            <img
              src="pic2.png"
              alt="Illustration"
              className="w-full h-auto rounded-lg shadow-xl"
              style={{
                maxHeight: "70vh",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="text-center max-w-md px-4 mb-8">
            <h1 className="text-3xl sm:text-4xl font-Gist text-white leading-tight mb-2 mt-3">
              Edu-Link:
            </h1>
            <p className="text-xl sm:text-2xl text-white font-Gist mb-8">
              Bringing Learning Opportunities to Every Corner
            </p>
            <button
              className="relative bg-white text-black px-6 py-3 rounded-md shadow-lg flex items-center space-x-3 group overflow-hidden font-Gist text-base mx-auto"
              onClick={handleSignup}
            >
              <span className="absolute inset-0 bg-customPurple transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get Started
              </span>
              <FaArrowRight className="relative z-10 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
        {/* lappi */}
        <div className="hidden lg:flex w-full">
          <div className="w-1/2 pr-8">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-Gist text-white leading-tight  mt-60">
                Edu-Link:
              </h1>
              <p className="text-3xl lg:text-4xl text-white font-Gist mb-8">
                Bringing Learning Opportunities to Every Corner
              </p>
              <button
                className="relative bg-white text-black px-8 py-4 rounded-md shadow-lg flex items-center space-x-4 group overflow-hidden font-Gist text-lg"
                onClick={handleSignup}
              >
                <span className="absolute inset-0 bg-customPurple transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Get Started
                </span>
                <FaArrowRight className="relative z-10 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 px-8">
            <img
              src="pic2.png"
              alt="Illustration"
              className="w-full h-auto rounded-lg shadow-xl"
              style={{
                minWidth: "59vw",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <button
              onClick={handleCloseSignup}
              className="absolute top-2 right-9 text-customPurple z-50 hover:text-gray-300 transition-colors"
              aria-label="Close signup form"
            >
              <FaTimes size={24} className="hover:text-purple-500" />
            </button>
            <AuthForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Firstpage;
