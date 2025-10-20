import React from "react";

const ProjectCard = ({ img, title, desc, demoLink, detailsLink }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
      <div className="mt-3 flex justify-between items-center">
        {demoLink ? (
          <a href={demoLink} target="_blank" rel="noreferrer" className="demo-btn text-blue-400 hover:underline">Live Demo →</a>
        ) : (
          <span className="disabled-demo">Live Demo →</span>
        )}
        {detailsLink ? (
          <a href={detailsLink} target="_blank" rel="noreferrer" className="details-btn px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition">Details →</a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
