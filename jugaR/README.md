# Web del proyecto de innovación docente

Sitio estático, sin dependencias ni compilación.

## Estructura

    index.html        Página completa (Inicio, Proyecto, Metodología, Resultados, Equipo)
    css/estilos.css   Todos los estilos, con variables de color al principio
    js/main.js        Cambio de modo claro/oscuro y marcado del enlace activo

Las tipografías (Bricolage Grotesque y Source Serif 4) se cargan desde Google Fonts.
Si necesitas que funcione sin conexión, descárgalas y sustituye el <link> del <head>.

## Ver en local

Basta con abrir index.html en el navegador. Para evitar problemas con rutas
relativas puedes levantar un servidor:

    python3 -m http.server 8000

## Personalizar

- Colores: variables CSS en :root al inicio de css/estilos.css (hay un bloque
  equivalente para el modo oscuro más abajo).
- Textos: directamente en index.html. Cada sección va marcada con su id.
- Gráfico de resultados: es SVG escrito a mano dentro de index.html. Para cambiar
  un valor, ajusta "height" y "y" del <rect> correspondiente y su etiqueta <text>.
  El eje va de y=248 (valor 0) a y=20 (valor 10): altura = valor * 22.8.
- Documentos descargables: pon los PDF en una carpeta "archivos/" y cambia los
  href="#" de la lista de Materiales.

## Publicar

Al no haber build, sirve cualquier hosting estático: GitHub Pages, Netlify,
o el servidor web de la universidad. Sube la carpeta tal cual.

Licencia de los contenidos: CC BY-SA 4.0.
