import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

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
    <div className="w-full h-full bg-customBgcolor relative overflow-hidden">
      <div className="inset-0 z-0">
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
      <div className="flex items-center lg:gap-36 md:gap-20 gap-6">
        <div className="w-full lg:w-[550px] h-[300px] sm:h-[400px] lg:h-[700px] rounded-r-full lg:rounded-b-none lg:rounded-r-full  bg-white mb-8 lg:mb-0"></div>
        <div className="w-[800px] ml-10">
          <p
            ref={textRef}
            className="text-white font-Gist text-left mb-3 text-base sm:text-2xl md:text-4xl lg:text-5xl"
          >
            Edu-Link:
            <br />
            <span className="block mt-2 text-sm sm:text-xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-relaxed">
              Connects you to live teacher interactions and resources,
              empowering your learning journey anytime, anywhere
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
