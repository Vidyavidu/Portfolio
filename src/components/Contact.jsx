import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl border border-white/10 bg-[var(--bg-panel)] px-8 py-16 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal)]/[0.06] to-[var(--violet)]/[0.06]" />
          <div className="relative">
            <p className="font-mono text-[13px] tracking-wider text-[var(--violet)] mb-4">
              // contact
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-6">
              Let's build something
              <br /> intelligent together.
            </h2>
            <p className="text-[var(--text-dim)] max-w-md mx-auto mb-10">
              Open to fresher AI/ML roles, internships, and collaborations.
              Reach out — I reply fast.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="px-7 py-3 rounded-full bg-[var(--teal)] text-[#06111a] font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_30px_-8px_var(--teal)]"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[var(--text-dim)] hover:text-[var(--teal)] transition-colors text-sm"
              >
                <GithubIcon size={17} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[var(--text-dim)] hover:text-[var(--teal)] transition-colors text-sm"
              >
                <LinkedinIcon size={17} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-[var(--text-dim)] hover:text-[var(--teal)] transition-colors text-sm"
              >
                <Mail size={17} /> Email
              </a>
            </div>
          </div>
        </div>

        <p className="text-center font-mono text-[12px] text-[var(--text-faint)] mt-10">
          designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
