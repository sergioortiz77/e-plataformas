import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

// Aviso de privacidad de ePlataformas (11-nov-2026). Responsable, el mismo del
// aviso de mxwithme.com; domicilio, la oficina de Tepoztlán (indicación de Sergio). La forma sigue
// la del aviso de recordarsonriendo.com (corto, cada proveedor con lo que recibe).
// Si el sitio empieza a guardar algo en el servidor (un formulario que escriba en
// una base, analítica, cookies), este aviso se actualiza en el MISMO cambio.
export const metadata: Metadata = {
  title: "Aviso de privacidad | ePlataformas",
  description: "Qué datos personales recabamos en ePlataformas, para qué los usamos y cómo ejercer tus derechos.",
};

const RESPONSABLE = "Corporativo para el Desarrollo del Potencial Humano Mexicano S.A. de C.V.";
const CORREO = "sergio@eplataformas.com";
const ACTUALIZACION = "11 de noviembre de 2026";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold text-white mt-10 mb-3">{children}</h2>;
}

function Lista({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

const proveedores = [
  ["WhatsApp (Meta)", "Entrega los mensajes que nos escribimos, incluido el que arma el formulario de este sitio."],
  ["Hostinger", "El servidor donde vive este sitio y se guarda el registro técnico de visitas."],
  ["Cloudflare", `Recibe los correos que nos escribes a ${CORREO} y los entrega en nuestro buzón.`],
  ["Google", "El buzón de correo y los documentos de propuestas y contratos."],
];

export default function AvisoPage() {
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

      <section className="flex-1 py-16 md:py-20">
        <article className="max-w-3xl mx-auto px-6 text-slate-300 text-sm md:text-base leading-relaxed break-words">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Aviso de privacidad</h1>
          <p className="text-slate-400">
            Qué datos tuyos necesitamos para atender tu proyecto, para qué los usamos y cómo puedes pedirnos que los
            corrijamos o los borremos.
          </p>

          <H2>Quién es responsable de tus datos</H2>
          <p>
            ePlataformas es una marca de {RESPONSABLE}, con domicilio en Texoco 2, Col. Los Ocotes, Tepoztlán, Morelos, C.P. 62520, México, responsable del
            tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión
            de los Particulares, publicada en el Diario Oficial de la Federación el 20 de marzo de 2025.
          </p>
          <p className="mt-3">
            Para cualquier asunto de este aviso: <a href={`mailto:${CORREO}`} className="text-blue-400 hover:text-blue-300">{CORREO}</a>.
          </p>

          <H2>Qué datos recabamos</H2>
          <p className="mb-2">Si nos pides información o un diagnóstico:</p>
          <Lista
            items={[
              "Tu nombre y tu correo electrónico.",
              "Tu número de WhatsApp, porque la solicitud nos llega por ahí.",
              "El tipo de proyecto y lo que nos cuentes de él.",
              "Quién te recomendó, si nos lo dices o llegaste por su enlace.",
            ]}
          />
          <p className="mt-4 mb-2">Si contratas un proyecto, además:</p>
          <Lista
            items={[
              "Los datos para el contrato y la factura: nombre o razón social, RFC, domicilio fiscal y los de tu representante, si lo hay.",
              "Los pagos que realizas.",
            ]}
          />
          <p className="mt-4 mb-2">Si participas en nuestro programa de recomendación:</p>
          <Lista
            items={[
              "Tu nombre, tu contacto y tu código.",
              "Los datos para pagarte la comisión: tu cuenta bancaria y, si facturas, tus datos fiscales.",
            ]}
          />
          <p className="mt-4">
            No te pedimos datos sensibles (como salud, creencias u origen étnico).
          </p>
          <p className="mt-3">
            El formulario de este sitio no guarda nada en nuestro servidor: solo arma un mensaje y lo abre en tu
            WhatsApp, y tú decides si lo envías. El servidor sí guarda por 14 días un registro técnico de cada visita
            (dirección IP, navegador, página consultada y el enlace por el que llegaste), para la seguridad del sitio y
            para saber cuántas visitas llegan de cada lugar. El sitio no usa cookies ni herramientas de publicidad o
            analítica; si llegas por el enlace de alguien que te recomendó, tu propio navegador recuerda su código
            durante 90 días para ponerlo en tu mensaje.
          </p>

          <H2>Para qué los usamos</H2>
          <Lista
            items={[
              "Responder tu solicitud, hacer el diagnóstico y preparar tu propuesta.",
              "Celebrar y cumplir el contrato, emitir tus facturas y darte soporte.",
              "En el programa de recomendación: saber quién recomendó a cada cliente y pagarle su comisión.",
            ]}
          />
          <p className="mt-3">
            Son las únicas finalidades. No te enviamos publicidad; si algún día quisiéramos hacerlo, te lo pediremos
            primero.
          </p>

          <H2>Si llegaste por recomendación</H2>
          <p>
            Le informamos a quien te recomendó que contrataste con nosotros y el monto de su comisión, que es el 20 %
            de lo que pagas sin IVA. No le compartimos ningún otro dato tuyo ni el contenido de tu proyecto.
          </p>

          <H2>Quién más los recibe</H2>
          <p className="mb-3">
            Solo los proveedores que necesitamos para trabajar, que los tratan por nuestra cuenta y únicamente para lo
            que se describe:
          </p>
          <dl className="space-y-3">
            {proveedores.map(([nombre, uso]) => (
              <div key={nombre}>
                <dt className="font-semibold text-white">{nombre}</dt>
                <dd className="text-slate-400">{uso}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3">
            Algunos de ellos guardan la información fuera de México. No vendemos, cedemos ni transferimos tus datos a
            nadie más, salvo que lo pida una autoridad competente conforme a la ley.
          </p>

          <H2>Cuánto tiempo los conservamos</H2>
          <Lista
            items={[
              "Si no llegas a contratar: hasta un año después de nuestra última conversación.",
              "Si contratas, o si recibes comisiones: 5 años después del último pago, el plazo que exigen las leyes fiscales para los registros de pagos.",
              "El registro técnico de visitas: 14 días.",
            ]}
          />

          <H2>Tus derechos</H2>
          <p>
            Puedes pedirnos en cualquier momento acceder a tus datos, corregirlos, cancelarlos u oponerte a su uso
            (derechos ARCO), así como revocar tu consentimiento o limitar su uso. Es gratuito.
          </p>
          <p className="mt-3">
            Escríbenos a <a href={`mailto:${CORREO}`} className="text-blue-400 hover:text-blue-300">{CORREO}</a> con tu
            nombre, un medio para responderte, una identificación (o la de tu representante y el documento que lo
            acredite) y qué datos y qué derecho quieres ejercer. Si pides una corrección, dinos cuál y, si hace falta,
            el documento que la respalde.
          </p>
          <p className="mt-3">
            Te respondemos en un máximo de 20 días hábiles. Si procede, lo hacemos efectivo en los 15 días hábiles
            siguientes. Si tienes un contrato vigente, borrar ciertos datos puede impedir que lo cumplamos o que te
            facturemos; si es el caso, te lo explicamos antes.
          </p>

          <H2>Cambios a este aviso</H2>
          <p>Cualquier cambio se publica en esta misma página, con su fecha de actualización.</p>
          <p className="mt-6 text-slate-500">Última actualización: {ACTUALIZACION}.</p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
