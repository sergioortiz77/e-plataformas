import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import Integrations from "@/components/Integrations";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <Hero />
      <Solutions />
      <Benefits />
      <Integrations />
      <Cases />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
