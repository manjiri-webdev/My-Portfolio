import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "PaperTrail | Inventory Management System",
    year: "2025",
    desc: "A full-stack web application developed using Java Servlets and JSP to manage product inventory with complete CRUD operations and database integration. Designed to handle real-time stock updates and streamline inventory tracking efficiently.",
    youtube: "https://www.youtube.com/embed/DLpnDKN3XyU?autoplay=1",
    code: "https://github.com/manjiri-webdev/inventory-management-system-java",
    tech: ["Java", "Servlets", "JSP", "MySQL"],
    color: "cyan",
  },
  {
    title: "Gen-Z Shopping Analytics Dashboard",
    year: "2026",
    desc: "An interactive analytics dashboard built using R Shiny to analyze Gen-Z online shopping behavior based on real survey data. Includes statistical techniques such as correlation, regression, Poisson distribution, ANOVA, and customer segmentation to uncover meaningful insights.",
    youtube: "https://www.youtube.com/embed/PZW10J1FS20?autoplay=1",
    code: "https://github.com/manjiri-webdev/genz-shopping-analytics",
    tech: ["R", "Shiny", "React", "Supabase"],
    color: "violet",
  },
  {
    title: "Travel Master – Responsive Travel Website",
    year: "2024",
    desc: "A modern, responsive travel website built using HTML, CSS, Bootstrap, and JavaScript. Focused on clean UI design, smooth navigation, and showcasing destinations with an engaging user experience.",
    youtube: "https://www.youtube.com/embed/iF3dgQZqrF0?autoplay=1",
    code: "https://github.com/manjiri-webdev/travel",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    color: "pink",
  },
];

const colorStyles = {
  violet: {
    border: "border-violet-500/20",
    gradient: "from-violet-500/10 to-violet-300/10",
    line: "from-violet-500 to-violet-300",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    button: "bg-violet-500/20 hover:bg-violet-500/35 text-violet-300 border-violet-500/30",
  },
  cyan: {
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/10 to-cyan-300/10",
    line: "from-cyan-500 to-cyan-300",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    button: "bg-cyan-500/20 hover:bg-cyan-500/35 text-cyan-300 border-cyan-500/30",
  },
  pink: {
    border: "border-pink-500/20",
    gradient: "from-pink-500/10 to-pink-300/10",
    line: "from-pink-500 to-pink-300",
    tag: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    button: "bg-pink-500/20 hover:bg-pink-500/35 text-pink-300 border-pink-500/30",
  },
  amber: {
    border: "border-amber-500/20",
    gradient: "from-amber-500/10 to-amber-300/10",
    line: "from-amber-500 to-amber-300",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    button: "bg-amber-500/20 hover:bg-amber-500/35 text-amber-300 border-amber-500/30",
  },
};

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-5 sm:px-8 max-w-6xl mx-auto w-full"
    >
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            Selected Work
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Projects I've built
        </h2>

        <p className="text-slate-400 max-w-lg">
          A curated selection of real-world projects — from fintech dashboards
          to AI tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const styles = colorStyles[project.color];

          return (
            <div
              key={project.title}
              className={`group relative rounded-lg bg-[#111118] ${styles.border} p-8 flex flex-col gap-5 hover:shadow-custom-hover transition-all duration-300 overflow-hidden hover:-translate-y-1`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div
                className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${styles.line} opacity-60`}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs font-semibold border rounded ${styles.tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 flex-wrap">

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs bg-white/5 font-semibold border border-white/10 text-white rounded hover:bg-white/10"
                    >
                      View Code
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedVideo(project.youtube)}
                    className={`px-3 py-2 text-xs border font-semibold rounded ${styles.button}`}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[80%] max-w-3xl">
            <iframe
              className="w-full h-[400px] rounded-lg"
              src={selectedVideo}
              title="Project Demo"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white bg-black/50 px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
