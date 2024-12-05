import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Meteors from "@/components/ui/meteors";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AuthForm from "@/components/Auth-form.jsx";

gsap.registerPlugin(ScrollTrigger);

function Firstpage() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    gsap.fromTo(
      textElement,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageElement,
      {
        scale: 1.2,
        y: -50,
        clipPath: "inset(10% 0% 0% 0%)",
      },
      {
        scale: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        scrollTrigger: {
          trigger: imageElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

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

      <div className="absolute inset-0 z-0">
        <Meteors number={40} />
      </div>

      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-4xl text-white font-Gist z-10">
        <p>Edu-Link</p>
      </div>

      <div className="flex-grow flex items-center pl-12 flex-col mt-2 lg:flex-row relative z-10">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <p
            ref={textRef}
            className="text-4xl md:text-5xl lg:text-6xl font-Gist text-white leading-tight text-center lg:text-left mb-8"
          >
            Edu-Link:
            <br />
            <span className="text-4xl">
              Bringing Learning Opportunities to Every Corner
            </span>
          </p>

          <div className="flex justify-center lg:justify-start font-Gist">
            <button
              className="relative bg-white text-black px-8 py-4 rounded-md shadow-lg flex items-center space-x-4 group overflow-hidden"
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

        <div className="w-full lg:w-1/2 flex justify-center overflow-hidden">
          <img
            ref={imageRef}
            src="pic1.png"
            alt="Illustration"
            className="w-full rounded-lg transform"
            style={{
              height: "calc(100% + 50px)",
              maxWidth: "100%",
              clipPath: "inset(10% 0% 0% 0%)",
            }}
          />
        </div>
      </div>

      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={handleCloseSignup}
              className="absolute top-6 right-5 text-customPurple z-50 hover:text-gray-300 transition-colors"
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
