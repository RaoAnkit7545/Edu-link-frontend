import Calander from "@/components/calander";
import CourseSection from "@/components/courseSection";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";

function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 100;
      const newParticles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute bg-customBgcolor rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${
              1 / particle.speed
            }s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="relative flex min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 flex w-full">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Header />
          <div className="w-full px-4 flex items-center justify-center mb-8">
            <img
              src="online-education illustration.png"
              alt="Online Education Illustration"
              className="h-fit object-cover rounded-lg max-h-[450px] max-w-[450px]"
            />
          </div>
          <CourseSection />
        </div>
        <Calander />
      </div>
    </div>
  );
}

export default Dashboard;
