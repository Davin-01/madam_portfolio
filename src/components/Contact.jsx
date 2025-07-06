import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-center"
      style={{ backgroundColor: "#0D1A40", color: "#FFFFFF" }}
    >
      <h2 className="text-3xl font-semibold mb-4" style={{ color: "#F5B700" }}>
        Get In Touch
      </h2>
      <p className="mb-6 text-base md:text-lg">
        Reach out to collaborate, support, or share in her mission.
      </p>
      <a
        href="mailto:madamstellar@eastafrica.org"
        className="inline-block px-6 py-2 rounded-md font-medium"
        style={{
          backgroundColor: "#F5B700",
          color: "#0D1A40",
        }}
      >
        Send an Email
      </a>
    </section>
  );
}
