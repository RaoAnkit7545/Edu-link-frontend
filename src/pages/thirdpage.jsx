import React from "react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

function Thirdpage() {
  return (
    <div className="bg-customBgcolor flex relative overflow-hidden">
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

      <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
        <div className="text-xl md:text-2xl lg:text-3xl font-Gist text-white mt-12 ml-28">
          <p>About </p>
        </div>

        <div className="bg-transparent w-full h-64"></div>
      </div>
    </div>
  );
}

export default Thirdpage;
