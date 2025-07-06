import React, { useEffect } from "react";
import heroImg from "../assets/madam.jpeg"; // Replace with your image

export default function Hero() {
  useEffect(() => {
    // Add a class to trigger animations after mount
    document.getElementById("hero-content").classList.add("animate-in");
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0D1A40" }} // Stellar Blue background
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-400 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-yellow-400 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-yellow-400 blur-xl"></div>
      </div>

      <div id="hero-content" className="relative z-10 transform transition-all duration-700 opacity-0 translate-y-10">
        {/* Profile image with subtle shadow and hover effect */}
        <div className="relative group mb-6">
          <img
            src={heroImg}
            alt="Madam President Stellar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 transition-transform duration-500 group-hover:scale-105"
            style={{ 
              borderColor: "#F5B700", // Gold border
              boxShadow: "0 10px 25px rgba(245, 183, 0, 0.3)"
            }}
          />
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Heading with text shadow */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          style={{ 
            color: "#F5B700", // Gold text
            textShadow: "0 2px 10px rgba(245, 183, 0, 0.4)"
          }}
        >
          Madam President <span className="block md:inline">Stellar</span>
        </h1>

        {/* Tagline with animated underline */}
        <div className="relative inline-block">
          <p className="mt-2 max-w-xl text-lg md:text-xl" style={{ color: "#E0E0E0" }}>
            Leading East Africa into a future of innovation, unity, and digital transformation.
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-1000 group-hover:w-full"></div>
        </div>

        {/* CTA Button with hover effects */}
        <div className="mt-8">
          <a
            href="#about"
            className="inline-block px-8 py-3 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            style={{
              backgroundColor: "#F5B700", // Gold
              color: "#0D1A40", // Stellar Blue text
              boxShadow: "0 4px 15px rgba(245, 183, 0, 0.4)"
            }}
          >
            <span className="relative z-10">Discover Her Journey</span>
            <span 
              className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            ></span>
          </a>
        </div>

        {/* Quote with decorative marks */}
        <blockquote 
          className="mt-10 max-w-md text-base relative px-6"
          style={{ color: "#CCCCCC" }}
        >
          <span 
            className="absolute top-0 left-0 text-3xl opacity-30"
            style={{ color: "#F5B700" }}
          >
            &ldquo;
          </span>
          <span className="relative px-4">
            We rise by lifting others, and I intend to elevate a continent.
          </span>
          <span 
            className="absolute bottom-0 right-0 text-3xl opacity-30"
            style={{ color: "#F5B700" }}
          >
            &rdquo;
          </span>
        </blockquote>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F5B700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>

      <style jsx>{`
        #hero-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}