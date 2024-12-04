import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Firstpage() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

  return (
    <div className="bg-zinc-800 w-full min-h-screen flex flex-col relative">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-4xl text-white font-customFont">
        <p>Edu-Link</p>
      </div>

      <div className="flex-grow flex items-center pl-12 flex-col mt-2 lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <p
            ref={textRef}
            className="text-4xl md:text-5xl lg:text-6xl font-customFont text-white leading-tight text-center lg:text-left mb-8"
          >
            Edu-Link:<br></br> Bringing Learning Opportunities to Every Corner,
            Empowering Dreams and Building Futures.
          </p>
          <div className="flex justify-center  lg:justify-start">
            <button className="relative bg-white text-black px-8 py-4 rounded-md shadow-lg flex items-center space-x-4 group overflow-hidden">
              <span className="absolute inset-0 bg-customPurple transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10  group-hover:text-white transition-colors duration-300">
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
    </div>
  );
}

export default Firstpage;
