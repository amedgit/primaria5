/* ============================================================
   APP DE ESTUDIO · CIENCIAS DE LA NATURALEZA 5º
   ============================================================ */

(function () {
  "use strict";

  const LS_KEY = "mates5_estudio_v1";
  const main = document.getElementById("main");
  const toastEl = document.getElementById("toast");
  const confetiEl = document.getElementById("confeti");

  let estado = cargarEstado();
  let sesion = null;
  let ultimoResultado = null;
  let hablando = false;
  let audioActual = null;
  let simulacro = null;
  let timerSim = null;
  let ultimoSimulacro = null;

  /* ---------- banco de preguntas ---------- */
  UNIDADES.forEach(function (u) {
    u.preguntas.forEach(function (p, i) {
      p.qid = u.id + "-" + i;
      p.unidadId = u.id;
    });
  });
  const TODAS = UNIDADES.reduce(function (acc, u) { return acc.concat(u.preguntas); }, []);

  /* ---------- estado ---------- */
  function estadoInicial() {
    return { xp: 0, racha: { ultima: "", dias: 0 }, unidades: {}, fallos: {}, historial: [], tema: "claro" };
  }

  function cargarEstado() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return estadoInicial();
      const e = JSON.parse(raw);
      const base = estadoInicial();
      return Object.assign(base, e, {
        racha: Object.assign(base.racha, e.racha || {}),
        unidades: e.unidades || {},
        fallos: e.fallos || {},
        historial: Array.isArray(e.historial) ? e.historial : []
      });
    } catch (err) {
      return estadoInicial();
    }
  }

  function guardar() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(estado)); } catch (err) { /* modo privado */ }
  }

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function srcImagen(id) {
    if (typeof IMG_DATA !== "undefined" && IMG_DATA[id]) return IMG_DATA[id];
    return "img/" + id + ".jpg";
  }

  function srcMini(id) {
    if (typeof MINI_DATA !== "undefined" && MINI_DATA[id]) return MINI_DATA[id];
    if (typeof IMG_DATA !== "undefined" && IMG_DATA[id]) return IMG_DATA[id];
    return "img/mini/" + id + ".jpg";
  }

  function srcAudio(id) {
    if (typeof AUDIO_DATA !== "undefined" && AUDIO_DATA[id]) return AUDIO_DATA[id];
    return "audio/" + id + ".mp3";
  }

  function normalizar(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9ñ\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function barajar(a) {
    const c = a.slice();
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }

  function hoyISO() { return new Date().toISOString().slice(0, 10); }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("visible");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("visible"); }, 2600);
  }

  function nivel() {
    const n = Math.floor(estado.xp / 150) + 1;
    const titulos = ["Aprendiz", "Explorador", "Investigador", "Científico", "Gran científico"];
    return { n: n, titulo: titulos[Math.min(n - 1, titulos.length - 1)], siguiente: n * 150, actual: estado.xp };
  }

  function estrellas(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0; }

  function estrellasHTML(n) {
    let s = "";
    for (let i = 1; i <= 3; i++) s += '<span class="' + (i <= n ? "on" : "off") + '">★</span>';
    return '<span class="estrellas" aria-label="' + n + ' de 3 estrellas">' + s + "</span>";
  }

  function progresoUnidad(u) {
    const d = estado.unidades[u.id];
    return d ? Math.round(d.mejor || 0) : 0;
  }

  /* ---------- tema ---------- */
  function aplicarTema() {
    document.documentElement.setAttribute("data-tema", estado.tema === "oscuro" ? "oscuro" : "claro");
    const b = document.getElementById("btn-tema");
    if (b) b.textContent = estado.tema === "oscuro" ? "☀️" : "🌙";
  }

  function alternarTema() {
    estado.tema = estado.tema === "oscuro" ? "claro" : "oscuro";
    aplicarTema();
    guardar();
  }

  /* ---------- voz ---------- */
  function hablar(texto) {
    if (!("speechSynthesis" in window)) { toast("Este navegador no puede leer en voz alta."); return; }
    if (hablando) { speechSynthesis.cancel(); hablando = false; actualizarBotonVoz(); return; }
    const voces = speechSynthesis.getVoices();
    if (!voces.length) {
      toast("No hay voces instaladas en este navegador. Usa el botón de audio del resumen.");
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "es-ES";
    const es = voces.find(function (v) { return /^es/i.test(v.lang); });
    if (es) u.voice = es;
    u.rate = 0.96;
    u.pitch = 1.02;
    u.onend = function () { hablando = false; actualizarBotonVoz(); };
    u.onerror = function () { hablando = false; actualizarBotonVoz(); };
    hablando = true;
    actualizarBotonVoz();
    speechSynthesis.speak(u);
  }

  function detenerAudio() {
    if (audioActual) {
      try { audioActual.pause(); } catch (err) { /* nada */ }
      audioActual = null;
    }
  }

  function duracion(seg) {
    if (!isFinite(seg) || seg <= 0) return "";
    const total = Math.round(seg);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  /* reproductor del resumen locutado + respaldo con la voz del navegador */
  function montarAudio(u) {
    const audio = document.getElementById("audio-resumen");
    const btn = document.getElementById("btn-audio");
    const info = document.getElementById("audio-info");
    if (!audio || !btn) return;
    audioActual = audio;

    const texto = "Unidad " + u.numero + ". " + u.titulo + ". " + u.resumen.join(" ") + " Truco para recordar: " + u.truco;

    function ponerBoton(parado) {
      btn.setAttribute("aria-pressed", parado ? "false" : "true");
      btn.innerHTML = parado
        ? '<span aria-hidden="true">▶</span> Escuchar resumen'
        : '<span aria-hidden="true">⏸</span> Pausar';
    }

    btn.addEventListener("click", function () {
      if (audio.dataset.fallo === "1") { hablar(texto); return; }
      if (audio.paused) {
        const p = audio.play();
        if (p && p.catch) p.catch(function () { audio.dataset.fallo = "1"; usarVoz(u, btn, info, texto); });
      } else {
        audio.pause();
      }
    });

    audio.addEventListener("play", function () { ponerBoton(false); });
    audio.addEventListener("pause", function () { ponerBoton(true); });
    audio.addEventListener("ended", function () { ponerBoton(true); });
    audio.addEventListener("loadedmetadata", function () {
      info.textContent = duracion(audio.duration) + " · voz artificial";
    });
    audio.addEventListener("error", function () {
      if (!audio.getAttribute("src")) return;
      audio.dataset.fallo = "1";
      btn.innerHTML = '<span aria-hidden="true">🔊</span> Leer con el navegador';
      info.textContent = "Audio del resumen no encontrado";
    });
  }

  function usarVoz(u, btn, info, texto) {
    btn.innerHTML = '<span aria-hidden="true">🔊</span> Leer con el navegador';
    if (info) info.textContent = "Este dispositivo no reproduce el MP3";
    hablar(texto);
  }

  function actualizarBotonVoz() {
    const b = document.getElementById("btn-voz");
    if (b) b.textContent = hablando ? "⏹ Detener lectura" : "🔊 Escuchar resumen";
  }

  /* ---------- confeti ---------- */
  function confeti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colores = ["#2f9e8f", "#e07a5f", "#7c6bd6", "#d99a1e", "#4f9d47", "#d1495b"];
    for (let i = 0; i < 40; i++) {
      const d = document.createElement("i");
      d.style.left = Math.random() * 100 + "vw";
      d.style.background = colores[i % colores.length];
      d.style.animationDelay = (Math.random() * 0.5).toFixed(2) + "s";
      d.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
      confetiEl.appendChild(d);
      setTimeout(function () { d.remove(); }, 3200);
    }
  }

  /* ---------- cabecera ---------- */
  function pintarStats() {
    document.querySelector("#stat-xp b").textContent = estado.xp;
    document.querySelector("#stat-racha b").textContent = estado.racha.dias || 0;
  }

  /* ---------- vista: inicio ---------- */
  function renderInicio() {
    detenerVoz();
    const totalPct = Math.round(UNIDADES.reduce(function (a, u) { return a + progresoUnidad(u); }, 0) / UNIDADES.length);
    const nv = nivel();
    const pendientes = Object.keys(estado.fallos).filter(function (k) { return estado.fallos[k] > 0; }).length;

    let html = '<section class="hero">';
    html += '<div class="hero-texto">';
    html += '<span class="etiqueta">15 unidades · currículo de 5º de Primaria</span>';
    html += '<h1>Estudia Matemáticas <span class="acento">jugando</span></h1>';
    html += '<p class="lead">Lee las ideas clave, gira las tarjetas de vocabulario y pon a prueba lo que sabes. La app recuerda tus fallos y te los vuelve a preguntar.</p>';
    html += '<div class="hero-acciones">';
    html += '<button class="btn btn-secundario" data-nav="repaso" ' + (pendientes ? "" : "disabled") + '>🎯 Repasar mis fallos' + (pendientes ? " (" + pendientes + ")" : "") + "</button>";
    html += '<button class="btn btn-primario" data-nav="simulacro">🎓 Simulacro · 40 preguntas</button>';
    html += '<button class="btn btn-secundario" data-nav="examen">🏆 Examen corto (20)</button>';
    html += "</div>";
    html += '<div class="hero-datos">';
    html += '<div><strong>' + totalPct + '%</strong><span>temario dominado</span></div>';
    html += '<div><strong>' + nv.titulo + '</strong><span>nivel ' + nv.n + "</span></div>";
    html += '<div><strong>' + estado.historial.length + '</strong><span>tests completados</span></div>';
    html += "</div>";
    html += "</div>";
    html += '<div class="hero-ilustracion" aria-hidden="true"><span>🔢</span><span>➕</span><span>➗</span><span>📐</span><span>🎲</span><span>📏</span></div>';
    html += "</section>";

    html += '<section aria-labelledby="titulo-unidades">';
    html += '<div class="seccion-cab">';
    html += '<h2 id="titulo-unidades">Las 15 unidades</h2>';
    html += '<p class="mini">Toca una unidad para estudiar y hacer su test.</p>';
    html += "</div>";
    html += '<div class="grid-unidades">';
    UNIDADES.forEach(function (u) {
      const pct = progresoUnidad(u);
      const n = estrellas(pct);
      const c = (typeof CREDITOS_IMG !== "undefined") && CREDITOS_IMG[u.id];
      html += '<article class="tarjeta-unidad" style="--c:' + u.color + '">';
      html += '<button class="unidad-btn" data-nav="unidad" data-param="' + u.id + '" aria-label="Unidad ' + u.numero + ": " + esc(u.titulo) + '">';
      if (c) html += '<img class="unidad-foto" src="' + c.archivo + '" alt="" loading="lazy" decoding="async" width="1200" height="800">';
      html += '<span class="unidad-cuerpo">';
      html += '<span class="unidad-top"><span class="unidad-emoji" aria-hidden="true">' + u.emoji + "</span>";
      html += '<span class="unidad-num">Unidad ' + u.numero + "</span></span>";
      html += '<span class="unidad-titulo">' + esc(u.titulo) + "</span>";
      html += '<span class="unidad-pie">' + estrellasHTML(n) + '<span class="unidad-pct">' + pct + "%</span></span>";
      html += '<span class="barra-mini"><span style="width:' + pct + '%"></span></span>';
      html += "</span></button></article>";
    });
    html += "</div></section>";

    html += '<section class="nota">';
    html += '<h2>Cómo aprovecharla</h2>';
    html += '<ol class="pasos">';
    html += "<li><strong>Lee</strong> las ideas clave de la unidad (o pulsa «Escuchar resumen»).</li>";
    html += "<li><strong>Gira las tarjetas</strong> de vocabulario hasta saberlas sin mirar.</li>";
    html += "<li><strong>Haz el test</strong>: si fallas, la app te explica el porqué y guarda la pregunta para repasarla.</li>";
    html += "<li>Cuando tengas 3 estrellas en varias unidades, haz un <strong>simulacro completo</strong> (40 preguntas y 45 minutos).</li>";
    html += "</ol></section>";

    main.innerHTML = html;
    pintarStats();
  }

  /* ---------- vista: unidad ---------- */
  function figuraHTML(u) {
    const c = (typeof CREDITOS_IMG !== "undefined") && CREDITOS_IMG[u.id];
    if (!c) return "";
    const credito = !c.pagina
      ? "Esquema propio · " + c.lic
      : "Imagen de " + c.autor + " · " + c.lic + " · Wikimedia Commons";
    return '<figure class="figura">' +
      '<button class="figura-btn" type="button" data-img="' + c.archivo + '" data-alt="' + esc(c.alt) + '" aria-label="Ampliar el esquema">' +
      '<img src="' + c.archivo + '" alt="' + esc(c.alt) + '" width="1200" height="800" loading="lazy" decoding="async">' +
      "</button>" +
      "<figcaption><span class=\"pie-foto\">" + esc(c.pie) + "</span>" +
      '<span class="credito">' + (c.pagina ? "📷 " : "✏️ ") + esc(credito) + "</span></figcaption></figure>";
  }

  function galeriaHTML(u) {
    const c = (typeof CREDITOS_IMG !== "undefined") && CREDITOS_IMG[u.id];
    if (!c || !c.galeria || !c.galeria.length) return "";
    let html = '<section class="galeria-bloque" aria-labelledby="h-galeria">';
    html += '<h2 class="galeria-titulo" id="h-galeria">Más imágenes</h2><div class="galeria">';
    c.galeria.forEach(function (g) {
      const gid = g.archivo.split("/").pop().replace(".jpg", "");
      html += '<figure class="foto-card">';
      html += '<button class="figura-btn" type="button" data-img="' + srcImagen(gid) + '" data-alt="' + esc(g.alt) + '" aria-label="Ampliar imagen">';
      html += '<img src="' + srcImagen(gid) + '" alt="' + esc(g.alt) + '" width="900" height="600" loading="lazy" decoding="async">';
      html += "</button>";
      html += "<figcaption><span class=\"pie-foto\">" + esc(g.pie) + "</span>";
      html += '<span class="credito">📷 ' + esc(g.autor) + " · " + esc(g.lic) + " · Wikimedia Commons</span></figcaption></figure>";
    });
    html += "</div></section>";
    return html;
  }

  function renderUnidad(id) {
    detenerVoz();
    const u = getUnidad(id);
    if (!u) { renderInicio(); return; }
    const pct = progresoUnidad(u);
    const d = estado.unidades[u.id] || {};

    let html = '<div class="migas"><button class="btn-volver" data-nav="inicio">← Todas las unidades</button></div>';

    html += '<header class="cab-unidad" style="--c:' + u.color + '">';
    html += '<span class="cab-emoji" aria-hidden="true">' + u.emoji + "</span>";
    html += '<div class="cab-texto">';
    html += '<span class="unidad-num">Unidad ' + u.numero + " de 15</span>";
    html += "<h1>" + esc(u.titulo) + "</h1>";
    html += '<div class="cab-meta">' + estrellasHTML(estrellas(pct)) + '<span class="unidad-pct">Mejor resultado: ' + pct + "%</span>";
    if (d.intentos) html += '<span class="mini">· ' + d.intentos + (d.intentos === 1 ? " intento" : " intentos") + "</span>";
    html += "</div></div></header>";

    html += '<div class="acciones-unidad">';
    html += '<button class="btn btn-primario" data-nav="test" data-param="' + u.id + '">📝 Hacer el test (' + u.preguntas.length + " preguntas)</button>";
    html += '<div class="audio-caja">';
    html += '<button class="btn btn-secundario" id="btn-audio" type="button" aria-pressed="false"><span aria-hidden="true">▶</span> Escuchar resumen</button>';
    html += '<span class="mini" id="audio-info">cargando audio…</span>';
    html += '<audio id="audio-resumen" src="' + srcAudio(u.id) + '" preload="metadata"></audio>';
    html += "</div></div>";

    html += figuraHTML(u);
    html += galeriaHTML(u);

    html += '<section class="bloque" aria-labelledby="h-claves">';
    html += '<h2 id="h-claves">Ideas clave</h2>';
    html += '<ul class="claves">';
    u.resumen.forEach(function (t) { html += "<li>" + esc(t) + "</li>"; });
    html += "</ul></section>";

    html += '<section class="bloque" aria-labelledby="h-vocab">';
    html += '<div class="seccion-cab"><h2 id="h-vocab">Tarjetas de vocabulario</h2><p class="mini">Toca para girar y comprobar.</p></div>';
    html += '<div class="grid-tarjetas">';
    u.vocabulario.forEach(function (v) {
      html += '<button class="tarjeta-vocab" type="button" aria-label="' + esc(v.p) + '. Toca para ver la definición">';
      html += '<span class="tv-interior"><span class="tv-cara tv-delante"><strong>' + esc(v.p) + '</strong><small>toca para girar</small></span>';
      html += '<span class="tv-cara tv-detras">' + esc(v.d) + "</span></span></button>";
    });
    html += "</div></section>";

    html += '<div class="grid-dos">';
    html += '<section class="caja caja-curio"><h2>💡 ¿Sabías que…?</h2><p>' + esc(u.curiosidad) + "</p></section>";
    html += '<section class="caja caja-truco"><h2>🧠 Truco para recordar</h2><p>' + esc(u.truco) + "</p></section>";
    html += "</div>";

    html += '<div class="cierre-unidad">';
    html += '<button class="btn btn-primario btn-grande" data-nav="test" data-param="' + u.id + '">¡Ponte a prueba! →</button>';
    html += "</div>";

    main.innerHTML = html;

    document.getElementById("btn-voz")?.addEventListener("click", function () {
      hablar(u.titulo + ". " + u.resumen.join(" "));
    });
    montarAudio(u);

    main.querySelectorAll(".tarjeta-vocab").forEach(function (t) {
      t.addEventListener("click", function () { t.classList.toggle("girada"); });
    });

    pintarStats();
  }

  /* ---------- motor de test ---------- */
  function prepararPregunta(p) {
    const copia = { qid: p.qid, unidadId: p.unidadId, tipo: p.tipo, q: p.q, explica: p.explica };
    if (p.tipo === "opcion") {
      const pares = p.opciones.map(function (o, i) { return { o: o, ok: i === p.correcta }; });
      const mezcla = barajar(pares);
      copia.opciones = mezcla.map(function (x) { return x.o; });
      copia.correcta = mezcla.findIndex(function (x) { return x.ok; });
    } else if (p.tipo === "vf") {
      copia.opciones = ["Verdadero", "Falso"];
      copia.correcta = p.correcta ? 0 : 1;
    } else {
      copia.respuestas = p.respuestas.map(normalizar);
    }
    return copia;
  }

  function iniciarTest(unidadId) {
    const u = getUnidad(unidadId);
    if (!u) { renderInicio(); return; }
    sesion = {
      tipo: "unidad", unidadId: unidadId, titulo: u.titulo,
      preguntas: barajar(u.preguntas).map(prepararPregunta),
      idx: 0, aciertos: 0, respuestas: [], contestada: false, seleccion: null, examen: false
    };
    renderQuiz();
  }

  function iniciarExamen() {
    const unaPorUnidad = UNIDADES.map(function (u) {
      return prepararPregunta(u.preguntas[Math.floor(Math.random() * u.preguntas.length)]);
    });
    const resto = barajar(TODAS.filter(function (p) {
      return !unaPorUnidad.some(function (x) { return x.qid === p.qid; });
    })).slice(0, 5).map(prepararPregunta);
    sesion = {
      tipo: "examen", unidadId: null, titulo: "Examen final",
      preguntas: barajar(unaPorUnidad.concat(resto)),
      idx: 0, aciertos: 0, respuestas: [], contestada: false, seleccion: null, examen: true
    };
    renderQuiz();
  }

  function iniciarRepaso() {
    const fallos = Object.keys(estado.fallos)
      .filter(function (k) { return estado.fallos[k] > 0; })
      .sort(function (a, b) { return estado.fallos[b] - estado.fallos[a]; });
    let elegidas = [];
    fallos.forEach(function (qid) {
      const p = TODAS.find(function (x) { return x.qid === qid; });
      if (p) elegidas.push(p);
    });
    elegidas = elegidas.slice(0, 15);
    if (elegidas.length < 8) {
      const usadas = elegidas.map(function (p) { return p.qid; });
      const extra = barajar(TODAS.filter(function (p) { return usadas.indexOf(p.qid) === -1; }))
        .slice(0, 8 - elegidas.length);
      elegidas = elegidas.concat(extra);
    }
    if (!elegidas.length) { toast("¡No tienes fallos pendientes!"); renderInicio(); return; }
    sesion = {
      tipo: "repaso", unidadId: null, titulo: "Repaso de fallos",
      preguntas: barajar(elegidas).map(prepararPregunta),
      idx: 0, aciertos: 0, respuestas: [], contestada: false, seleccion: null, examen: false
    };
    renderQuiz();
  }


  /* ---------- simulacro de examen ---------- */
  function iniciarSimulacro() {
    const porUnidad = UNIDADES.map(function (u) {
      return barajar(u.preguntas).slice(0, 2);
    });
    const usadas = {};
    porUnidad.forEach(function (arr) { arr.forEach(function (p) { usadas[p.qid] = 1; }); });
    const extra = barajar(TODAS.filter(function (p) { return !usadas[p.qid]; })).slice(0, 10);
    const preguntas = barajar(porUnidad.reduce(function (a, b) { return a.concat(b); }, []).concat(extra))
      .map(prepararPregunta);
    simulacro = {
      preguntas: preguntas,
      respuestas: new Array(preguntas.length).fill(null),
      marcadas: {},
      idx: 0,
      inicio: Date.now(),
      duracion: 45 * 60,
      terminado: false
    };
    renderSimulacro();
    arrancarTimer();
  }

  function detenerTimerSim() {
    if (timerSim) { clearInterval(timerSim); timerSim = null; }
  }

  function fmtReloj(s) {
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return m + ":" + (ss < 10 ? "0" : "") + ss;
  }

  function restanteSim() {
    if (!simulacro) return 0;
    return Math.max(0, simulacro.duracion - Math.floor((Date.now() - simulacro.inicio) / 1000));
  }

  function actualizarReloj() {
    const el = document.getElementById("sim-timer");
    if (!el || !simulacro) return;
    const rest = restanteSim();
    el.textContent = fmtReloj(rest);
    el.classList.toggle("urgente", rest <= 300);
  }

  function arrancarTimer() {
    detenerTimerSim();
    actualizarReloj();
    timerSim = setInterval(function () {
      if (!simulacro || simulacro.terminado) { detenerTimerSim(); return; }
      actualizarReloj();
      if (restanteSim() <= 0) finalizarSimulacro(true);
    }, 1000);
  }

  function respondidasSim() {
    if (!simulacro) return 0;
    return simulacro.respuestas.filter(function (r) { return r !== null && r !== ""; }).length;
  }

  function actualizarSim() {
    if (!simulacro) return;
    const total = simulacro.preguntas.length;
    const n = respondidasSim();
    const cont = document.getElementById("sim-contador");
    if (cont) cont.textContent = "Pregunta " + (simulacro.idx + 1) + " de " + total + " · " + n + " respondidas";
    const barra = document.getElementById("sim-barra");
    if (barra) barra.style.width = Math.round((n / total) * 100) + "%";
    const pend = document.getElementById("sim-pendientes");
    if (pend) pend.textContent = n === total ? "Has respondido todas las preguntas." : "Quedan " + (total - n) + " sin responder.";
    const paleta = document.getElementById("sim-paleta");
    if (paleta) {
      paleta.querySelectorAll("[data-ir]").forEach(function (b) {
        const i = Number(b.getAttribute("data-ir"));
        b.classList.toggle("ok", simulacro.respuestas[i] !== null && simulacro.respuestas[i] !== "");
        b.classList.toggle("actual", i === simulacro.idx);
        b.classList.toggle("marcada", !!simulacro.marcadas[i]);
        if (i === simulacro.idx) b.setAttribute("aria-current", "true");
        else b.removeAttribute("aria-current");
      });
    }
  }

  function renderSimulacro() {
    if (!simulacro) { renderInicio(); return; }
    detenerVoz();
    const total = simulacro.preguntas.length;
    const i = simulacro.idx;
    const p = simulacro.preguntas[i];
    const u = getUnidad(p.unidadId);
    const dada = simulacro.respuestas[i];
    const marcada = !!simulacro.marcadas[i];

    let html = '<div class="sim-wrap">';
    html += '<div class="sim-cab">';
    html += '<button class="btn-volver" id="sim-salir" type="button">← Salir</button>';
    html += '<div class="sim-info"><strong>Simulacro de examen</strong><span id="sim-contador">Pregunta ' + (i + 1) + " de " + total + "</span></div>";
    html += '<div class="sim-reloj" id="sim-timer" aria-label="Tiempo restante">' + fmtReloj(restanteSim()) + "</div>";
    html += "</div>";
    html += '<div class="barra-progreso" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span id="sim-barra" style="width:' + Math.round((respondidasSim() / total) * 100) + '%"></span></div>';

    html += '<div class="sim-cuerpo"><section class="pregunta">';
    html += '<p class="tipo">Pregunta ' + (i + 1) + " de " + total + " · Unidad " + u.numero + "</p>";
    html += '<h1 class="enunciado">' + pintarEnunciado(p.q) + "</h1>";

    if (p.tipo === "completar") {
      html += '<form class="form-resp" id="sim-form" autocomplete="off">';
      html += '<label class="sr-only" for="sim-resp">Escribe tu respuesta</label>';
      html += '<input id="sim-resp" class="input-resp" type="text" placeholder="Escribe aquí…" value="' + esc(dada || "") + '">';
      html += '<button class="btn btn-secundario" type="submit">Guardar</button>';
      html += "</form>";
    } else {
      html += '<div class="opciones' + (p.tipo === "vf" ? " opciones-vf" : "") + '">';
      p.opciones.forEach(function (o, k) {
        const sel = String(dada) === String(k);
        html += '<button class="opcion' + (sel ? " sel" : "") + '" type="button" data-op="' + k + '" aria-pressed="' + sel + '">';
        if (p.tipo === "vf") html += '<span class="vf-icono" aria-hidden="true">' + (k === 0 ? "✔️" : "❌") + "</span>";
        else html += '<span class="opcion-letra">' + "ABCD"[k] + "</span>";
        html += "<span>" + esc(o) + "</span></button>";
      });
      html += "</div>";
    }

    html += '<div class="sim-nav">';
    html += '<button class="btn btn-secundario" id="sim-prev" type="button"' + (i === 0 ? " disabled" : "") + ">← Anterior</button>";
    html += '<button class="btn btn-secundario' + (marcada ? " marcada" : "") + '" id="sim-marcar" type="button" aria-pressed="' + marcada + '">' + (marcada ? "🔖 Marcada" : "🔖 Marcar") + "</button>";
    html += '<button class="btn btn-primario" id="sim-next" type="button">' + (i === total - 1 ? "Ir al final" : "Siguiente →") + "</button>";
    html += "</div></section>";

    html += '<aside class="sim-panel"><h2>Preguntas</h2>';
    html += '<div class="sim-paleta" id="sim-paleta">';
    for (let k = 0; k < total; k++) {
      const resp = simulacro.respuestas[k] !== null && simulacro.respuestas[k] !== "";
      html += '<button type="button" class="sim-num' + (resp ? " ok" : "") + (k === i ? " actual" : "") +
        (simulacro.marcadas[k] ? " marcada" : "") + '" data-ir="' + k + '" aria-label="Ir a la pregunta ' + (k + 1) + '">' + (k + 1) + "</button>";
    }
    html += "</div>";
    html += '<p class="sim-leyenda"><span class="punto ok"></span> respondida · <span class="punto marcada"></span> marcada</p>';
    html += '<button class="btn btn-primario btn-grande" id="sim-entregar" type="button">Entregar examen</button>';
    html += '<p class="mini" id="sim-pendientes"></p>';
    html += "</aside></div></div>";

    main.innerHTML = html;
    actualizarSim();

    document.getElementById("sim-salir").addEventListener("click", salirSimulacro);

    main.querySelectorAll("[data-op]").forEach(function (b) {
      b.addEventListener("click", function () {
        simulacro.respuestas[i] = Number(b.getAttribute("data-op"));
        main.querySelectorAll("[data-op]").forEach(function (o) {
          o.classList.remove("sel");
          o.setAttribute("aria-pressed", "false");
        });
        b.classList.add("sel");
        b.setAttribute("aria-pressed", "true");
        actualizarSim();
      });
    });

    const form = document.getElementById("sim-form");
    if (form) {
      const input = document.getElementById("sim-resp");
      input.addEventListener("input", function () {
        simulacro.respuestas[i] = input.value;
        actualizarSim();
      });
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        simulacro.respuestas[i] = input.value;
        actualizarSim();
        toast("Respuesta guardada");
      });
    }

    document.getElementById("sim-prev").addEventListener("click", function () {
      if (simulacro.idx > 0) { simulacro.idx--; renderSimulacro(); }
    });
    document.getElementById("sim-next").addEventListener("click", function () {
      if (simulacro.idx < total - 1) { simulacro.idx++; renderSimulacro(); }
      else toast("Puedes entregar el examen cuando quieras.");
    });
    document.getElementById("sim-marcar").addEventListener("click", function () {
      simulacro.marcadas[i] = !simulacro.marcadas[i];
      renderSimulacro();
    });
    main.querySelectorAll("[data-ir]").forEach(function (b) {
      b.addEventListener("click", function () {
        simulacro.idx = Number(b.getAttribute("data-ir"));
        renderSimulacro();
      });
    });
    document.getElementById("sim-entregar").addEventListener("click", function () { entregarSimulacro(false); });
  }

  function salirSimulacro() {
    if (!simulacro) { renderInicio(); return; }
    if (!confirm("¿Salir del simulacro? Perderás las respuestas de esta ronda.")) return;
    detenerTimerSim();
    simulacro = null;
    renderInicio();
  }

  function entregarSimulacro(auto) {
    if (!simulacro || simulacro.terminado) return;
    const total = simulacro.preguntas.length;
    const sinResponder = total - respondidasSim();
    if (!auto && sinResponder > 0) {
      if (!confirm("Quedan " + sinResponder + " preguntas sin responder. ¿Entregar igualmente?")) return;
    }
    finalizarSimulacro(auto);
  }

  function corregirSim(p, dada) {
    if (dada === null || dada === "" || typeof dada === "undefined") return false;
    if (p.tipo === "completar") return p.respuestas.indexOf(normalizar(dada)) !== -1;
    return Number(dada) === p.correcta;
  }

  function finalizarSimulacro(auto) {
    if (!simulacro || simulacro.terminado) return;
    simulacro.terminado = true;
    detenerTimerSim();

    const total = simulacro.preguntas.length;
    const detalle = simulacro.preguntas.map(function (p, k) {
      return { p: p, dada: simulacro.respuestas[k], ok: corregirSim(p, simulacro.respuestas[k]) };
    });
    const aciertos = detalle.filter(function (x) { return x.ok; }).length;
    const nota = Math.round((aciertos / total) * 100) / 10;
    const pct = Math.round((aciertos / total) * 100);
    const usado = Math.min(simulacro.duracion, Math.floor((Date.now() - simulacro.inicio) / 1000));
    const xp = aciertos * 5 + (nota >= 8 ? 50 : nota >= 5 ? 20 : 0);

    estado.xp += xp;
    const hoy = hoyISO();
    if (estado.racha.ultima !== hoy) {
      const ayer = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      estado.racha.dias = estado.racha.ultima === ayer ? (estado.racha.dias || 0) + 1 : 1;
      estado.racha.ultima = hoy;
    }
    estado.historial.unshift({ fecha: hoy, titulo: "Simulacro de examen", aciertos: aciertos, total: total, pct: pct });
    estado.historial = estado.historial.slice(0, 40);
    guardar();

    ultimoSimulacro = {
      total: total, aciertos: aciertos, nota: nota, pct: pct, xp: xp,
      aprobado: nota >= 5, tiempo: usado, auto: !!auto, detalle: detalle
    };
    simulacro = null;
    renderResultadoSimulacro();
  }

  function renderResultadoSimulacro() {
    const r = ultimoSimulacro;
    if (!r) { renderInicio(); return; }
    pintarStats();
    if (r.nota >= 8) confeti();
    detenerVoz();

    const notaTxt = r.nota.toFixed(1).replace(".", ",");

    let html = '<section class="resultado sim-resultado' + (r.aprobado ? " aprobado" : " suspenso") + '">';
    html += '<div class="resultado-emoji" aria-hidden="true">' + (r.aprobado ? "🎓" : r.nota >= 4 ? "📘" : "📚") + "</div>";
    html += '<p class="resultado-meta">Simulacro de examen · ' + r.total + " preguntas · 45 min</p>";
    html += "<h1>" + (r.aprobado ? "¡Aprobado!" : r.nota >= 4 ? "Casi lo tienes" : "Hay que repasar") + "</h1>";
    html += '<p class="lead">' + (r.auto
      ? "Se acabó el tiempo. "
      : "") + (r.aprobado
      ? "Tienes la base bien asentada. Repasa las unidades flojas para subir nota."
      : r.nota >= 4
        ? "Con 5 o más se aprueba. Mira las unidades marcadas y vuelve a intentarlo."
        : "No pasa nada: empieza por las unidades en rojo, repasa su test y vuelve a probar.") + "</p>";
    html += '<div class="resultado-cifras">';
    html += '<div class="cifra cifra-nota"><strong>' + notaTxt + '</strong><span>nota sobre 10</span></div>';
    html += '<div class="cifra"><strong>' + r.aciertos + "/" + r.total + "</strong><span>aciertos</span></div>";
    html += '<div class="cifra"><strong>' + fmtReloj(r.tiempo) + "</strong><span>tiempo usado</span></div>";
    html += "</div>";
    html += '<p class="sim-estado ' + (r.aprobado ? "ok" : "ko") + '">' + (r.aprobado ? "✅ Aprobado" : "❌ Suspenso") + " · +" + r.xp + " XP</p>";
    html += "</section>";

    const porUnidad = {};
    r.detalle.forEach(function (x) {
      const k = x.p.unidadId;
      if (!porUnidad[k]) porUnidad[k] = { ok: 0, total: 0 };
      porUnidad[k].total++;
      if (x.ok) porUnidad[k].ok++;
    });

    html += '<section class="bloque"><h2>Resultado por unidad</h2><div class="sim-unidades">';
    UNIDADES.forEach(function (u) {
      const d = porUnidad[u.id];
      if (!d) return;
      const bien = d.ok === d.total;
      const regular = d.ok > 0 && d.ok < d.total;
      html += '<div class="sim-fila ' + (bien ? "bien" : regular ? "regular" : "mal") + '">' +
        '<span class="sim-fila-emoji" aria-hidden="true">' + u.emoji + "</span>" +
        '<span class="sim-fila-titulo">' + u.numero + ". " + esc(u.titulo) + "</span>" +
        '<b>' + d.ok + "/" + d.total + "</b></div>";
    });
    html += "</div></section>";

    const fallos = r.detalle.filter(function (x) { return !x.ok; });
    if (fallos.length) {
      html += '<section class="bloque"><details class="revision-caja"' + (fallos.length <= 8 ? " open" : "") + ">";
      html += "<summary>Repasa las " + fallos.length + " preguntas falladas</summary><div class=\"revision\">";
      fallos.forEach(function (x) {
        const p = x.p;
        const correcta = p.tipo === "completar" ? p.respuestas[0] : p.opciones[p.correcta];
        const dada = (x.dada === null || x.dada === "") ? "sin responder" : (p.tipo === "completar" ? x.dada : p.opciones[Number(x.dada)]);
        html += '<article class="rev-item">';
        html += '<p class="rev-q">' + pintarEnunciado(p.q) + "</p>";
        html += '<p class="rev-mal">Tu respuesta: <del>' + esc(dada) + "</del></p>";
        html += '<p class="rev-bien">Correcta: <b>' + esc(correcta) + "</b></p>";
        html += '<p class="rev-exp">' + esc(p.explica) + "</p>";
        html += "</article>";
      });
      html += "</div></details></section>";
    } else {
      html += '<section class="bloque"><div class="caja caja-curio"><h2>🌟 10 sobre 10</h2><p>No has fallado ninguna. ¡Enhorabuena!</p></div></section>';
    }

    html += '<div class="acciones-final">';
    html += '<button class="btn btn-primario" data-nav="simulacro">🔁 Repetir simulacro</button>';
    if (Object.keys(estado.fallos).length) html += '<button class="btn btn-secundario" data-nav="repaso">🎯 Repasar fallos</button>';
    html += '<button class="btn btn-secundario" data-nav="inicio">🏠 Inicio</button>';
    html += "</div>";

    main.innerHTML = html;
    pintarStats();
  }

  function renderQuiz() {
    if (!sesion) { renderInicio(); return; }
    if (sesion.idx >= sesion.preguntas.length) { finalizar(); return; }
    detenerVoz();

    const total = sesion.preguntas.length;
    const p = sesion.preguntas[sesion.idx];
    const u = getUnidad(p.unidadId);
    const pct = Math.round((sesion.idx / total) * 100);

    let html = '<div class="test-wrap">';
    html += '<div class="test-cab">';
    html += '<button class="btn-volver" id="btn-salir">← Salir</button>';
    html += '<div class="test-info"><strong>' + esc(sesion.titulo) + "</strong>";
    html += "<span>Pregunta " + (sesion.idx + 1) + " de " + total + " · " + sesion.aciertos + " aciertos</span></div>";
    html += '<span class="test-badge">' + (u ? u.emoji : "🏆") + "</span>";
    html += "</div>";
    html += '<div class="barra-progreso" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + pct + '%"></span></div>';

    html += '<section class="pregunta">';
    html += '<p class="tipo">' + (p.tipo === "completar" ? "Completa la frase" : p.tipo === "vf" ? "Verdadero o falso" : "Elige la respuesta correcta") + "</p>";
    html += '<h1 class="enunciado">' + pintarEnunciado(p.q) + "</h1>";

    if (p.tipo === "completar") {
      const valor = sesion.seleccion != null ? esc(sesion.seleccion) : "";
      html += '<form id="form-resp" class="form-resp" autocomplete="off">';
      html += '<label class="sr-only" for="resp">Escribe tu respuesta</label>';
      html += '<input id="resp" name="resp" class="input-resp" type="text" placeholder="Escribe aquí…" value="' + valor + '" ' + (sesion.contestada ? "disabled" : "") + ">";
      html += '<button class="btn btn-primario" type="submit" ' + (sesion.contestada ? "disabled" : "") + ">Comprobar</button>";
      html += "</form>";
    } else {
      html += '<div class="opciones' + (p.tipo === "vf" ? " opciones-vf" : "") + '">';
      p.opciones.forEach(function (o, i) {
        let clase = "opcion";
        if (sesion.contestada) {
          if (!sesion.examen) {
            if (i === p.correcta) clase += " correcta";
            else if (i === sesion.seleccion) clase += " incorrecta";
          } else if (i === sesion.seleccion) {
            clase += " elegida";
          }
          clase += " bloqueada";
        }
        html += '<button class="' + clase + '" data-op="' + i + '" ' + (sesion.contestada ? "disabled" : "") + ">";
        if (p.tipo === "vf") html += '<span class="vf-icono">' + (i === 0 ? "✔️" : "❌") + "</span>";
        else html += '<span class="opcion-letra">' + "ABCD"[i] + "</span>";
        html += "<span>" + esc(o) + "</span></button>";
      });
      html += "</div>";
    }

    if (sesion.contestada) {
      const r = sesion.respuestas[sesion.respuestas.length - 1];
      if (sesion.examen) {
        html += '<div class="feedback neutro"><strong>Respuesta guardada ✅</strong><p>Verás la corrección al terminar el examen.</p></div>';
      } else if (r.ok) {
        html += '<div class="feedback ok"><strong>¡Correcto! 🎉</strong><p>' + esc(p.explica) + "</p></div>";
      } else {
        const correcta = p.tipo === "completar" ? p.respuestas[0] : p.opciones[p.correcta];
        html += '<div class="feedback ko"><strong>Casi… ❌</strong><p>La respuesta correcta es <b>' + esc(correcta) + "</b>. " + esc(p.explica) + "</p></div>";
      }
      html += '<div class="acciones-test"><button class="btn btn-primario btn-grande" id="btn-siguiente">' +
        (sesion.idx + 1 === total ? "Ver resultados" : "Siguiente pregunta") + " →</button></div>";
    } else {
      html += '<p class="ayuda">' + (p.tipo === "completar" ? "Escribe una palabra. No importan las mayúsculas ni los acentos." : "Toca una opción para responder.") + "</p>";
    }
    html += "</section></div>";

    main.innerHTML = html;

    document.getElementById("btn-salir").addEventListener("click", salirTest);

    if (p.tipo === "completar" && !sesion.contestada) {
      const form = document.getElementById("form-resp");
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        const v = document.getElementById("resp").value.trim();
        if (!v) { toast("Escribe una respuesta."); return; }
        responder(v);
      });
      document.getElementById("resp").focus();
    }

    main.querySelectorAll("[data-op]").forEach(function (b) {
      b.addEventListener("click", function () { responder(Number(b.dataset.op)); });
    });

    const sig = document.getElementById("btn-siguiente");
    if (sig) {
      sig.addEventListener("click", siguiente);
      if (p.tipo !== "completar") sig.focus({ preventScroll: true });
    }
  }

  function pintarEnunciado(q) {
    return esc(q).replace(/___/g, '<span class="hueco" aria-label="hueco"></span>');
  }

  function responder(valor) {
    if (!sesion || sesion.contestada) return;
    const p = sesion.preguntas[sesion.idx];
    let ok;
    if (p.tipo === "completar") ok = p.respuestas.indexOf(normalizar(valor)) !== -1;
    else ok = Number(valor) === p.correcta;

    sesion.contestada = true;
    sesion.seleccion = valor;
    if (ok) sesion.aciertos++;
    sesion.respuestas.push({ p: p, dada: valor, ok: ok });

    if (!ok) estado.fallos[p.qid] = (estado.fallos[p.qid] || 0) + 1;
    else if (estado.fallos[p.qid]) {
      estado.fallos[p.qid] = Math.max(0, estado.fallos[p.qid] - 1);
      if (estado.fallos[p.qid] === 0) delete estado.fallos[p.qid];
    }
    guardar();
    renderQuiz();
  }

  function siguiente() {
    if (!sesion) return;
    sesion.idx++;
    sesion.contestada = false;
    sesion.seleccion = null;
    if (sesion.idx >= sesion.preguntas.length) finalizar();
    else renderQuiz();
  }

  function salirTest() {
    if (sesion && sesion.idx > 0 && !sesion.terminado) {
      if (!confirm("¿Salir del test? Perderás las respuestas de esta ronda.")) return;
    }
    const id = sesion && sesion.unidadId;
    sesion = null;
    if (id) renderUnidad(id); else renderInicio();
  }

  /* ---------- resultados ---------- */
  function finalizar() {
    if (!sesion) { renderInicio(); return; }
    sesion.terminado = true;
    const total = sesion.preguntas.length;
    const pct = Math.round((sesion.aciertos / total) * 100);
    const n = estrellas(pct);
    const xpGanada = sesion.aciertos * 8 + (pct >= 90 ? 40 : pct >= 80 ? 25 : pct >= 50 ? 10 : 0);

    estado.xp += xpGanada;

    // racha diaria
    const hoy = hoyISO();
    if (estado.racha.ultima !== hoy) {
      const ayer = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      estado.racha.dias = estado.racha.ultima === ayer ? (estado.racha.dias || 0) + 1 : 1;
      estado.racha.ultima = hoy;
    }

    // dominio por unidad
    if (sesion.tipo === "unidad") {
      const prev = estado.unidades[sesion.unidadId] || { mejor: 0, intentos: 0 };
      estado.unidades[sesion.unidadId] = {
        mejor: Math.max(prev.mejor || 0, pct),
        intentos: (prev.intentos || 0) + 1,
        ultima: hoy
      };
    }

    estado.historial.unshift({ fecha: hoy, titulo: sesion.titulo, aciertos: sesion.aciertos, total: total, pct: pct });
    estado.historial = estado.historial.slice(0, 40);

    ultimoResultado = {
      tipo: sesion.tipo, unidadId: sesion.unidadId, titulo: sesion.titulo,
      aciertos: sesion.aciertos, total: total, pct: pct, estrellas: n,
      xp: xpGanada, respuestas: sesion.respuestas.slice()
    };
    sesion = null;
    guardar();
    renderResultado();
  }

  function renderResultado() {
    const r = ultimoResultado;
    if (!r) { renderInicio(); return; }
    pintarStats();
    if (r.pct >= 90) confeti();
    hablarCancelado();

    const mensajes = r.pct >= 90 ? ["¡Impecable! 🌟", "Dominas esta unidad. ¡A por la siguiente!"] :
      r.pct >= 70 ? ["¡Muy bien! 👏", "Ya casi lo tienes. Repasa lo fallado y repite."] :
      r.pct >= 50 ? ["Vas por buen camino 💪", "Lee otra vez las ideas clave y vuelve a intentarlo."] :
      ["¡Toca repasar! 📚", "No pasa nada: lee el resumen y usa las tarjetas antes de repetir."];

    let html = '<section class="resultado">';
    html += '<div class="resultado-emoji" aria-hidden="true">' + (r.pct >= 90 ? "🏆" : r.pct >= 70 ? "🎉" : r.pct >= 50 ? "💪" : "📚") + "</div>";
    html += '<p class="resultado-meta">' + esc(r.titulo) + "</p>";
    html += "<h1>" + mensajes[0] + "</h1>";
    html += '<p class="lead">' + mensajes[1] + "</p>";
    html += '<div class="resultado-cifras">';
    html += '<div class="cifra"><strong>' + r.aciertos + "/" + r.total + "</strong><span>aciertos</span></div>";
    html += '<div class="cifra"><strong>' + r.pct + '%</strong><span>resultado</span></div>';
    html += '<div class="cifra"><strong>+' + r.xp + "</strong><span>XP ganados</span></div>";
    html += "</div>";
    html += '<div class="resultado-estrellas">' + estrellasHTML(r.estrellas) + "</div>";
    html += "</section>";

    const falladas = r.respuestas.filter(function (x) { return !x.ok; });
    if (falladas.length) {
      html += '<section class="bloque"><h2>Repasa estas ' + falladas.length + " preguntas</h2><div class=\"revision\">";
      falladas.forEach(function (x) {
        const p = x.p;
        const correcta = p.tipo === "completar" ? p.respuestas[0] : p.opciones[p.correcta];
        const dada = p.tipo === "completar" ? x.dada : p.opciones[x.dada];
        html += '<article class="rev-item">';
        html += '<p class="rev-q">' + pintarEnunciado(p.q) + "</p>";
        html += '<p class="rev-mal">Tu respuesta: <del>' + esc(dada) + "</del></p>";
        html += '<p class="rev-bien">Correcta: <b>' + esc(correcta) + "</b></p>";
        html += '<p class="rev-exp">' + esc(p.explica) + "</p>";
        html += "</article>";
      });
      html += "</div></section>";
    } else {
      html += '<section class="bloque"><div class="caja caja-curio"><h2>🌟 Pleno al 100 %</h2><p>No has fallado ninguna pregunta. ¡Sigue así!</p></div></section>';
    }

    html += '<div class="acciones-final">';
    if (r.tipo === "unidad") {
      html += '<button class="btn btn-primario" data-nav="test" data-param="' + r.unidadId + '">🔁 Repetir el test</button>';
      html += '<button class="btn btn-secundario" data-nav="unidad" data-param="' + r.unidadId + '">📖 Volver a la unidad</button>';
    } else {
      html += '<button class="btn btn-primario" data-nav="repaso">🎯 Repasar fallos</button>';
      html += '<button class="btn btn-secundario" data-nav="inicio">🏠 Ir a las unidades</button>';
    }
    html += "</div>";

    main.innerHTML = html;
    pintarStats();
  }

  function hablarCancelado() {
    if (hablando && "speechSynthesis" in window) { speechSynthesis.cancel(); hablando = false; }
  }
  function detenerVoz() { hablarCancelado(); detenerAudio(); }

  /* ---------- vista: progreso ---------- */
  function renderProgreso() {
    detenerVoz();
    const nv = nivel();
    const pctNivel = Math.min(100, Math.round((estado.xp % 150) / 150 * 100));
    const pendientes = Object.keys(estado.fallos).filter(function (k) { return estado.fallos[k] > 0; }).length;

    let html = '<div class="migas"><button class="btn-volver" data-nav="inicio">← Todas las unidades</button></div>';
    html += '<header class="cab-progreso"><h1>Mi progreso</h1><p class="lead">Todo se guarda en este navegador. Si estudias un poco cada día, la racha crece.</p></header>';

    html += '<section class="panel-nivel">';
    html += '<div class="nivel-insignia">' + (nv.n >= 4 ? "🏅" : nv.n >= 3 ? "🔬" : nv.n >= 2 ? "🧭" : "🌱") + "</div>";
    html += '<div class="nivel-info"><span class="etiqueta">Nivel ' + nv.n + " · " + nv.titulo + "</span>";
    html += '<div class="barra-nivel"><span style="width:' + pctNivel + '%"></span></div>';
    html += '<p class="mini">' + estado.xp + " XP · te faltan " + (nv.siguiente - estado.xp) + " XP para el nivel " + (nv.n + 1) + "</p></div>";
    html += '<div class="nivel-datos"><div><strong>' + (estado.racha.dias || 0) + "</strong><span>días de racha</span></div>";
    html += '<div><strong>' + estado.historial.length + "</strong><span>tests</span></div></div>";
    html += "</section>";

    if (pendientes) {
      html += '<div class="aviso"><span>🎯 Tienes ' + pendientes + " pregunta" + (pendientes === 1 ? "" : "s") + " fallada" + (pendientes === 1 ? "" : "s") + " esperando repaso.</span>";
      html += '<button class="btn btn-primario" data-nav="repaso">Repasar ahora</button></div>';
    }

    html += '<section class="bloque"><div class="panel-simulacro"><div>';
    html += '<h2>Simulacro de examen</h2><p class="mini">40 preguntas de las 15 unidades · 45 minutos · nota sobre 10.</p></div>';
    html += '<button class="btn btn-primario" data-nav="simulacro">Empezar simulacro</button></div></section>';

    html += '<section class="bloque"><h2>Dominio por unidad</h2><div class="lista-progreso">';
    UNIDADES.forEach(function (u) {
      const pct = progresoUnidad(u);
      const d = estado.unidades[u.id] || {};
      html += '<button class="fila-progreso" data-nav="unidad" data-param="' + u.id + '">';
      html += '<span class="fp-emoji" aria-hidden="true">' + u.emoji + "</span>";
      html += '<span class="fp-texto"><span class="fp-titulo">' + u.numero + ". " + esc(u.titulo) + "</span>";
      html += '<span class="barra-mini"><span style="width:' + pct + '%;background:' + u.color + '"></span></span></span>';
      html += '<span class="fp-datos">' + estrellasHTML(estrellas(pct)) + "<b>" + pct + "%</b><small>" + (d.intentos || 0) + ((d.intentos || 0) === 1 ? " test" : " tests") + "</small></span>";
      html += "</button>";
    });
    html += "</div></section>";

    if (estado.historial.length) {
      html += '<section class="bloque"><h2>Últimos tests</h2><ul class="historial">';
      estado.historial.slice(0, 8).forEach(function (h) {
        const f = h.fecha.split("-").reverse().join("/");
        html += '<li><span>' + esc(h.titulo) + "</span><span class=\"h-fecha\">" + f + "</span><b>" + h.aciertos + "/" + h.total + " · " + h.pct + "%</b></li>";
      });
      html += "</ul></section>";
    }

    if (typeof CREDITOS_IMG !== "undefined") {
      html += '<section class="bloque"><details class="creditos"><summary>Créditos de las imágenes</summary><ul>';
      UNIDADES.forEach(function (u) {
        const c = CREDITOS_IMG[u.id];
        if (!c) return;
        [c].concat(c.galeria || []).forEach(function (f) {
          html += "<li><b>Unidad " + u.numero + ".</b> " + esc(f.autor) + " · " + esc(f.lic) +
            ' · <a href="' + f.pagina + '" target="_blank" rel="noopener">Wikimedia Commons</a></li>';
        });
      });
      html += "</ul><p class=\"mini\">Las fotos se usan con su licencia original; los textos de estudio son propios.</p></details></section>";
    }

    html += '<section class="bloque"><h2>Ajustes</h2><div class="acciones-final">';
    html += '<button class="btn btn-secundario" id="btn-tema-2">Cambiar tema</button>';
    html += '<button class="btn btn-peligro" id="btn-reset">Borrar todo mi progreso</button>';
    html += "</div></section>";

    main.innerHTML = html;
    pintarStats();

    document.getElementById("btn-tema-2").addEventListener("click", alternarTema);
    document.getElementById("btn-reset").addEventListener("click", function () {
      if (confirm("¿Seguro que quieres borrar todos los puntos, estrellas e historial?")) {
        estado = estadoInicial();
        guardar();
        aplicarTema();
        toast("Progreso borrado. ¡Empezamos de cero!");
        renderInicio();
      }
    });
  }

  /* ---------- navegación ---------- */
  function navegar(vista, param) {
    if (simulacro && !simulacro.terminado) {
      if (!confirm("¿Salir del simulacro? Perderás las respuestas de esta ronda.")) return;
    }
    detenerTimerSim();
    simulacro = null;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    if (vista === "inicio") renderInicio();
    else if (vista === "unidad") renderUnidad(param);
    else if (vista === "test") iniciarTest(param);
    else if (vista === "examen") iniciarExamen();
    else if (vista === "repaso") iniciarRepaso();
    else if (vista === "simulacro") iniciarSimulacro();
    else if (vista === "progreso") renderProgreso();
    else renderInicio();
  }

  document.addEventListener("click", function (ev) {
    const el = ev.target.closest("[data-nav]");
    if (!el || el.disabled) return;
    navegar(el.getAttribute("data-nav"), el.getAttribute("data-param"));
  });

  /* visor de imágenes */
  const visor = document.getElementById("visor");
  document.addEventListener("click", function (ev) {
    const b = ev.target.closest(".figura-btn");
    if (!b) return;
    const img = document.getElementById("visor-img");
    img.src = b.getAttribute("data-img");
    img.alt = b.getAttribute("data-alt") || "";
    if (visor && typeof visor.showModal === "function") visor.showModal();
  });
  if (visor) {
    document.getElementById("visor-cerrar").addEventListener("click", function () { visor.close(); });
    visor.addEventListener("click", function (ev) { if (ev.target === visor) visor.close(); });
  }

  document.getElementById("btn-tema").addEventListener("click", alternarTema);

  document.getElementById("btn-borrar").addEventListener("click", function () {
    if (confirm("¿Borrar todo el progreso guardado?")) {
      estado = estadoInicial();
      guardar();
      aplicarTema();
      renderInicio();
    }
  });

  window.addEventListener("beforeunload", function (ev) {
    if (simulacro && !simulacro.terminado) {
      ev.preventDefault();
      ev.returnValue = "";
    }
  });

  /* ---------- arranque ---------- */
  aplicarTema();
  pintarStats();
  renderInicio();
})();
