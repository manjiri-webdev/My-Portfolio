const Skills = () => {
    const skillData = [
        {
            title: "Frontend",
            icon: "F",
            color: "from-violet-500 to-blue-500",
            skills: [
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
                { name: "JavaScript", level: 75 },
                { name: "React", level: 70 },
                { name: "Tailwind CSS", level: 78 },
            ],
        },
        {
            title: "Backend",
            icon: "B",
            color: "from-cyan-500 to-teal-500",
            skills: [
                { name: "Java (Servlets, JSP)", level: 80 },
                { name: "Python", level: 75 },
                { name: "MySQL", level: 80 },
                { name: "MongoDB", level: 74 },
                { name: "Supabase", level: 75 },
            ],
        },
        {
            title: "Tools",
            icon: "T",
            color: "from-pink-500 to-rose-500",
            skills: [
                { name: "Git & GitHub", level: 80 },
                { name: "Vercel", level: 75 },
                { name: "Netlify", level: 80 },
                { name: "Canva", level: 90 },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="py-24 px-5 sm:px-8 max-w-6xl mx-auto w-full"
        >
            {/* Heading */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-blue-500"></span>
                    <span className="text-xs uppercase text-violet-400">
                        Capabilities
                    </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Skills & Tools
                </h2>

                <p className="text-slate-400 max-w-lg">
                    Technologies I work with daily, and the
                    depth of familiarity I've built over time.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillData.map((category) => (
                    <div
                        key={category.title}
                        className="rounded-lg bg-[#111118] border border-white/8 p-8 flex flex-col gap-5"
                    >
                        {/* Title */}
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br ${category.color} text-white font-bold`}
                            >
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                {category.title}
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="flex flex-col gap-2">

                                    <div className="flex justify-between">
                                        <span className="text-sm text-slate-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;