import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send email via EmailJS
      await emailjs.send(
        "service_3tc2bj8",
        "template_8g4nbis",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact from Portfolio",
          message: formData.message,
        },
        "anQbhG8UnQQ03y4Wr"
      );
    } catch (err) {
      console.warn("EmailJS notice:", err);
    }

    try {
      // 2. Insert to Supabase contacts
      const { error } = await supabase.from("contacts").insert([formData]);
      if (error) {
        console.warn("Supabase notice:", error);
      }
    } catch (err) {
      console.warn("Supabase catch:", err);
    }

    setIsSubmitting(false);
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-2">
          <span className="h-px w-6 bg-gradient-to-r from-violet-500 to-blue-500"></span>
          <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
            Contact
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let's Connect
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Have a project, opportunity or just want to say hello? Feel free to reach out.
        </p>

        {/* Quick Contact Links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 mt-6 text-xs sm:text-sm text-slate-300">
          <a
            href="mailto:manjirirasam@gmail.com"
            className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
            </div>
            <span>Email: manjirirasam@gmail.com</span>
          </a>

          <span className="hidden sm:inline text-white/20">•</span>

          <a
            href="https://www.linkedin.com/in/manjirirasam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} className="text-xs" />
            </div>
            <span>LinkedIn: linkedin.com/in/manjirirasam</span>
          </a>

          <span className="hidden sm:inline text-white/20">•</span>

          <a
            href="https://github.com/manjiri-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faGithub} className="text-xs" />
            </div>
            <span>GitHub: github.com/manjiri-webdev</span>
          </a>
        </div>
      </div>

      {/* Simple Form */}
      <div className="rounded-2xl bg-gradient-to-br from-[#121320] via-[#0f111a] to-[#0c0d16] border border-violet-500/20 p-7 sm:p-9 shadow-xl shadow-black/40">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="form-input w-full px-4 py-2.5 text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full px-4 py-2.5 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              className="form-input w-full px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className="form-input w-full px-4 py-2.5 text-sm resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting ? (
              <span>Sending message...</span>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                <span>Send a Message</span>
              </>
            )}
          </button>

          {success && (
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm animate-fadeIn">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Message sent! Thank you for reaching out.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;