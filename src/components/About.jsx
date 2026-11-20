const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 max-w-6xl mx-auto w-full">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#121320] via-[#0f111a] to-[#0c0d16] border border-violet-500/20 p-8 sm:p-12 overflow-hidden shadow-xl shadow-black/40">
        {/* Subtle decorative color aura */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
          {/* Profile photo */}
          <div className="relative shrink-0 float-anim">
            <div className="p-1 rounded-2xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-blue-500 shadow-lg shadow-violet-500/25">
              <img
                src="/images/girl.png"
                alt="Manjiri Rasam"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-[14px] object-cover bg-[#10121c]"
              />
            </div>
            <span
              className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#121320]"
              title="Available"
            ></span>
          </div>

          {/* About text */}
          <div className="space-y-5 max-w-2xl text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
                <span className="h-px w-6 bg-gradient-to-r from-violet-500 to-blue-500"></span>
                <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
                  About
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                A Little About Me
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              I'm a Computer Science student interested in both design and development. I enjoy creating interfaces in Figma, exploring how users interact with them, and turning those ideas into responsive web experiences.
            </p>

            <div className="pt-3 border-t border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Get to Know Me
              </span>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I like working across both sides of a digital product: designing how it looks and feels, and building how it works. I'm always exploring new ways to improve my design and development skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
