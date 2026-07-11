import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle2, AlertCircle } from "lucide-react";
import NeuralField from "../components/NeuralField";
import { profile } from "../data";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/https://formspree.io/f/xykrgyjo";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", title: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="opacity-40">
        <NeuralField density={28} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090D1A]/60 to-[#090D1A] pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[var(--teal)] transition-colors mb-10"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <p className="font-mono text-[13px] tracking-wider text-[var(--violet)] mb-3">
          // send a message
        </p>
        <h1 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-3">
          Let's talk.
        </h1>
        <p className="text-[var(--text-dim)] mb-10">
          Fill this in and it'll land straight in {profile.name.split(" ")[0]}
          's inbox at {profile.email}.
        </p>

        {status === "sent" ? (
          <div className="rounded-2xl border border-[var(--teal)]/30 bg-[var(--teal-dim)] p-8 text-center">
            <CheckCircle2
              size={32}
              className="mx-auto mb-4 text-[var(--teal)]"
            />
            <h2 className="font-display font-semibold text-xl mb-2">
              Message sent!
            </h2>
            <p className="text-[var(--text-dim)] text-sm mb-6">
              Thanks for reaching out — I'll get back to you soon.
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-2.5 rounded-full bg-[var(--teal)] text-[#06111a] font-semibold text-sm hover:brightness-110 transition-all"
            >
              Back to portfolio
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[var(--bg-panel)] p-7 md:p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-[12px] uppercase tracking-wide text-[var(--text-faint)] mb-2"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full rounded-lg bg-[#0c1224] border border-white/10 px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--teal)]/60 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-[12px] uppercase tracking-wide text-[var(--text-faint)] mb-2"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full rounded-lg bg-[#0c1224] border border-white/10 px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--teal)]/60 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block font-mono text-[12px] uppercase tracking-wide text-[var(--text-faint)] mb-2"
              >
                Subject / Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={form.title}
                onChange={handleChange}
                placeholder="Internship opportunity"
                className="w-full rounded-lg bg-[#0c1224] border border-white/10 px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--teal)]/60 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[12px] uppercase tracking-wide text-[var(--text-faint)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you have in mind…"
                className="w-full rounded-lg bg-[#0c1224] border border-white/10 px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--teal)]/60 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                Something went wrong — please try again, or email directly at{" "}
                {profile.email}.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--teal)] text-[#06111a] font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_30px_-8px_var(--teal)]"
            >
              {status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
