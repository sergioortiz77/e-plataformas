"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 to-blue-950/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Listo para construir tu plataforma digital?
        </h2>
        <p className="text-slate-400 text-sm md:text-base mb-10">
          Solicita un diagnóstico inicial sin costo para evaluar la arquitectura técnica, modelo de negocio y mapa de posibilidades para tu proyecto.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/40 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¡Solicitud Recibida!</h3>
            <p className="text-slate-400 text-sm">
              Nos pondremos en contacto contigo a la brevedad para coordinar la sesión de diagnóstico.
            </p>
          </div>
        ) : (
          <form className="space-y-4 text-left max-w-lg mx-auto bg-slate-900/80 p-8 rounded-2xl border border-slate-800 shadow-2xl" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nombre completo *</label>
              <input
                type="text"
                required
                placeholder="Sergio Ortiz"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Correo electrónico *</label>
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Tipo de proyecto</label>
              <select className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500 text-sm">
                <option>Capacitación para Empresa (LMS)</option>
                <option>Academia / Sitio de Membresía</option>
                <option>Digitalización de Cursos y Multimedia</option>
                <option>Consultoría y Diagnóstico</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Mensaje o detalles (opcional)</label>
              <textarea
                rows={3}
                placeholder="Cuéntanos un poco sobre tu audiencia, volumen de alumnos o necesidades específicas..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
            >
              Enviar Solicitud
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
