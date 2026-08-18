# ePlataformas - Aplicación Web Moderna (Next.js + Tailwind CSS)

Rediseño y modernización de la plataforma **ePlataformas** (basada en el archivo histórico de eplataformas.com), adaptada a estándares modernos de rendimiento, diseño SaaS (*Bento Grid*, dark mode) y arquitectura basada en componentes con **Next.js (App Router)** y **Tailwind CSS**.

---

## 🚀 Requisitos Previos
- Node.js 18.17 o superior
- npm o yarn o pnpm

---

## 🛠️ Instalación y Puesta en Marcha

1. **Instalar las dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

3. **Compilar para producción:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Estructura del Proyecto

```text
eplataformas/
├── app/
│   ├── globals.css        # Estilos globales y Tailwind CSS
│   ├── layout.tsx         # Layout principal con metadatos SEO
│   └── page.tsx           # Vista principal que compone todas las secciones
├── components/
│   ├── Navbar.tsx         # Barra de navegación fija con menú móvil responsivo
│   ├── Hero.tsx           # Encabezado principal y propuesta de valor
│   ├── Solutions.tsx      # Bento Grid con los 3 pilares de soluciones
│   ├── Benefits.tsx       # Cuadrícula de beneficios tecnológicos y operativos
│   ├── Integrations.tsx   # Ecosistema de integraciones (Stripe, AWS, etc.)
│   ├── Testimonials.tsx   # Casos de éxito y testimonios de clientes
│   ├── Contact.tsx        # Formulario de diagnóstico inicial interactivo
│   └── Footer.tsx         # Pie de página y enlaces
├── public/                # Recursos estáticos
├── package.json           # Dependencias y scripts
├── tailwind.config.ts     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── next.config.mjs        # Configuración de Next.js
```

---

## ✨ Características Principales
- **Arquitectura Next.js 14+ (App Router):** Server Components por defecto y Client Components optimizados para interactividad.
- **Tailwind CSS:** Diseño moderno estilo *Dark Mode*, tipografía optimizada y micro-interacciones suaves.
- **Lucide React Icons:** Iconografía ligera y vectorial.
- **Copywriting Conciso:** Enfocado en beneficios directos y conversión (eliminando los bloques excesivos de texto del sitio original).
- **Formulario Interactivo:** Estado reactivo para captura de prospectos con confirmación inmediata.
