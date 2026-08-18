import React from "react";
import { Smartphone, ShieldCheck, CreditCard, Zap } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "100% Responsivo",
      description: "Experiencia fluida y adaptable a smartphones, tablets y computadoras de escritorio sin instalaciones complejas.",
      icon: Smartphone
    },
    {
      title: "Infraestructura Cloud Segura",
      description: "Alojamiento en servidores SaaS de alta disponibilidad con copias de seguridad automáticas y protección de datos.",
      icon: ShieldCheck
    },
    {
      title: "Cobros Globales y Automatizados",
      description: "Integración nativa con procesadores de pago seguros para gestionar cobros en moneda local e internacional.",
      icon: CreditCard
    },
    {
      title: "Despliegue Ágil y Mantenimiento Cero",
      description: "Nos encargamos de toda la complejidad técnica para que tú y tu equipo se enfoquen 100% en el contenido y el negocio.",
      icon: Zap
    }
  ];

  return (
    <section id="beneficios" className="py-24 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Beneficios Clave</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tecnología diseñada para escalar sin complicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
