# Gestix · sitio web

Landing de [gestix.com.ar](https://gestix.com.ar), publicada con GitHub Pages desde la rama `main`. Es un sitio estático: no hay build ni dependencias.

## Estructura

| Archivo | Qué es |
| :- | :- |
| `index.html` | Página principal. **El CSS y el JS están dentro del propio archivo** (bloques `<style>` y `<script>`). |
| `contacto.html`, `soporte.html`, `privacidad.html` | Páginas secundarias. |
| `404.html` | Página de error; además redirige `/suscribirse` a la app. |
| `CNAME` | Dominio personalizado (`gestix.com.ar`). No borrar. |
| `sitemap.xml`, `robots.txt` | SEO. |
| `gestix-*.png` | Logos e íconos. |
| `assets/catalog/` | Imagen de ejemplo del catálogo. |

> `style.css` y `script.js` **no están enlazados desde `index.html`** y pertenecen a una versión anterior de la web. Editarlos no cambia nada en el sitio publicado.

## Dónde cambiar cosas

- **Precios y planes:** en `index.html`, sección `id="planes"` (tarjetas) y la tabla comparativa que está justo debajo.
- **Enlaces de alta y de ingreso:** buscar `app.gestix.com.ar` en `index.html`.
- **Textos y secciones:** directamente en el HTML de `index.html`.
- **Colores y estilos:** variables `:root` al comienzo del primer bloque `<style>` de `index.html`.

## Publicar

Los cambios que llegan a `main` se publican solos en GitHub Pages en unos instantes. Para cambios grandes conviene trabajar en una rama y abrir un pull request.
