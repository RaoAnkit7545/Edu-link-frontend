import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Secondpage() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full h-full bg-zinc-800">
      <div className="flex items-center gap-28 space-x-10">
        <div className="h-[700px] w-[550px] rounded-r-full bg-white"></div>
        <div className="w-[800px]">
          <p
            ref={textRef}
            className="text-2xl md:text-4xl lg:text-5xl font-customFont text-white text-left"
          >
            Edu-Link:
            <br />
            Connects you to live teacher interactions and resources, empowering
            your learning journey anytime, anywhere
          </p>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
