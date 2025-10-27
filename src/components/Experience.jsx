import React from "react";

const Experience = () => {
  const items = [
    {
      title: "CV. Mediatama WEB",
      time: "Nov 2023 - Jan 2024",
      body: "- Developed web applications using PHP & Laravel.\n- Designed user interfaces with HTML, CSS, and Bootstrap based on functional requirements.",
    },
    {
      title: "Bumiminang Hotel",
      time: "May 2024 - Apr 2025",
      body: "- Conducted internal system and promotional website testing to ensure optimal performance.\n- Provided technical support and troubleshooting for internal operational systems.\n- Collaborated with the development team to ensure system functionality and performance.",
    },
    {
      title: "Bootcamp - Sanbercode",
      time: "Jul 2025 - Aug 2025",
      body: "- Performed manual and automated testing using Cypress and Postman.\n- Created test plans, test scenarios, and test cases for various testing types including functional, regression, and integration testing.\n- Implemented the Page Object Model (POM) approach in automation testing.\n- Documented test results and reported bugs to the development team.",
    },
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <ul className="relative border-l-2 border-white/10 pl-6">
        {items.map((it, idx) => (
          <li className="mb-6 relative" key={idx}>
            <span className="absolute -left-4 top-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
            <h4 className="font-semibold">{it.title}</h4>
            <time className="block text-sm text-slate-300">{it.time}</time>
            <p className="mt-2 text-slate-200 whitespace-pre-line">{it.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
