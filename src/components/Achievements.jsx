import React from "react";

export default function Achievements() {
  const achievements = [
    "Founded East African Women in Blockchain Alliance",
    "Spearheaded Stellar For Development Fund in Africa",
    "Launched 20+ Digital Literacy Centers",
    "Mentored 500+ young women in tech",
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-6"
      style={{ backgroundColor: "#0D1A40", color: "#FFFFFF" }}
    >
      <h2 className="text-3xl font-semibold text-center mb-6" style={{ color: "#F5B700" }}>
        Key Achievements
      </h2>
      <ul className="max-w-2xl mx-auto space-y-4 text-base md:text-lg">
        {achievements.map((item, index) => (
          <li key={index} className="border-l-4 pl-4" style={{ borderColor: "#F5B700" }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
