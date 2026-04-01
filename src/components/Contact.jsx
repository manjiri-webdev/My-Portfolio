import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { supabase } from "../supabaseClient";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send Email
            await emailjs.send(
                "service_3tc2bj8",
                "template_8g4nbis",
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "anQbhG8UnQQ03y4Wr"
            );
        } catch (err) {
            console.error("Email error:", err);
        }

        try {
            // Save to Supabase
            const { error } = await supabase
                .from("contacts")
                .insert([formData]);

            if (error) {
                console.error("Supabase error:", error);
            }
        } catch (err) {
            console.error("Supabase catch:", err);
        }

        setSuccess(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setTimeout(() => setSuccess(false), 4000);
    };
    
    return (
        <section
            id="contact"
            className="py-24 px-5 sm:px-8 max-w-6xl mx-auto w-full"
        >
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"></span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                        Get In Touch
                    </span>
                    <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Let's work together.
                </h2>

                <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
                    Have a project in mind or just want to say hi? My inbox is always open.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* LEFT SIDE */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                    <a
                        href="mailto:manjirirasam@gmail.com"
                        className="group flex items-center gap-4 rounded-lg bg-[#111118] border border-violet-500/20 p-6 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-sm">
                                Send an Email
                            </div>
                            <div className="text-slate-500 text-xs">
                                manjirirasam@example.com
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://github.com/manjiri-webdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-lg bg-[#111118] border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-white">
                            <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
                        </div>

                        <div>
                            <div className="text-white font-semibold text-sm">GitHub</div>
                            <div className="text-slate-500 text-xs">@manjiri-dev</div>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/manjirirasam"
                        className="group flex items-center gap-4 rounded-lg bg-[#111118] border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-sm">
                                LinkedIn
                            </div>
                            <div className="text-slate-500 text-xs">
                                linkedin.com/in/manjirirasam
                            </div>
                        </div>
                    </a>

                    <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-slate-500 text-xs">
                            Usually responds within{" "}
                            <span className="text-slate-300">24 hours</span>
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="lg:col-span-3">
                    <div className="rounded-lg bg-[#111118] border border-white/10 p-8 relative">
                        <h3 className="text-lg font-bold text-white mb-6">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input px-4 py-3 text-sm"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input px-4 py-3 text-sm"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                className="form-input px-4 py-3 text-sm"
                            />

                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Tell me about your project or idea..."
                                value={formData.message}
                                onChange={handleChange}
                                className="form-input px-4 py-3 text-sm resize-none"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all"
                            >
                                Send Message
                            </button>

                            {success && (
                                <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                                    ✔ Message sent! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;