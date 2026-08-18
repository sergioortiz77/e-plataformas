"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            eP
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ePlataformas<span className="text-blue-500">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#soluciones" className="hover:text-blue-400 transition-colors">Soluciones</a>
          <a href="#beneficios" className="hover:text-blue-400 transition-colors">Beneficios</a>
          <a href="#integraciones" className="hover:text-blue-400 transition-colors">Integraciones</a>
          <a href="#testimonios" className="hover:text-blue-400 transition-colors">Casos de Éxito</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/30 flex items-center gap-2 hover:translate-y-[-1px]"
          >
            Solicitar Diagnóstico
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-2"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-6 py-6 space-y-4 animate-fadeIn">
          <a href="#soluciones" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 py-1">Soluciones</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 py-1">Beneficios</a>
          <a href="#integraciones" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 py-1">Integraciones</a>
          <a href="#testimonios" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 py-1">Casos de Éxito</a>
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-3 bg-blue-600 rounded-lg font-semibold text-white mt-4"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      )}
    </header>
  );
}
