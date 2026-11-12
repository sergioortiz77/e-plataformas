import React from "react";
import { ArrowUpRight, Bot, CheckCircle2 } from "lucide-react";

// Casos reales y en línea. Cada dato de aquí se comprobó en el sitio vivo el
// 11-nov-2026: si un proyecto cambia o se apaga, se corrige aquí, porque un
// portafolio con un enlace roto o una función que ya no existe resta en vez de sumar.
const cases = [
  {
    name: "MXwithME",
    kind: "Comunidad y academia en línea",
    url: "https://www.mxwithme.com/",
    description:
      "Plataforma de comunidad y aprendizaje en México: autores que publican sus Espacios de estudio, membresías mensuales y una comunidad con foros, en la web y en una app para Android.",
    features: [
      "Cursos con video, audio y materiales descargables",
      "Membresías con cobro recurrente y comisiones para autores",
      "App en Google Play conectada a la misma cuenta",
      "Revisión de propuestas asistida por inteligencia artificial",
    ],
    ai: true,
  },
  {
    name: "¿Y si sí?",
    kind: "Plataforma ciudadana · Tierra Humana A.C.",
    url: "https://ysisi.mxwithme.com/",
    description:
      "Sitio para leer y comentar una iniciativa de ley artículo por artículo, con un panel de moderación pensado para personas sin conocimientos técnicos.",
    features: [
      "Más de 450 artículos navegables, con buscador",
      "Aportaciones por artículo con folio y acuse por correo",
      "Asistente de inteligencia artificial que responde citando el artículo exacto",
      "Exportación de las aportaciones para su entrega formal",
    ],
    ai: true,
  },
  {
    name: "Recordar Sonriendo",
    kind: "Servicio profesional con agenda y cobro",
    url: "https://recordarsonriendo.com/",
    description:
      "Sitio de un servicio de acompañamiento presencial y en línea, donde la persona reserva, paga y recibe sus avisos sin que nadie tenga que hacerlo a mano.",
    features: [
      "Reserva en línea conectada a la agenda",
      "Pago con tarjeta y devolución automática al cancelar a tiempo",
      "Avisos automáticos por WhatsApp y por correo",
      "Opiniones de clientes con su consentimiento",
    ],
    ai: false,
  },
  {
    name: "Temazcal",
    kind: "Sitio de servicios especializados",
    url: "https://temazcal.com/",
    description:
      "Sitio de construcción, consultoría y capacitación en temazcales tradicionales, con una trayectoria de más de 15 años en la práctica.",
    features: [
      "Servicios de construcción y consultoría explicados paso a paso",
      "Página de cursos de capacitación",
      "Galería de proyectos y contacto directo",
      "Administrable en WordPress",
    ],
    ai: false,
  },
  {
    name: "Dana Arabel",
    kind: "Sitio bilingüe para eventos y ceremonias",
    url: "https://www.danarabel.com/",
    description:
      "Sitio en español y en inglés para la creación de eventos culturales, artísticos, corporativos y turísticos, y para ceremonias tradicionales.",
    features: [
      "Versión completa en español y en inglés",
      "Un apartado para cada tipo de servicio",
      "Galería y formulario de contacto",
      "Administrable en WordPress",
    ],
    ai: false,
  },
  {
    name: "Mayan Tours Ek Balam",
    kind: "Sitio para un guía de turismo",
    url: "https://toursekbalam.com/",
    description:
      "Página informativa para un guía nativo de la zona arqueológica de Ek Balam, en Yucatán, con contacto directo por WhatsApp.",
    features: [
      "Diseño pensado primero para el teléfono",
      "Contacto y reservas por WhatsApp",
      "Rápido y sin costo de servidor para el cliente",
    ],
    ai: false,
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-24 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Portafolio</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Proyectos que ya están funcionando
          </p>
          <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
            Todos están en línea: puedes entrar y probarlos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article
              key={c.name}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  {c.ai && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-[11px] font-medium">
                      <Bot className="w-3.5 h-3.5" />
                      Con IA
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-blue-400 mb-4">{c.kind}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{c.description}</p>
                <ul className="space-y-2.5 text-sm text-slate-300 pb-6">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 pt-4 border-t border-slate-800/80"
              >
                Ver el sitio
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
