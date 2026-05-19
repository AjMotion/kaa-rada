import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 text-center">
        <h1 className="text-4xl font-semibold">Kaa Rada</h1>
        <p className="mt-4 text-lg">Welcome to your civic education app.</p>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
