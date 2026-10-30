# Ciencias de la Naturaleza 5º

Aplicación web de repaso para **5º de Primaria**: 15 unidades, 45 fotografías,
resúmenes locutados en español, tarjetas de vocabulario, 107 preguntas, repaso
inteligente de fallos, examen final y progreso guardado en el dispositivo.

**Web:** https://amedgit.github.io/primaria5/

## Características

- 15 unidades con ideas clave, curiosidades y trucos.
- 3 fotos por unidad (principal + galería), ampliables, con pie y crédito.
- Resumen locutado en MP3 (~1 min por unidad).
- Test por unidad con corrección y explicación.
- Repaso de preguntas falladas y examen final de 20 preguntas.
- Estrellas, XP, racha de días e historial (solo en tu navegador).
- Instalable como app (PWA) y funciona sin conexión tras la primera visita.
- Modo claro/oscuro y diseño adaptado a móvil.

## Estructura

```
index.html          aplicación
styles.css          estilos
datos.js            unidades, resúmenes, vocabulario y preguntas
creditos.js         pies de foto y autoría
app.js              lógica (test, progreso, audio, visor)
img/                fotos principales y galería; img/mini/ miniaturas
audio/              resúmenes locutados
creditos.html       créditos, privacidad y aviso legal
manifest.webmanifest / sw.js   instalación y modo sin conexión
```

## Aviso

Material de repaso **no oficial**, elaborado de forma independiente y organizado
según el currículo de 5º de Primaria. No reproduce ningún libro de texto ni está
vinculado a ninguna editorial.

## Licencias

- Código: MIT (ver `LICENSE`).
- Textos y preguntas: CC BY-NC-SA 4.0.
- Fotografías: Wikimedia Commons, con la licencia indicada en `creditos.html`.

## Desarrollo

El contenido está en `datos.js`. Cada unidad incluye `resumen`, `vocabulario`,
`curiosidad`, `truco` y `preguntas` (tipos `opcion`, `vf` y `completar`).
