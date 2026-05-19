import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const pageStyles: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #0f172a 0%, #020617 45%, #020617 100%)",
    color: "#f8fafc",
    padding: "24px",
  };

  const cardStyles: React.CSSProperties = {
    width: "100%",
    maxWidth: "960px",
    borderRadius: "32px",
    border: "1px solid rgba(148, 163, 184, 0.12)",
    background: "rgba(15, 23, 42, 0.95)",
    boxShadow: "0 40px 120px rgba(15, 23, 42, 0.35)",
    padding: "48px 36px",
  };

  const buttonPrimary: React.CSSProperties = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "48px",
    borderRadius: "24px",
    border: "none",
    background: "#38bdf8",
    color: "#0f172a",
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
  };

  const buttonSecondary: React.CSSProperties = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "48px",
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    background: "transparent",
    color: "#e2e8f0",
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <main style={pageStyles}>
      <div style={cardStyles}>
        <div style={{ textAlign: "center", gap: "24px", display: "grid" }}>
          <span style={{ fontSize: "0.8rem", letterSpacing: "0.3em", color: "#7dd3fc", textTransform: "uppercase" }}>
            Kaa Rada
          </span>
          <h1 style={{ margin: 0, fontSize: "3rem", lineHeight: 1.05, fontWeight: 800 }}>
            Civic education for the culture.
          </h1>
          <p style={{ margin: "0 auto", maxWidth: "720px", fontSize: "1.1rem", lineHeight: 1.75, color: "#cbd5e1" }}>
            Track leaders, know your rights, and hold power accountable with tools built for Kenyan youth.
          </p>
          <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginTop: "1rem" }}>
            <a href="#" style={buttonPrimary}>
              Explore the platform
            </a>
            <a href="#" style={buttonSecondary}>
              Learn about civic rights
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
