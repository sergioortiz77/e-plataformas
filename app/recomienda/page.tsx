import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";

// Reglas del programa de recomendación (decididas por Sergio el 11-nov-2026).
// Página sin enlace en el menú: se comparte a mano con quien recomienda.
// Si cambian el porcentaje o el plazo, se cambian aquí Y en el mensaje que se
// manda a las amistades (`_docs/eplataformas/mensaje-recomendacion.md`): son la misma oferta.
export const metadata: Metadata = {
  title: "Recomienda ePlataformas | 20 % de comisión",
  description: "Recomienda ePlataformas y recibe el 20 % de lo que pague tu recomendado durante su primer año.",
  robots: { index: false, follow: false },
};

const reglas = [
  {
    titulo: "Lo que recibes",
    texto:
      "El 20 % de lo que pague el cliente que recomendaste, sin contar el IVA: del pago inicial y de cada mensualidad, si su proyecto la tiene, durante sus primeros 12 meses.",
  },
  {
    titulo: "Cómo sabemos que vino de ti",
    texto:
      "Te damos un código y un enlace como eplataformas.com/?ref=TUCODIGO. Si la persona entra por tu enlace, el código llega solo en su mensaje; si no, basta con que escriba tu nombre o tu código en el formulario. El código queda anotado en su contrato.",
  },
  {
    titulo: "Cuándo cuenta",
    texto:
      "Cuando el cliente firma y paga. Cuenta solo un cliente nuevo, que no estuviera ya en pláticas con nosotros. La comisión se calcula sobre lo que de verdad se cobró: si el cliente deja de pagar, ese mes no genera comisión.",
  },
  {
    titulo: "Cuándo te pagamos",
    texto:
      "Dentro de los 10 días siguientes a cada pago del cliente. Antes del primero acordamos contigo cómo se documenta.",
  },
  {
    titulo: "Si dos personas recomiendan al mismo cliente",
    texto: "La comisión es de quien quedó registrado primero.",
  },
  {
    titulo: "Lo que te pedimos",
    texto:
      "Que nos presentes y cuentes lo que hacemos. Precios, plazos y alcances los cotizamos nosotros con el cliente, para no prometer algo que luego no corresponda.",
  },
];

export default function RecomiendaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ePlataformas" width={220} height={40} className="h-9 w-auto object-contain" priority />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 py-2 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Inicio
          </Link>
        </div>
      </header>

      <section className="flex-1 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Programa de recomendación</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Recomiéndanos y recibe el 20 %
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-12">
            Hacemos plataformas de cursos en línea, sitios de membresía y capacitación para empresas, con sistemas
            automatizados e inteligencia artificial. Si conoces a alguien que lo necesite, preséntanos: como
            agradecimiento compartimos contigo parte de lo que ese proyecto nos pague.
          </p>

          <ol className="space-y-6">
            {reglas.map((r) => (
              <li key={r.titulo} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h2 className="flex items-start gap-2 text-base font-bold text-white mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  {r.titulo}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed break-words">{r.texto}</p>
              </li>
            ))}
          </ol>

          <p className="text-slate-500 text-sm leading-relaxed mt-10">
            Sin cuota de entrada y sin comisiones por invitar a otras personas a recomendar: solo cuenta el cliente
            que contrata. Si algún día cambiamos estas reglas, lo que ya acordamos contigo se respeta.
          </p>

          <Link
            href="/#casos"
            className="mt-10 inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
          >
            Ver proyectos que ya hicimos
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
