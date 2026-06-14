"use client";

export default function NewsletterForm() {
  return (
    <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-lg border border-white/15 px-3.5 py-2.5 font-body text-[13px] text-white placeholder-white/35 outline-none focus:border-secondary/60 focus:ring-1 focus:ring-secondary/30"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />
      <button
        type="submit"
        className="rounded-lg px-4 py-2.5 font-body text-[13px] font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        Subscribe
      </button>
    </form>
  );
}
