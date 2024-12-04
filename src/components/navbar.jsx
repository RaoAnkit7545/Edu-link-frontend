// import { Button } from "/components/ui/button";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="top-0 h-16 w-full bg-customPurple">
      <div className="flex items-center justify-between ">
        <div className="w-fit h-fit p-2 rounded-full mt-6 ml-12 text-xl bg-white text- font-customFont flex items-center justify-center">
          Edu-Link
        </div>
        <div>
          <Button className="bg-white text-black mr-12 mt-6 hover:text-black hover:bg-slate-100">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
