import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 mt-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <span className="font-heading text-lg font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Manjiri.
          </span>
          <span className="text-slate-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-slate-600 text-xs mr-2">
            Built with
          </span>

          {["React", "Tailwind", "Supabase"].map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs">
                {tech}
              </span>
              {index !== 2 && (
                <span className="text-slate-700 text-xs mx-1">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/manjiri-webdev"
            className="text-slate-500 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manjirirasam"
            className="text-slate-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;