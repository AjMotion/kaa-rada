import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-50">
      <div className="mx-4 w-full max-w-4xl rounded-[32px] border border-slate-800 bg-slate-900/95 px-8 py-12 shadow-2xl shadow-slate-950/40 backdrop-blur-md sm:px-12 sm:py-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Kaa Rada</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Civic education for the culture.</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            Track leaders, know your rights, and hold power accountable with tools built for Kenyan youth.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="#"
              className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Explore the platform
            </a>
            <a
              href="#"
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
            >
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
