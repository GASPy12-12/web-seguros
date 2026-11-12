# Web GV, asesores de riesgos

Landing estática. El cliente elige auto o moto y el botón lo lleva al cotizador oficial de San Cristóbal
con el código de productor.

**Web en vivo:** https://gv-asesores.netlify.app

## Tecnologías

- HTML, CSS y JavaScript sin frameworks
- Servidor local mínimo en Node.js (`server.js`)
- Instalable como app (PWA: íconos y manifest)
- SEO básico: `sitemap.xml`, `robots.txt` e imagen para redes (Open Graph)
- Publicada en Netlify

## Ver la web en la compu

```bash
npm start
```

Abrí http://localhost:3000.

## Cambiar datos

- **Links, WhatsApp y promo:** bloque de configuración al inicio de `public/app.js`.
- **Textos:** `public/index.html`.
- **Colores:** variables al inicio de `public/styles.css`.
- **Logo y guía de marca:** carpeta `logo`.

## Publicar

Comprimí el contenido de `public` en un zip y arrastralo a la pestaña Deploys del proyecto en Netlify.

## Si cambia la dirección de la web

Hay que reemplazar `https://gv-asesores.netlify.app` en `public/index.html`, `public/privacidad.html`, `public/terminos.html`, `public/robots.txt` y `public/sitemap.xml`.
