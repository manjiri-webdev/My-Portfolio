import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <main className="flex flex-col w-full">
            <section id="home" className="relative py-36 sm:py-52 flex items-center justify-center overflow-hidden px-5 sm:px-8 max-h-[1100px]">

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/8 rounded-full blur-[80px]"></div>

                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </div>

                <div className="relative z-10 mx-w-4x1 mx-auto text-center mt-16">
                    <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                        <span className="text-white">I build things</span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">that actually work.</span>
                    </h1>

                    <div className="text-xl sm:text-2xl font-medium text-slate-400 mb-5 h-8 flex items-center justify-center gap-2">
                        <span><TypeAnimation
                            sequence={[
                                "React Developer",
                                2000,
                                "Frontend Developer",
                                2000,
                                "Aspiring Full Stack Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        /></span>
                        <span className="animate-pulse text-violet-400 font-light">|</span>
                    </div>

                    <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Hi, I'm <span className="text-violet-400 font-semibold">Manjiri</span> - a React developer focused on building clean, user-friendly web applications while continuously improving my skills.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 ">

                        <a href="#projects"
                            className="px-6 py-3 rounded-lg
                         bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm shadow-custom hover:shadow-custom-hover transition-all duration-300 hover:-translate-y-0.5"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
                        <div className="w-0.5 h-8 bg-gradient-to-b from-violet-500/60 to-transparent rounded-full animate-bounce"></div>
                    </div>
                </div>

            </section>
        </main >
    )
};

export default Hero;