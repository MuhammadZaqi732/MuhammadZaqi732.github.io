import React from "react";

const Experience = () => {
  const items = [
    {
      title: "CV. Mediatama WEB",
      time: "Nov 2023 - April 2024",
      body: "- Developed web applications using PHP & Laravel.\n- Designed user interfaces using HTML, CSS, and Bootstrap."
    },
    {
      title: "Bumiminang Hotel",
      time: "May 2024 - Apr 2025",
      body: "- Designed digital marketing strategies and produced visual/video content for social media and website.\n- Managed the hotel’s digital assets, including the website and promotional support systems."
    },
    {
      title: "Bootcamp - Sanbercode",
      time: "Agus 2025 - Aug 2025",
      body: "- Conducted manual and automated testing using Cypress and Postman.\n- Documented bugs thoroughly and completed a final QA project using the (POM) approach."
    }
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
