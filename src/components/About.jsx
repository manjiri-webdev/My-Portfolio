const About = () => {
    const stats = [
        { value: "3+", label: "Projects Completed" },
        { value: "3+", label: "Years of Coding" },
        { value: "2+", label: "Other Work" },
    ]

    const stack = [
        "React.js",
        "JavaScript",
        "Tailwind",
        "Java (Servlets, JSP)",
        "Supabase",
        "MySQL",
        "MongoDB",
        "Vercel & Netlify",
    ];

    return (
        <section id="about" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto w-full">

            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"></span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">Who I am</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>

                <p className="text-slate-400 text-base max-w-lg">A little context behind the code and the person writing it.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <div className="flex flex-col gap-8">
                    <div className="rounded-lg bg-[#111118] border border-white/8 p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative float-anim">
                                <img
                                    src="/images/girl.png"

                                    alt="Manjiri"
                                    className="w-16 h-16 rounded-lg object-cover border-2 border-violet-500/30"
                                />

                                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#111118]"></span>
                            </div>
                            <div>
                                <h3 className="font-heading text-xl font-bold text-white">Manjiri</h3>
                                <p className="text-violet-400 text-sm font-medium">FrontEnd Developer</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I’m a second-year B.Sc. Computer Science student at Ramnarain Ruia Autonomous College with a growing interest in web development. I enjoy building practical applications and improving my skills step by step.
                            </p>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                I’ve worked with both frontend and backend technologies, including building a full inventory management system using Java (Servlets and JSP). Currently, I’m learning and working with React.js while strengthening my JavaScript fundamentals.
                            </p>

                            
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Outside of tech, I enjoy traveling, exploring different cuisines, and capturing moments.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-lg bg-[#111118] border border-white/8 p-5 text-center"
                            >
                                <div className="text-2xl font-bold text-white">
                                    {item.value}
                                </div>
                                <div className="text-xs text-slate-500">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg bg-[#111118] border border-violet-500/20 p-6 relative overflow-hidden">
                        <div
                            className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-violet-500 to-blue-500 opacity-60">
                        </div>
                        <div className="flex items-center gap-2 mb-5">
                            <span className="relative flex h-2 w-2"><span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span><span
                                    className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span></span>
                            <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                                Currently
                            </p>
                        </div>
                        <div >

                            <ul className="flex flex-col gap-3">
                                {[
                                    "Learning React architecture and strengthening core JavaScript concepts",
                                    "Building full-stack projects using React.js and Supabase",
                                    "Improving UI/UX through hands-on design and real project work",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">

                                        {/* Dot */}
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>

                                        {/* Text */}
                                        <span className="text-slate-300 text-sm font-semibold">
                                            {item}
                                        </span>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="flex flex-col gap-6">
                    <div className="rounded-lg overflow-hidden border border-white/8 relative group">
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                            alt="workspace"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent">
                        </div>
                        <div className="absolute bottom-5 left-5 right-5">
                            <span
                                className="text-xs text-slate-400 bg-[#111118]/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-md">Where
                                the magic happens ✨</span>
                        </div>
                    </div>

                    <div className="rounded-lg bg-[#111118] border border-white/8 p-6">
                        <h4 className="text-white mb-4">Favourite Stack</h4>

                        <div className="flex flex-wrap gap-2">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg bg-gradient-to-br from-violet-600/15 to-blue-600/15 border border-violet-500/20 p-6 flex items-center justify-between gap-4">
                        <div>
                            <p className="font-heading text-white font-semibold text-sm mb-1">Open to Work</p>

                            <p className="text-slate-400 text-xs">
                                Full-time, freelance, or contract
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="lex-shrink-0 px-4 py-2 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
