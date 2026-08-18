import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ePlataformas | Ecosistemas e-Learning y Membresías a Medida",
  description: "Desarrollamos e implementamos plataformas de capacitación digital corporativa, cursos en línea y sitios de membresía de alto rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
