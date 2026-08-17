"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main
      style={{
        minHeight: "72vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 14,
        padding: 24,
      }}
    >
      <h1 className="hero-name" style={{ fontSize: "clamp(34px, 7vw, 60px)" }}>
        Something broke<span className="accent">.</span>
      </h1>
      <p className="meta" style={{ maxWidth: 360 }}>
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="ext"
        style={{ marginTop: 8, background: "none", cursor: "pointer" }}
      >
        try again ↻
      </button>
    </main>
  );
}
