---
title: 'El 96 % de los sitios web tiene errores de accesibilidad: qué dice el informe WebAIM Million 2026'
description: 'El informe WebAIM Million 2026 analizó un millón de sitios. Te cuento los 6 errores más comunes y cómo corregirlos sin rediseñar.'
pubDate: 2026-11-23
readingTime: '5 min'
lang: 'es'
tags: ['Accesibilidad', 'UX', 'Datos']
draft: false
---

Casi todos los sitios de internet tienen barreras que impiden o dificultan su uso a personas con discapacidad. En 2026, el **95,9 % de las páginas de inicio** más visitadas del mundo tenía errores de accesibilidad detectables, y la cifra empeoró respecto del año anterior.

La buena noticia: la mayoría de esos errores son siempre los mismos seis, y se pueden corregir en una tarde, sin rediseñar nada. En este artículo te cuento qué encontró el informe, por qué te conviene prestarle atención y cómo revisar tu propio sitio.

## Qué es el informe WebAIM Million

WebAIM es una organización sin fines de lucro de la Universidad Estatal de Utah que trabaja en accesibilidad web desde 1999. Cada año analiza automáticamente la página de inicio del millón de sitios más visitados y publica los resultados. Los datos de la edición 2026 se tomaron en febrero de este año.

Algunas cifras clave de este año:

| Indicador | 2025 | 2026 |
| --- | --- | --- |
| Páginas con errores detectables (WCAG 2 A/AA) | 94,8 % | 95,9 % |
| Errores promedio por página | 51 | 56,1 |
| Elementos promedio por página | — | 1.437 (+22,5 % en un año) |

Dicho de otra forma: una persona con discapacidad encuentra **un error cada 26 elementos** de una página de inicio promedio.

> El análisis es automático, así que solo detecta una parte de los problemas. La situación real es peor.

## Los 6 errores más comunes

Seis tipos de error explican el **96 % de todos los problemas** detectados, y son los mismos desde hace siete años seguidos:

| Error | % de páginas | Qué significa |
| --- | --- | --- |
| Texto con bajo contraste | 83,9 % | Texto que se confunde con el fondo: gris claro sobre blanco, blanco sobre fotos. |
| Imágenes sin texto alternativo | 53,1 % | Un lector de pantalla no puede describir la imagen; si es un link o botón, la persona no sabe a dónde lleva. |
| Campos de formulario sin etiqueta | 51 % | El campo no tiene un nombre asociado; quien usa lector de pantalla no sabe qué escribir. |
| Links vacíos | 46,3 % | Links sin texto, por ejemplo un ícono solo. Se anuncian como "link" y nada más. |
| Botones vacíos | 30,6 % | Lo mismo en botones: la lupa de búsqueda o el menú hamburguesa sin nombre. |
| Idioma del documento sin declarar | 13,5 % | La página no indica en qué idioma está, y el lector de pantalla puede leerla con la pronunciación equivocada. |

El contraste bajo es, por lejos, el más extendido: aparece en más de 8 de cada 10 sitios, con un promedio de 34 casos por página.

El dato que más me llamó la atención como diseñadora: las páginas que usan ARIA (atributos pensados justamente para mejorar la accesibilidad) tienen **más** errores en promedio: 59,1 contra 42 en las que no lo usan. No es que ARIA sea malo, sino que mal usado suma ruido en lugar de resolver. Primero lo básico, después lo avanzado.

## Por qué te conviene prestarle atención

**Es mucha gente.** Según la Organización Mundial de la Salud, unas 1.300 millones de personas viven con una discapacidad significativa: 1 de cada 6 personas en el mundo. Un sitio con barreras deja afuera a una parte real de tu público.

**No es solo discapacidad permanente.** El buen contraste ayuda a cualquiera que mire el celular al sol. Las etiquetas claras en formularios ayudan a personas mayores, a quien usa el teclado o a quien navega con una mano ocupada. Lo que es imprescindible para algunos es más cómodo para todos.

**En Europa ya es obligatorio para muchos negocios.** Desde el 28 de junio de 2025 rige la Ley Europea de Accesibilidad, que en España se aplica a través de la Ley 11/2023. Entre otros servicios, alcanza al comercio electrónico: tiendas online, procesos de pago y apps. Si vendés o tenés clientes en la Unión Europea, conviene revisar cómo te afecta.

**Un sitio accesible es un sitio mejor hecho.** Textos legibles, botones con nombre y formularios claros reducen errores y abandonos para todas las personas.

## Cómo revisar tu sitio en 15 minutos

No necesitás pagar una auditoría para empezar. Con estas herramientas gratuitas detectás la mayoría de los errores de la lista:

- **WAVE (de WebAIM):** una extensión para Chrome y Firefox. La activás en cualquier página y marca los errores directamente sobre el diseño.
- **Lighthouse:** viene incluido en Chrome. Abrís las herramientas para desarrolladores (F12), pestaña Lighthouse, marcás "Accesibilidad" y generás el informe. Te da un puntaje y una lista de problemas.
- **Un verificador de contraste:** pegás el color del texto y el del fondo, y te dice si cumple. El de WebAIM es simple y gratuito.
- **La prueba del teclado:** dejá el mouse y recorré tu sitio solo con la tecla Tab. ¿Ves siempre en qué parte de la página estás? ¿Llegás a todos los botones y links? Si te perdés, también se pierde quien navega así.
- **Un lector de pantalla:** VoiceOver viene incluido en Mac e iPhone, y NVDA es gratuito en Windows. Escuchar tu sitio cinco minutos cambia la forma de diseñarlo.

> Las herramientas automáticas no detectan todo. Usalas como punto de partida, no como certificado.

## 6 correcciones que podés hacer hoy

Una por cada error de la lista, ordenadas de más a menos frecuente:

1. **Subí el contraste.** El texto normal necesita una relación de al menos 4,5:1 con su fondo, y el texto grande, 3:1. Si usás gris claro para "verse elegante", oscurecelo un par de tonos.
2. **Escribí texto alternativo.** Describí lo que la imagen aporta, no lo que se ve: "Gráfico: el 84 % de los sitios tiene bajo contraste" sirve más que "gráfico de barras". Si la imagen es solo decorativa, dejale el atributo vacío (`alt=""`).
3. **Etiquetá cada campo.** Cada input necesita un `<label>` visible y asociado. El texto de ejemplo dentro del campo (placeholder) no reemplaza a la etiqueta: desaparece cuando escribís.
4. **Dale texto a los links.** Si un link es solo un ícono, agregá un texto oculto o un `aria-label` que diga a dónde lleva: "Instagram", no "link".
5. **Nombrá los botones.** La lupa es "Buscar", la hamburguesa es "Abrir menú", la X es "Cerrar".
6. **Declará el idioma.** Una sola línea en el código: `<html lang="es">`. Es el arreglo más rápido de toda la lista.

La accesibilidad no es un extra que se agrega al final: es parte de diseñar bien. Y como muestra el informe, la mayor parte del camino está en lo básico.

## Fuentes

- **The WebAIM Million 2026** — informe original.
- **Web accessibility is getting worse according to the 2026 WebAIM Million report** (Priority Pixels) — porcentajes por tipo de error y comparación con 2025.
- **The WebAIM Million Report 2026: what it tells us** (Nexer Digital) — errores promedio y elementos por página.
- **Informe mundial sobre la equidad sanitaria para las personas con discapacidad** (OPS/OMS) — 1.300 millones de personas, 16 % de la población.
- **Claves de la entrada en vigor de la Ley de Accesibilidad en España** (Cuatrecasas) — fecha y alcance para comercio electrónico.
