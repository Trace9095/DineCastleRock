"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-white/60 text-sm">We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm text-white/80">Name</label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          placeholder="Your name"
          className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-white/40 focus:border-[#C04E20]/50 focus:outline-none focus:ring-1 focus:ring-[#C04E20]/50"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm text-white/80">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-white/40 focus:border-[#C04E20]/50 focus:outline-none focus:ring-1 focus:ring-[#C04E20]/50"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm text-white/80">Subject</label>
        <input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-white/40 focus:border-[#C04E20]/50 focus:outline-none focus:ring-1 focus:ring-[#C04E20]/50"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm text-white/80">Message</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Tell us more about your inquiry..."
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#C04E20]/50 focus:outline-none focus:ring-1 focus:ring-[#C04E20]/50 resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-12 rounded-full bg-[#C04E20] hover:bg-[#C04E20]/80 text-white font-semibold shadow-lg shadow-[#C04E20]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
