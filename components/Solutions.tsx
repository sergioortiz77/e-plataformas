import React from "react";
import { Building2, Users, Video, CreditCard, CheckCircle2 } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "LMS para Empresas",
      description: "Capacita a tus equipos, certifica habilidades y automatiza el onboarding con reportes de avance y métricas en tiempo real.",
      icon: Building2,
      color: "blue",
      features: [
        "Evaluaciones y emisión automática de certificados",
        "Trazabilidad por colaborador y departamento",
        "Reducción de costos de capacitación presencial"
      ]
    },
    {
      title: "Sitios de Membresía & Creadores",
      description: "Monetiza tus conocimientos mediante suscripciones periódicas o venta de cursos individuales con protección de contenido.",
      icon: Users,
      color: "indigo",
      features: [
        "Pasarelas de cobro automatizadas y recurrentes",
        "Acceso escalonado por niveles de membresía",
        "Comunidad y foros privados de interacción"
      ]
    },
    {
      title: "Producción Multimedia & Didáctica",
      description: "Estructuramos y transformamos tu material en módulos dinámicos con video interactivo, storytelling y gamificación.",
      icon: Video,
      color: "teal",
      features: [
        "Videoconferencias convertibles a módulos de estudio",
        "Animaciones, whiteboards y diseño interactivo",
        "Diseñado para máxima retención del estudiante"
      ]
    }
  ];

  return (
    <section id="soluciones" className="py-24 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Qué Hacemos</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Soluciones integrales de aprendizaje digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800/80">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
