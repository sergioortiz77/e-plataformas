import React from "react";

export default function Integrations() {
  const tools = [
    { name: "Stripe", category: "Pagos" },
    { name: "PayPal", category: "Pagos" },
    { name: "Amazon Web Services", category: "Cloud & Hosting" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "ActiveCampaign", category: "Automatización" },
    { name: "Slack", category: "Comunidad" },
    { name: "Zoom", category: "Videoconferencias" },
    { name: "Cloudflare", category: "Seguridad & CDN" }
  ];

  return (
    <section id="integraciones" className="py-16 border-t border-slate-800/60 bg-slate-900/20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider mb-8">
          Integrado con las herramientas y servicios líderes de la industria
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {tools.map((t, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:border-slate-700 transition-all text-center"
            >
              <div className="text-slate-200 font-bold text-base tracking-wide">{t.name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
