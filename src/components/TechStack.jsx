import React from "react";

const techs = [
  { type: "icon", icon: "fab fa-html5", color: "#ff8800", name: "HTML" },
  { type: "icon", icon: "fab fa-css3-alt", color: "#0095ff", name: "CSS" },
  { type: "icon", icon: "fab fa-js", color: "#ffe100", name: "JavaScript" },
  { type: "icon", icon: "fab fa-bootstrap", color: "#8000ff", name: "Bootstrap" },
  { type: "icon", icon: "fab fa-react", color: "#00d8ff", name: "ReactJS" },
  { type: "icon", icon: "fab fa-node-js", color: "#8cc84b", name: "NodeJS" },
  { type: "icon", icon: "fab fa-laravel", color: "#ff4d4f", name: "Laravel" },
  { type: "icon", icon: "fab fa-git-alt", color: "#f1502f", name: "Git" },
  { type: "icon", icon: "fas fa-database", color: "#0066ff", name: "MySQL" },
  { type: "image", src: "/assets/icons/cypress.svg", name: "Cypress" },
  { type: "image", src: "/assets/icons/postman.svg", name: "Postman" },
  { type: "image", src: "/assets/icons/selenium.svg", name: "Selenium" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-items-center">
      {techs.map((t, i) => (
        <div key={i} className="w-28 h-28 flex flex-col items-center justify-center bg-white/10 rounded-xl border border-white/10 shadow-md hover:bg-white/20 hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm">
          {t.type === "icon" ? (
            <i className={`${t.icon} text-4xl`} style={{ color: t.color }} ></i>
          ) : (
            <img src={t.src} alt={t.name} className="w-10 h-10 object-contain" />
          )}
          <p className="mt-2 text-sm font-medium text-slate-200">{t.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
