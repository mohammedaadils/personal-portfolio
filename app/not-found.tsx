import Link from "next/link";

export default function NotFound() {
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
      <div className="label">404</div>
      <h1 className="hero-name" style={{ fontSize: "clamp(40px, 9vw, 80px)" }}>
        Not found<span className="accent">.</span>
      </h1>
      <p className="meta" style={{ maxWidth: 360 }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="ext" style={{ marginTop: 8 }}>
        ← back home
      </Link>
    </main>
  );
}
