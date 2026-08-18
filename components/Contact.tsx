"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Capacitación para Empresa (LMS)",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppUrl = () => {
    const text =
      `*Nueva Solicitud de Diagnóstico - ePlataformas*\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Correo:* ${formData.email}\n` +
      `*Tipo de proyecto:* ${formData.projectType}\n` +
      (formData.message.trim()
        ? `*Detalles:* ${formData.message.trim()}\n`
        : "");

    return `https://wa.me/529858584125?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(getWhatsAppUrl(), "_blank");
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
          <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/40 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">¡Solicitud Generada!</h3>
            <p className="text-slate-400 text-sm">
              Tu mensaje se ha estructurado para enviarse por WhatsApp. Si la ventana no se abrió automáticamente, haz clic en el siguiente botón:
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-sm transition-all shadow-lg shadow-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              Abrir WhatsApp Ahora
            </a>
          </div>
        ) : (
          <form className="space-y-4 text-left max-w-lg mx-auto bg-slate-900/80 p-8 rounded-2xl border border-slate-800 shadow-2xl" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nombre completo *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Sergio Ortiz"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Correo electrónico *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Tipo de proyecto</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500 text-sm"
              >
                <option value="Capacitación para Empresa (LMS)">Capacitación para Empresa (LMS)</option>
                <option value="Academia / Sitio de Membresía">Academia / Sitio de Membresía</option>
                <option value="Digitalización de Cursos y Multimedia">Digitalización de Cursos y Multimedia</option>
                <option value="Consultoría y Diagnóstico">Consultoría y Diagnóstico</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Mensaje o detalles (opcional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Cuéntanos un poco sobre tu audiencia, volumen de alumnos o necesidades específicas..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Enviar Solicitud por WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
