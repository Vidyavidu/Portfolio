import { useState } from "react";
import { X, ExternalLink, Award } from "lucide-react";
import { certificates } from "../data";

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="font-mono text-[13px] tracking-wider text-[var(--teal)] mb-3">
            // certificates
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">
            Checkpoints along the way.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <button
              key={cert.title}
              onClick={() => setActive(cert)}
              className="group text-left rounded-2xl border border-white/10 bg-[var(--bg-panel)] overflow-hidden hover:border-[var(--teal)]/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#0c1224] border-b border-white/10">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-[var(--teal)]">
                  <Award size={14} />
                  <span className="font-mono text-[11px] tracking-wide">
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-display font-medium text-[15px] leading-snug mb-1 group-hover:text-[var(--teal)] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[13px] text-[var(--text-faint)]">
                  {cert.issuer}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[var(--bg-panel)] rounded-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <img
              src={active.img}
              alt={active.title}
              className="w-full max-h-[65vh] object-contain bg-[#0c1224]"
            />
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg mb-1">
                {active.title}
              </h3>
              <p className="text-sm text-[var(--text-dim)] mb-4">
                {active.issuer} · {active.date}
              </p>
              {active.verify && (
                <a
                  href={active.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[13px] text-[var(--teal)] hover:underline"
                >
                  Verify certificate <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
