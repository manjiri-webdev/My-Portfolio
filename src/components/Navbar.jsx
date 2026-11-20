import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Work", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a12]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-blue-600 p-[1px] shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
            <div className="w-full h-full bg-[#0e101a] rounded-[11px] flex items-center justify-center font-bold text-white bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm">
              MR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg text-white tracking-wider uppercase leading-none group-hover:text-violet-300 transition-colors">
              Manjiri Rasam
            </span>
            <span className="text-[11px] bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-medium mt-1">
              Frontend Developer & UI/UX Designer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 bg-[#121422]/70 border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-violet-600/80 to-blue-600/80 shadow-md font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-semibold hover:from-violet-500 hover:to-blue-500 transition-all shadow-md shadow-violet-600/20 hover:shadow-violet-600/35 hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
          </a>

          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0d18]/98 backdrop-blur-xl border-b border-white/10 px-6 py-5">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block px-3.5 py-2.5 text-sm rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-violet-600 to-blue-600 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-center w-full py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;