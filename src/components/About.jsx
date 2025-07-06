import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 text-center"
      style={{ backgroundColor: "#FFFFFF", color: "#0D1A40" }}
    >
      <h2 className="text-3xl font-semibold mb-4" style={{ color: "#0D1A40" }}>
        About Her
      </h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg" style={{ color: "#333333" }}>
        Madam President Stellar is a visionary leader dedicated to empowering East Africa
        through digital transformation, innovation, and inclusive leadership.
        With a passion for technology and people, she advocates for sustainable development
        through decentralized solutions and community-driven growth.
      </p>
    </section>
  );
}
