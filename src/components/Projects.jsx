import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTimes,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";

const projectsList = [
  {
    id: "skinwise",
    number: "01",
    title: "SkinWise",
    category: "UI/UX Design",
    badge: "UI/UX Design · Figma · Web Application",
    description:
      "An AI-assisted skincare and cosmetic ingredient platform designed to bring skin assessment, ingredient information and personalised skincare routines into one place. I designed the application screens and user flows in Figma and created a clickable prototype.",
    image: "/images/skinwise.png",
    theme: {
      border: "hover:border-violet-500/40",
      accent: "text-violet-400",
      tag: "bg-violet-500/15 text-violet-300 border-violet-500/30",
      topLine: "from-violet-500 to-purple-500",
      glow: "group-hover:bg-violet-600/5",
    },
    prototypeLink: "https://www.figma.com",
    liveLink: null,
    githubLink: null,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Consumers often find it difficult to understand cosmetic ingredient lists and identify products suited to their specific skin needs.",
      solution:
        "Designed application screens and user flows in Figma, creating an accessible experience for skin assessment, ingredient information, and personalized skincare routines.",
      deliverables: [
        "Application wireframes and high-fidelity screens designed in Figma",
        "Step-by-step skin assessment user flows",
        "Interactive clickable prototype with transition states",
        "Ingredient information cards and safety indicators",
      ],
      tools: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    },
  },
  {
    id: "flight-booking",
    number: "02",
    title: "Flight Booking App",
    category: "Mobile UI",
    badge: "Mobile UI · Figma · Interactive Prototype",
    description:
      "A mobile flight-booking application concept covering flight discovery, search and ticket selection. Designed in Figma with clickable interactions and animated transitions.",
    image: "/images/flight-booking.png",
    theme: {
      border: "hover:border-pink-500/40",
      accent: "text-pink-400",
      tag: "bg-pink-500/15 text-pink-300 border-pink-500/30",
      topLine: "from-pink-500 to-rose-500",
      glow: "group-hover:bg-pink-600/5",
    },
    prototypeLink: "https://www.figma.com",
    liveLink: null,
    githubLink: null,
    hasCaseStudy: false,
  },
  {
    id: "travelmaster",
    number: "03",
    title: "TravelMaster",
    category: "Frontend Development",
    badge: "Frontend Development · HTML · CSS · JavaScript · Bootstrap",
    description:
      "A responsive trip-planning website with an itinerary generator, budget estimator, Google Maps integration and downloadable receipts.",
    image: "/images/travelmaster.png",
    theme: {
      border: "hover:border-cyan-500/40",
      accent: "text-cyan-400",
      tag: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
      topLine: "from-cyan-500 to-blue-500",
      glow: "group-hover:bg-cyan-600/5",
    },
    prototypeLink: null,
    liveLink: "https://mastertravler.netlify.app/",
    githubLink: "https://github.com/manjiri-webdev/travel",
    hasCaseStudy: false,
  },
  {
    id: "papertrail",
    number: "04",
    title: "PaperTrail",
    category: "Backend Development",
    badge: "Backend Development · Java · JSP · MySQL",
    description:
      "An inventory management system developed using Java Servlets, JSP and MySQL, with CRUD operations and role-based admin access.",
    image: "/images/papertrail.png",
    theme: {
      border: "hover:border-emerald-500/40",
      accent: "text-emerald-400",
      tag: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      topLine: "from-emerald-500 to-teal-500",
      glow: "group-hover:bg-emerald-600/5",
    },
    prototypeLink: null,
    liveLink: null,
    githubLink: "https://github.com/manjiri-webdev/inventory-management-system-java",
    hasCaseStudy: false,
  },
];

const Projects = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 sm:px-8 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="h-px w-6 bg-gradient-to-r from-violet-500 to-blue-500"></span>
          <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
            Selected Work
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          A Few Things I've Worked On
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
          Here are some of my design and development projects.
        </p>
      </div>

      {/* 2x2 Side-by-Side Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {projectsList.map((project) => (
          <article
            key={project.id}
            className={`group relative rounded-2xl bg-[#11131e] border border-white/10 ${project.theme.border} overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1`}
          >
            {/* Top decorative gradient line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.theme.topLine} opacity-80`}
            ></div>

            {/* Card glow on hover */}
            <div
              className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${project.theme.glow}`}
            ></div>

            {/* Image Preview Container */}
            <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-[#161827] via-[#0e101a] to-[#0a0b12] border-b border-white/10 flex items-center justify-center p-3.5 sm:p-5 overflow-hidden">
              {/* Window dots */}
              <div className="absolute top-3 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              {/* Number and Category tag */}
              <div className="absolute top-3 right-3.5 z-10 flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-400">
                  {project.number}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${project.theme.tag} backdrop-blur-md bg-[#0a0b12]/80`}
                >
                  {project.category}
                </span>
              </div>

              {/* Screenshot Image with object-contain */}
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info Section (Below Image) */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-slate-500">
                      {project.number}.
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/5">
                {project.hasCaseStudy && (
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all hover:-translate-y-0.5"
                  >
                    <FontAwesomeIcon icon={faLayerGroup} className="text-xs text-violet-400" />
                    <span>View Case Study</span>
                  </button>
                )}

                {project.prototypeLink && (
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-semibold transition-all shadow-md shadow-violet-600/20 hover:-translate-y-0.5"
                  >
                    <FontAwesomeIcon icon={faFigma} className="text-xs" />
                    <span>View Prototype</span>
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-cyan-600/20 hover:-translate-y-0.5"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                    <span>Live Website</span>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all hover:-translate-y-0.5"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xs" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#121320] border border-violet-500/30 p-6 sm:p-8 shadow-2xl shadow-violet-950/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-violet-400 font-semibold">
                  {selectedCaseStudy.category} • Case Study
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Problem
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  {selectedCaseStudy.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Solution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  {selectedCaseStudy.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.caseStudy.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.caseStudy.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/15 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
