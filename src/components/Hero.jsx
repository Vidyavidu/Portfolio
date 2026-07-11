import { ArrowDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon } from "./icons";
import NeuralField from "./NeuralField";
import profileImg from "../assets/profile.jpeg";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <NeuralField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090D1A] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="reveal">
          <p className="font-mono text-[13px] tracking-wider text-[var(--teal)] mb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--teal)] mr-2 align-middle animate-pulse" />
            model status: training complete
          </p>

          <h1 className="font-display font-semibold leading-[1.05] text-[clamp(2.4rem,6vw,4.2rem)] tracking-tight mb-6">
            {profile.name}
            <span className="block bg-gradient-to-r from-[var(--teal)] to-[var(--violet)] bg-clip-text text-transparent">
              {profile.tagline}
            </span>
          </h1>

          <p className="text-[var(--text-dim)] text-lg max-w-lg leading-relaxed mb-10">
            {profile.blurb}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[var(--teal)] text-[#06111a] font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_30px_-8px_var(--teal)]"
            >
              View my projects
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-white/15 text-sm font-medium hover:border-[var(--violet)] hover:text-[var(--violet)] transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-faint)] hover:text-[var(--teal)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-faint)] hover:text-[var(--teal)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[var(--text-faint)] hover:text-[var(--teal)] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end reveal" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[28px] overflow-hidden border border-white/10">
            <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-br from-[var(--teal)]/40 to-[var(--violet)]/40 blur-xl opacity-60" />
            <img
              src={profileImg}
              alt={profile.name}
              className="relative w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-faint)] hover:text-[var(--teal)] transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
