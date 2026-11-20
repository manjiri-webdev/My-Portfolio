import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-8 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for UI/UX & Frontend Opportunities</span>
        </div>

        {/* Hero Headings */}
        <div className="space-y-3 mb-6">
          <p className="text-xl sm:text-2xl font-medium text-slate-300">
            Hey, I'm <span className="text-white font-semibold">Manjiri</span>.
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Frontend Developer & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              UI/UX Designer.
            </span>
          </h1>
        </div>

        {/* Supporting text */}
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed mb-10 font-normal">
          I enjoy designing clean, easy-to-use interfaces and bringing them to life through frontend development.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white font-semibold text-sm hover:opacity-95 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-violet-600/30"
          >
            <span>View My Work</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.05] border border-violet-500/25 text-white font-semibold text-sm hover:bg-violet-500/10 hover:border-violet-500/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-violet-400 text-xs" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-400">
          <a
            href="https://www.linkedin.com/in/manjirirasam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <span className="text-white/20">•</span>

          <a
            href="https://github.com/manjiri-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="text-slate-300" />
            <span>GitHub</span>
          </a>

          <span className="text-white/20">•</span>

          <a
            href="mailto:manjirirasam@gmail.com"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-violet-400 text-xs" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;