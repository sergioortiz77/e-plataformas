import React from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Lograron migrar todos nuestros cursos y talleres presenciales al entorno digital con una plataforma ágil y fácil de usar para nuestros alumnos.",
      author: "Brenda María Ponce Vargas",
      role: "Directora General, Centro de Desarrollo Vivencial"
    },
    {
      quote: "Nos ayudaron a implementar los procesos de certificación y capacitación con la máxima calidad y cumplimiento normativo.",
      author: "Alejandro Bacelis Sotomayor",
      role: "Director Adjunto, Plantel Universitario San Marcos"
    }
  ];

  return (
    <section id="testimonios" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">Confianza</h2>
          <p className="text-3xl font-bold text-white tracking-tight">Lo que opinan quienes ya confían en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 relative flex flex-col justify-between">
              <Quote className="w-8 h-8 text-blue-500/20 mb-4" />
              <p className="text-slate-300 text-sm md:text-base italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-white text-sm">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
