import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = ["home", "projects", "skills", "about", "contact"];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.35 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0af]/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20" : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

                <a href="#home" className="text-lg font-bold tracking-tight font-heading">
                    <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                        Manjiri
                    </span>
                    <span className="bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent"> {" "} Frontend Developer</span>
                </a>

                <ul className="hidden md:flex items-center gap-1">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <li key={item}>
                                <a
                                    href={`#${id}`}
                                    className={`px-4 py-2 text-sm font-medium rounded-small transition-colors ${activeSection === id
                                        ? "text-white bg-white/8 border border-white/10 bg-white/5 rounded-lg"
                                        : "text-slate-400 hover:text-white rounded-lg"
                                        }`}
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-3" >
                    <a href="#contact" className="px-3 py-1 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition"
                    >Hire Me</a>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-small text-slate-400 hover:text-white"
                    >
                        <span className="block w-5 h-0.5 bg-current rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-current rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-current rounded-full"></span>
                    </button>
                </div>
            </nav>

            <div
                className={`${isOpen ? "block" : "hidden"
                    } md:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-white/5`}
            >
                <ul className="flex flex-col px-5 py-4 gap-1">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <li key={item}>
                                <a
                                    href={`#${id}`}
                                    onClick={closeMenu}
                                    className={`block w-full text-left px-4 py-3 rounded-small text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors ${activeSection === id
                                        ? "text-white bg-white/8 border border-white/10 bg-white/5 rounded-lg"
                                        : "text-slate-400 hover:text-white rounded-lg"
                                        }`}
                                >
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;