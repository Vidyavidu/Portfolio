import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="font-mono text-[13px] tracking-wider text-[var(--violet)] mb-3">
            // projects
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">
            Three problems, three datasets.
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative block rounded-2xl border border-white/10 bg-[var(--bg-panel)] hover:border-[var(--teal)]/40 transition-colors p-7 md:p-9"
            >
              <div className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-start">
                <span className="font-mono text-4xl font-light text-[var(--text-faint)] group-hover:text-[var(--teal)] transition-colors">
                  {p.node}
                </span>

                <div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl mb-3 group-hover:text-[var(--teal)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[var(--text-dim)] leading-relaxed mb-4 max-w-2xl">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[12px] px-3 py-1 rounded-full border border-[var(--violet)]/30 bg-[var(--violet-dim)] text-[var(--violet)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/15 group-hover:border-[var(--teal)] group-hover:bg-[var(--teal-dim)] transition-colors self-center">
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--text-dim)] group-hover:text-[var(--teal)] transition-colors"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
