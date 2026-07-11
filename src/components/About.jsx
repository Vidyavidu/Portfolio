const facts = [
  { label: "Focus", value: "Deep Learning & Generative AI" },
  { label: "Stage", value: "Fresher, actively building" },
  { label: "Toolkit", value: "PyTorch · TensorFlow · LangChain" },
  { label: "Based in", value: "India" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="font-mono text-[13px] tracking-wider text-[var(--violet)] mb-3">
              // about
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">
              Learning the shape
              <br /> of intelligence.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[var(--text-dim)] text-lg leading-relaxed">
              I'm an aspiring AI engineer who enjoys the full stack of
              machine intelligence — cleaning messy data, training a model
              until the loss curve finally behaves, and shipping something a
              person can actually use. My path so far has moved from
              classical ML through deep learning into today's generative AI
              and agentic systems.
            </p>
            <p className="text-[var(--text-dim)] text-lg leading-relaxed">
              I like projects with a real dataset and a real question behind
              them: what makes an investor say yes, what makes a song sell,
              what makes a post land. That mix of data, design, and a bit of
              curiosity is what these projects below are built on.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-white/10 bg-[var(--bg-panel)] px-4 py-3"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-faint)] mb-1">
                    {f.label}
                  </p>
                  <p className="text-sm font-medium text-[var(--text)]">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
