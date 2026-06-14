import Link from "next/link";

import "./globals.css";

/**
 * Global 404 for requests that fall outside the [locale] segment.
 * Provides its own <html>/<body> since the root layout lives in [locale].
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1rem",
          padding: "2rem",
          background: "#fffaf2",
          color: "#2a2520",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p style={{ fontSize: "4rem", fontWeight: 700, color: "#c2410c", margin: 0 }}>
          404
        </p>
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Page Not Found</h1>
        <p style={{ color: "#6f6457", maxWidth: "28rem" }}>
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          style={{
            marginTop: "0.5rem",
            display: "inline-block",
            padding: "0.7rem 1.5rem",
            borderRadius: "999px",
            background: "#c2410c",
            color: "#fff7ed",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
      </body>
    </html>
  );
}
