import { skillGroups } from "../data";

const colorMap = {
  teal: {
    border: "border-[var(--teal)]/35",
    text: "text-[var(--teal)]",
    bg: "bg-[var(--teal-dim)]",
    dot: "bg-[var(--teal)]",
  },
  violet: {
    border: "border-[var(--violet)]/35",
    text: "text-[var(--violet)]",
    bg: "bg-[var(--violet-dim)]",
    dot: "bg-[var(--violet)]",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="font-mono text-[13px] tracking-wider text-[var(--teal)] mb-3">
            // skills
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">
            The stack, node by node.
          </h2>
        </div>

        <div className="space-y-5">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.heading}
                className={`rounded-2xl border ${c.border} bg-[var(--bg-panel)] p-6 md:p-7 grid md:grid-cols-[220px_1fr] gap-5 md:gap-8 items-center`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className="font-display font-medium text-lg text-[var(--text)]">
                    {group.heading}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-5 py-2 rounded-full font-mono text-[13px] border ${c.border} ${c.bg} ${c.text}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
