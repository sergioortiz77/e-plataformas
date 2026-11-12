import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 text-center text-xs text-slate-500 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Image
            src="/logo.png"
            alt="ePlataformas Logo"
            width={160}
            height={30}
            className="h-7 w-auto object-contain"
          />
          <span className="text-slate-600 hidden sm:inline">|</span>
          <p>© {new Date().getFullYear()} ePlataformas. Todos los derechos reservados.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400">
          <a href="/#soluciones" className="py-2 hover:text-white transition-colors">Soluciones</a>
          <a href="/#beneficios" className="py-2 hover:text-white transition-colors">Beneficios</a>
          <a href="/#integraciones" className="py-2 hover:text-white transition-colors">Integraciones</a>
          <a href="/#casos" className="py-2 hover:text-white transition-colors">Casos</a>
          <a href="/#contacto" className="py-2 hover:text-white transition-colors">Contacto</a>
          <a href="/aviso-de-privacidad/" className="py-2 hover:text-white transition-colors">Aviso de privacidad</a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 pt-6 border-t border-slate-800/60 text-slate-500 leading-relaxed">
        <p>ePlataformas es una marca de Corporativo para el Desarrollo del Potencial Humano Mexicano S.A. de C.V.</p>
        <p className="mt-1">
          <a href="mailto:sergio@eplataformas.com" className="hover:text-white transition-colors">sergio@eplataformas.com</a>
          {" · "}
          <a href="https://wa.me/529858584125" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            WhatsApp 985 858 4125
          </a>
        </p>
      </div>
    </footer>
  );
}
