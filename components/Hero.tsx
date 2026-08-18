import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[650px] h-[650px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -translate-y-24" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>Ecosistemas e-Learning y Membresías Digitales</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Transforma tu conocimiento en una{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-300">
            plataforma digital escalable
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñamos e implementamos academias digitales a la medida: capacitación corporativa de alto impacto, monetización con cobros automáticos y contenido interactivo sin fricciones técnicas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
          >
            Comenzar Proyecto
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#soluciones"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            Conocer Soluciones
          </a>
        </div>
      </div>
    </section>
  );
}
