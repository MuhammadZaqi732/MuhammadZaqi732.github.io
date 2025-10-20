import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import CertificateModal from "./CertificateModal";
import TechStack from "./TechStack";

const PortfolioShowcase = () => {
  const [tab, setTab] = useState("projects");
  const [certificateSrc, setCertificateSrc] = useState(null);

  const projects = [
    {
      img: "/assets/project1.jpg",
      title: "Sanbercode - OrengHRM",
      desc: "This project contains automation testing using Cypress, to perform testing on the website...",
      demoLink: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      detailsLink: "https://github.com/MuhammadZaqi732/Sanbercode-OrangeHRM.git"
    }
    // tambahkan data project lain
  ];

  const certificates = [
    "/assets/certificates1.jpg",
    "/assets/certificates2.jpg",
    "/assets/certificates3.jpg",
    "/assets/certificates4.jpg",
    "/assets/certificates5.jpg",
    "/assets/certificates6.jpg"
  ];

  const tech = ["HTML","CSS","JavaScript","Bootstrap","ReactJS","NodeJS","Laravel","Git","MySQL","Cypress","Postman","Selenium"];

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-purple-300">Portfolio Showcase</h2>
        <p className="text-slate-300 mt-2">Explore my journey through projects, certifications, and technical expertise.<br/>Each section represents a milestone in my continuous learning path.</p>
      </div>

      <div className="flex gap-3 mb-6 justify-center">
        <button className={`tab-btn ${tab==="projects" ? "active" : ""}`} onClick={()=>setTab("projects")}><i className="fas fa-code mr-2"></i> Projects</button>
        <button className={`tab-btn ${tab==="certificates" ? "active" : ""}`} onClick={()=>setTab("certificates")}><i className="fas fa-certificate mr-2"></i> Certificates</button>
        <button className={`tab-btn ${tab==="tech" ? "active" : ""}`} onClick={()=>setTab("tech")}><i className="fas fa-cubes mr-2"></i> Tech Stack</button>
      </div>

      <div className={`${tab==="projects" ? "tab-content grid grid-cols-1 md:grid-cols-3 gap-6" : "hidden"}`}>
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>

      <div className={`${tab==="certificates" ? "tab-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" : "hidden"}`}>
        {certificates.map((c, i) => (
          <div key={i} className="bg-white/6 p-4 rounded-lg">
            <div className="relative group">
              <img src={c} alt={`cert-${i}`} className="w-full h-52 object-cover rounded" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded transition">
                <button className="px-3 py-1 bg-white/10 text-white rounded border border-white/20 hover:bg-white/20 transition" onClick={()=>setCertificateSrc(c)}>🪕 View Certificate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`${tab === "tech" ? "tab-content" : "hidden"}`}>
        <TechStack />
        </div>

      <CertificateModal src={certificateSrc} onClose={()=>setCertificateSrc(null)} />
    </div>
  );
};

export default PortfolioShowcase;
