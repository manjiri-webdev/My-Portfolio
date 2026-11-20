const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 px-6 sm:px-8 mt-16 bg-[#090a0e]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <span className="font-heading font-medium text-sm text-slate-400">
            © 2026 Manjiri Rasam
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a
            href="https://www.linkedin.com/in/manjirirasam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/manjiri-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:manjirirasam@gmail.com"
            className="hover:text-violet-400 transition-colors"
          >
            Email
          </a>
          <a
            href="#home"
            className="text-slate-300 hover:text-white transition-colors font-medium"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;