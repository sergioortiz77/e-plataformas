/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // El sitio es una sola página sin rutas de API, sin fetch de servidor y sin
  // cookies/headers: el formulario arma un texto y abre wa.me. Por eso se
  // compila a HTML+CSS+JS (`out/`) y lo sirve Apache como archivos, en vez de
  // pagar un proceso Node permanente en el VPS.
  // Si algún día el formulario tiene que guardar en DB o mandar correo desde el
  // servidor, esto se revierte y pasa a Node+PM2 con su puerto.
  output: 'export',

  // `next/image` optimiza en el servidor, y aquí no hay servidor. Son dos
  // imágenes (logo e icono), así que se sirven tal cual.
  images: { unoptimized: true },
};

export default nextConfig;
