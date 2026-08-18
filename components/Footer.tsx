import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 text-center text-xs text-slate-500 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
            eP
          </div>
          <span className="font-semibold text-slate-300 text-sm">
            ePlataformas
          </span>
          <span className="text-slate-600">|</span>
          <p>© {new Date().getFullYear()} ePlataformas. Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-6 text-slate-400">
          <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
          <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
          <a href="#integraciones" className="hover:text-white transition-colors">Integraciones</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
