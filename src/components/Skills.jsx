import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faPenRuler,
  faLayerGroup,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJava,
  faPython,
  faGitAlt,
  faGithub,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

// Custom SVG Icons for brands not in free FontAwesome
const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
    <defs>
      <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#canva-grad)" />
    <path
      fill="#ffffff"
      d="M12.5 7.5c-2.8 0-4.5 2.1-4.5 4.8 0 2.6 1.6 4.6 4.3 4.6 1.4 0 2.5-.5 3.1-1.2l-.9-1c-.5.5-1.3.8-2.2.8-1.7 0-2.8-1.2-2.8-3.2 0-2 1.1-3.3 2.9-3.3.9 0 1.6.4 2.1.8l.9-1.1c-.7-.7-1.7-1.2-2.9-1.2z"
    />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 text-cyan-400" aria-hidden="true">
    <path
      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
      fill="currentColor"
    />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 rounded-sm" aria-hidden="true">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path
      fill="#ffffff"
      d="M11.5 15.2h-1.8v-7.2H7.2V6.5h6.8v1.5h-2.5v7.2zm4.9-1.3c.6.4 1.3.7 2 .7.8 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.4-1-1.4-.4-2.2-1.1-2.2-2.1 0-1.4 1.1-2.3 2.8-2.3.9 0 1.6.2 2.1.5l-.6 1.4c-.4-.3-1-.5-1.6-.5-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3.9 1.5.5 2.3 1.1 2.3 2.2 0 1.4-1.1 2.4-3 2.4-1 0-1.9-.3-2.5-.7l.6-1.4z"
    />
  </svg>
);

const CIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path
      fill="#00599C"
      d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2z"
    />
    <path
      fill="#ffffff"
      d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5c2 0 3.7-1.1 4.6-2.7l-1.8-1c-.6 1-1.6 1.7-2.8 1.7-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c1.2 0 2.2.7 2.8 1.7l1.8-1C15.7 7.6 14 6.5 12 6.5z"
    />
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path
      d="M13.4 2.1C13 1.5 12 1.8 12 2.6v8.4H3.4c-.9 0-1.3 1-.7 1.6l8.5 9.3c.5.5 1.4.2 1.4-.6v-8.4h8.6c.9 0 1.3-1 .7-1.6l-8.5-9.2z"
      fill="#3ECF8E"
    />
  </svg>
);

const skillGroups = [
  {
    category: "Design",
    color: "from-pink-500/20 to-purple-500/20 border-pink-500/30 text-pink-300",
    skills: [
      { name: "Figma", icon: faFigma, iconColor: "text-pink-400" },
      { name: "Canva", customIcon: <CanvaIcon /> },
      { name: "UI/UX Design", icon: faPenRuler, iconColor: "text-purple-400" },
      { name: "Wireframing", icon: faLayerGroup, iconColor: "text-indigo-400" },
      { name: "Prototyping", icon: faArrowPointer, iconColor: "text-rose-400" },
    ],
  },
  {
    category: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300",
    skills: [
      { name: "HTML5", icon: faHtml5, iconColor: "text-orange-400" },
      { name: "CSS3", icon: faCss3Alt, iconColor: "text-blue-400" },
      { name: "JavaScript", icon: faJs, iconColor: "text-yellow-400" },
      { name: "React.js", icon: faReact, iconColor: "text-cyan-400" },
      { name: "Tailwind CSS", customIcon: <TailwindIcon /> },
      { name: "Bootstrap", icon: faBootstrap, iconColor: "text-purple-400" },
      { name: "TypeScript (Basic)", customIcon: <TypeScriptIcon /> },
    ],
  },
  {
    category: "Programming",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
    skills: [
      { name: "Java", icon: faJava, iconColor: "text-amber-400" },
      { name: "C", customIcon: <CIcon /> },
      { name: "Python (Basic)", icon: faPython, iconColor: "text-yellow-400" },
    ],
  },
  {
    category: "Database",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    skills: [
      { name: "MySQL", icon: faDatabase, iconColor: "text-amber-400" },
      { name: "Supabase", customIcon: <SupabaseIcon /> },
    ],
  },
  {
    category: "Tools",
    color: "from-violet-500/20 to-indigo-500/20 border-violet-500/30 text-violet-300",
    skills: [
      { name: "VS Code", icon: faCode, iconColor: "text-blue-400" },
      { name: "Git", icon: faGitAlt, iconColor: "text-rose-400" },
      { name: "GitHub", icon: faGithub, iconColor: "text-white" },
      { name: "npm", icon: faNpm, iconColor: "text-red-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 sm:px-8 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="h-px w-6 bg-gradient-to-r from-violet-500 to-blue-500"></span>
          <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
            Capabilities
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Skills & Tools
        </h2>
      </div>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl bg-[#11131e] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r border ${group.color}`}>
                  {group.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/8 text-slate-200 hover:border-violet-500/30 hover:bg-white/[0.06] transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    {skill.customIcon ? (
                      skill.customIcon
                    ) : skill.icon ? (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className={`text-sm shrink-0 ${skill.iconColor || "text-slate-400"}`}
                      />
                    ) : null}
                    <span className="text-xs sm:text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;