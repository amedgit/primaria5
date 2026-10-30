/* ============================================================
   CIENCIAS DE LA NATURALEZA · 5º PRIMARIA
   Contenido original de estudio, ordenado según el índice
   oficial de Santillana (15 unidades).
   ============================================================ */

const UNIDADES = [
  {
    id: "u1",
    numero: 1,
    titulo: "La organización del cuerpo humano",
    emoji: "🧬",
    color: "#2f9e8f",
    resumen: [
      "La célula es la unidad más pequeña de los seres vivos capaz de realizar las tres funciones vitales: nutrición, relación y reproducción.",
      "Las células humanas tienen membrana, citoplasma y núcleo, donde está el material genético.",
      "Las células se agrupan en tejidos; los tejidos forman órganos; los órganos se organizan en aparatos y sistemas; y todos juntos forman el organismo.",
      "Los principales tejidos son el epitelial (cubre y protege), el muscular, el nervioso y el conectivo (óseo, sanguíneo, adiposo).",
      "Los aparatos y sistemas trabajan coordinados: el digestivo, el respiratorio, el circulatorio y el excretor realizan la nutrición.",
      "El microscopio fue clave para descubrir las células: Robert Hooke las observó en 1665."
    ],
    vocabulario: [
      { p: "Célula", d: "Unidad más pequeña con vida. Tiene membrana, citoplasma y material genético." },
      { p: "Tejido", d: "Conjunto de células parecidas que realizan la misma función." },
      { p: "Órgano", d: "Conjunto de tejidos que trabajan juntos, como el corazón o el estómago." },
      { p: "Aparato", d: "Conjunto de órganos, a veces de tejidos muy distintos, que realizan una función." },
      { p: "Sistema", d: "Conjunto de órganos formados por tejidos semejantes, como el sistema nervioso." }
    ],
    curiosidad: "Tu cuerpo tiene unas 30 billones de células. Si pudieras ponerlas en fila, darían varias vueltas a la Tierra.",
    truco: "Para ordenar los niveles, piensa en una ciudad: ladrillo (célula) → pared (tejido) → casa (órgano) → barrio (aparato) → ciudad (organismo).",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál es la unidad más pequeña de un ser vivo capaz de realizar las funciones vitales?", opciones: ["El órgano", "La célula", "El tejido", "El átomo"], correcta: 1, explica: "La célula es la unidad básica de la vida." },
      { tipo: "vf", q: "Todos los seres vivos están formados por muchas células.", correcta: false, explica: "No: los seres unicelulares, como las bacterias, tienen una sola célula." },
      { tipo: "opcion", q: "¿Cuál es el orden correcto, de menor a mayor complejidad?", opciones: ["Órgano → célula → tejido → organismo", "Célula → tejido → órgano → organismo", "Tejido → célula → órgano → organismo", "Célula → órgano → tejido → organismo"], correcta: 1, explica: "Células forman tejidos, los tejidos órganos y los órganos aparatos y sistemas." },
      { tipo: "completar", q: "El conjunto de células parecidas que realizan la misma función forma un ___.", respuestas: ["tejido"], explica: "Eso es un tejido, por ejemplo el tejido muscular." },
      { tipo: "opcion", q: "¿Qué función vital permite responder a los cambios del medio?", opciones: ["La nutrición", "La relación", "La reproducción", "La digestión"], correcta: 1, explica: "La función de relación capta estímulos y elabora respuestas." },
      { tipo: "opcion", q: "¿Qué parte de la célula guarda el material genético?", opciones: ["La membrana", "El citoplasma", "El núcleo", "La pared celular"], correcta: 2, explica: "El material genético está en el núcleo." },
      { tipo: "vf", q: "El aparato digestivo y el respiratorio colaboran en la función de nutrición.", correcta: true, explica: "Sí: junto con el circulatorio y el excretor obtienen y transportan nutrientes." },
      { tipo: "completar", q: "El instrumento que permitió descubrir las células fue el ___.", respuestas: ["microscopio"], explica: "Con el microscopio se pudieron ver estructuras invisibles al ojo." }
    ]
  },
  {
    id: "u2",
    numero: 2,
    titulo: "La función de relación. Los sentidos",
    emoji: "👁️",
    color: "#e07a5f",
    resumen: [
      "La función de relación permite captar estímulos del medio, procesarlos y responder. Intervienen los órganos de los sentidos, el sistema nervioso y el aparato locomotor.",
      "El recorrido es: estímulo → receptor → nervios sensitivos → sistema nervioso → nervios motores → respuesta (movimiento o secreción).",
      "La vista: la luz entra por la córnea y la pupila, atraviesa el cristalino y llega a la retina, que envía la información por el nervio óptico.",
      "El oído capta sonidos y también el equilibrio, gracias al caracol y a los conductos semicirculares.",
      "El olfato está en la pituitaria de la nariz; el gusto, en las papilas de la lengua; y el tacto, en la piel, con receptores de presión, temperatura y dolor.",
      "Cuidar los sentidos evita muchas lesiones: no exponerse a ruidos muy fuertes, proteger los ojos y descansar la vista de las pantallas."
    ],
    vocabulario: [
      { p: "Estímulo", d: "Cualquier cambio del medio que un ser vivo puede detectar." },
      { p: "Receptor", d: "Estructura especializada en captar un tipo de estímulo." },
      { p: "Retina", d: "Capa del ojo donde se forma la imagen y se transforma en señales nerviosas." },
      { p: "Tímpano", d: "Membrana del oído que vibra con los sonidos." },
      { p: "Papilas gustativas", d: "Receptores de la lengua que detectan los sabores." }
    ],
    curiosidad: "El ojo distingue unos diez millones de colores distintos, pero en la oscuridad casi todo lo vemos en gris.",
    truco: "Vista: luz → córnea → pupila → cristalino → retina. Imagina la luz como una pelota que atraviesa tres aros.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué parte del ojo recibe la luz y forma la imagen?", opciones: ["El iris", "La retina", "La córnea", "El párpado"], correcta: 1, explica: "La retina transforma la luz en señales nerviosas." },
      { tipo: "completar", q: "El ___ es la membrana del oído que vibra con los sonidos.", respuestas: ["tímpano", "timpano"], explica: "El tímpano transmite la vibración a los huesecillos." },
      { tipo: "vf", q: "El sentido del gusto se encuentra en la piel.", correcta: false, explica: "El gusto está en las papilas de la lengua; en la piel está el tacto." },
      { tipo: "opcion", q: "¿Qué órgano de los sentidos detecta la presión y la temperatura?", opciones: ["La nariz", "La lengua", "La piel", "El oído"], correcta: 2, explica: "La piel tiene receptores de tacto, presión, temperatura y dolor." },
      { tipo: "opcion", q: "Ordena la respuesta: estímulo → receptor → ...", opciones: ["respuesta → nervios", "nervios → sistema nervioso → respuesta", "sistema nervioso → estímulo", "músculo → nervio → estímulo"], correcta: 1, explica: "Los nervios llevan la información al sistema nervioso, que ordena la respuesta." },
      { tipo: "vf", q: "El oído también nos informa sobre el equilibrio del cuerpo.", correcta: true, explica: "Los conductos semicirculares del oído interno participan en el equilibrio." },
      { tipo: "completar", q: "La luz entra en el ojo por la ___ y atraviesa el cristalino.", respuestas: ["pupila"], explica: "La pupila es el orificio del iris que regula la entrada de luz." }
    ]
  },
  {
    id: "u3",
    numero: 3,
    titulo: "El sistema nervioso",
    emoji: "🧠",
    color: "#7c6bd6",
    resumen: [
      "El sistema nervioso recibe información, la procesa, toma decisiones y ordena respuestas.",
      "La neurona es su célula: tiene cuerpo celular, dendritas (reciben) y axón (transmite). Se comunican mediante impulsos nerviosos.",
      "El sistema nervioso central está formado por el encéfalo (cerebro, cerebelo y bulbo raquídeo) y la médula espinal. Está protegido por el cráneo y la columna.",
      "El sistema nervioso periférico son los nervios, que conectan el centro con todo el cuerpo. Los sensitivos llevan información y los motores llevan órdenes.",
      "Los actos voluntarios los decidimos (como escribir); los reflejos son respuestas rápidas e involuntarias (como retirar la mano del fuego).",
      "Dormir bien, usar casco y evitar alcohol y drogas protegen el sistema nervioso."
    ],
    vocabulario: [
      { p: "Neurona", d: "Célula del sistema nervioso que transmite impulsos nerviosos." },
      { p: "Encéfalo", d: "Parte del sistema nervioso central dentro del cráneo: cerebro, cerebelo y bulbo." },
      { p: "Médula espinal", d: "Cordón nervioso protegido por la columna vertebral." },
      { p: "Nervio", d: "Conjunto de axones que conecta el sistema nervioso central con el cuerpo." },
      { p: "Acto reflejo", d: "Respuesta rápida e involuntaria ante un estímulo." }
    ],
    curiosidad: "El cerebro usa cerca del 20 % de la energía del cuerpo, aunque solo pesa unos 1,3 kg.",
    truco: "Central = centro de mando (encéfalo y médula). Periférico = carreteras (nervios).",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál es la célula principal del sistema nervioso?", opciones: ["La neurona", "El glóbulo rojo", "La célula muscular", "La plaqueta"], correcta: 0, explica: "La neurona transmite el impulso nervioso." },
      { tipo: "opcion", q: "¿Qué órganos forman el sistema nervioso central?", opciones: ["Los nervios y los músculos", "El encéfalo y la médula espinal", "El corazón y los pulmones", "El cerebro y los ojos"], correcta: 1, explica: "El encéfalo y la médula espinal son el centro de control." },
      { tipo: "completar", q: "Las prolongaciones de la neurona que reciben información se llaman ___.", respuestas: ["dendritas"], explica: "Las dendritas reciben; el axón transmite." },
      { tipo: "vf", q: "Un acto reflejo es una respuesta voluntaria y lenta.", correcta: false, explica: "Es rápida e involuntaria, como cerrar el ojo ante un destello." },
      { tipo: "opcion", q: "¿Qué parte del encéfalo coordina el equilibrio y los movimientos?", opciones: ["El cerebro", "El cerebelo", "El bulbo raquídeo", "La médula"], correcta: 1, explica: "El cerebelo coordina movimientos y equilibrio." },
      { tipo: "opcion", q: "Los nervios motores...", opciones: ["Llevan información de los sentidos al centro", "Llevan órdenes del centro a los músculos", "Fabrican sangre", "Solo están en la cabeza"], correcta: 1, explica: "Los motores llevan órdenes; los sensitivos, información." },
      { tipo: "vf", q: "El alcohol y las drogas pueden dañar las neuronas.", correcta: true, explica: "Afectan al funcionamiento del sistema nervioso." }
    ]
  },
  {
    id: "u4",
    numero: 4,
    titulo: "El aparato locomotor",
    emoji: "🦴",
    color: "#4d8fbf",
    resumen: [
      "El aparato locomotor está formado por el esqueleto (huesos y articulaciones) y la musculatura. Permite el movimiento, el sostén y la protección de órganos.",
      "Los huesos son duros, ligeros y resistentes; almacenan minerales como el calcio y producen células sanguíneas en la médula ósea.",
      "Los músculos se unen a los huesos mediante tendones. Se contraen y se relajan, y trabajan por parejas antagónicas: uno flexiona y otro extiende.",
      "Las articulaciones son las uniones entre huesos: fijas (cráneo), semimóviles (vértebras) y móviles (rodilla, hombro, codo).",
      "Los músculos voluntarios los controlamos (bíceps); los involuntarios no (corazón, intestino).",
      "Para cuidarlos: calentar antes del deporte, mantener la espalda recta, hacer ejercicio y tomar calcio y vitamina D."
    ],
    vocabulario: [
      { p: "Tendón", d: "Tejido resistente que une el músculo al hueso." },
      { p: "Articulación", d: "Unión entre dos o más huesos que permite o limita el movimiento." },
      { p: "Músculo antagonista", d: "Músculo que realiza el movimiento contrario a otro." },
      { p: "Esguince", d: "Lesión de los ligamentos de una articulación por un giro brusco." },
      { p: "Médula ósea", d: "Interior del hueso donde se producen las células de la sangre." }
    ],
    curiosidad: "El fémur puede soportar más peso que el hormigón de la misma masa: es uno de los materiales naturales más resistentes.",
    truco: "Hueso + músculo + tendón + articulación = palanca perfecta. El hueso es la palanca, el músculo el motor y la articulación el punto de giro.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué une el músculo al hueso?", opciones: ["El ligamento", "El tendón", "El cartílago", "El nervio"], correcta: 1, explica: "El tendón une músculo y hueso; el ligamento une huesos entre sí." },
      { tipo: "completar", q: "La unión entre dos huesos se llama ___.", respuestas: ["articulación", "articulacion"], explica: "Puede ser fija, semimóvil o móvil." },
      { tipo: "vf", q: "Todos los músculos del cuerpo son voluntarios.", correcta: false, explica: "El corazón o el intestino son involuntarios." },
      { tipo: "opcion", q: "¿Qué función NO corresponde al esqueleto?", opciones: ["Sostener el cuerpo", "Proteger órganos", "Producir insulina", "Permitir el movimiento"], correcta: 2, explica: "La insulina la produce el páncreas." },
      { tipo: "opcion", q: "Cuando doblamos el codo, el bíceps se...", opciones: ["relaja y se alarga", "contrae y se acorta", "queda igual", "rompe"], correcta: 1, explica: "El bíceps se contrae y el tríceps se relaja: son antagonistas." },
      { tipo: "vf", q: "Calentar antes de hacer deporte ayuda a prevenir lesiones.", correcta: true, explica: "Prepara músculos y articulaciones." },
      { tipo: "completar", q: "Los huesos almacenan minerales como el ___.", respuestas: ["calcio"], explica: "El calcio da dureza y resistencia a los huesos." }
    ]
  },
  {
    id: "u5",
    numero: 5,
    titulo: "La relación y la salud",
    emoji: "❤️‍🩹",
    color: "#d1495b",
    resumen: [
      "La salud es el estado de bienestar físico, mental y social, no solo la ausencia de enfermedad.",
      "Los sentidos pueden alterarse: miopía e hipermetropía (vista), otitis o pérdida de audición (oído), conjuntivitis, rinitis o caries.",
      "El sistema nervioso también enferma: epilepsia, ictus, alzhéimer o lesiones medulares. Muchas se previenen con hábitos saludables.",
      "Dormir 9-11 horas, moverse cada día, comer variado, cuidar la higiene y limitar las pantallas protege la salud.",
      "Ante un accidente se aplica la conducta P.A.S.: Proteger, Avisar (112) y Socorrer, sin mover a un herido grave.",
      "El tabaco, el alcohol y otras drogas dañan el sistema nervioso y crean dependencia: lo mejor es no empezar."
    ],
    vocabulario: [
      { p: "Salud", d: "Bienestar físico, mental y social." },
      { p: "P.A.S.", d: "Proteger, Avisar y Socorrer: pasos ante una emergencia." },
      { p: "Miopía", d: "Defecto visual que impide ver bien de lejos." },
      { p: "Dependencia", d: "Necesidad física o psíquica de consumir una sustancia." }
    ],
    curiosidad: "El 112 es el número de emergencias en toda Europa y funciona gratis, incluso sin cobertura de tu operador.",
    truco: "P.A.S. = Primero Protejo, Aviso y luego Socorro. Nunca al revés.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué significa P.A.S.?", opciones: ["Proteger, Avisar, Socorrer", "Parar, Andar, Saltar", "Peligro, Alarma, Salida", "Primero Auxiliar Siempre"], correcta: 0, explica: "Es el orden de actuación ante una emergencia." },
      { tipo: "completar", q: "El teléfono europeo de emergencias es el ___.", respuestas: ["112"], explica: "Es gratuito y funciona las 24 horas." },
      { tipo: "opcion", q: "La miopía consiste en...", opciones: ["ver mal de cerca", "ver mal de lejos", "no distinguir colores", "no oír bien"], correcta: 1, explica: "El miope ve borroso de lejos." },
      { tipo: "vf", q: "La salud solo depende de no tener enfermedades.", correcta: false, explica: "También importan el bienestar mental y social." },
      { tipo: "opcion", q: "Ante una persona inconsciente que no respira, debes...", opciones: ["darle agua", "llamar al 112 y seguir sus instrucciones", "moverla rápido", "dejarla sola"], correcta: 1, explica: "Avisar al 112 es prioritario; ellos guían la actuación." },
      { tipo: "vf", q: "Dormir lo suficiente ayuda a mantener sano el sistema nervioso.", correcta: true, explica: "El sueño permite recuperar y organizar la información." },
      { tipo: "completar", q: "El consumo de ___ puede crear dependencia y dañar el cerebro.", respuestas: ["alcohol", "tabaco", "drogas"], explica: "Todas estas sustancias afectan al sistema nervioso." }
    ]
  },
  {
    id: "u6",
    numero: 6,
    titulo: "La importancia de la fotosíntesis",
    emoji: "🌿",
    color: "#4f9d47",
    resumen: [
      "Las plantas son seres vivos autótrofos: fabrican su propio alimento mediante la fotosíntesis.",
      "La fotosíntesis ocurre en las hojas, en los cloroplastos, gracias a la clorofila (pigmento verde).",
      "Fórmula sencilla: agua + dióxido de carbono + luz solar → materia orgánica (glucosa) + oxígeno.",
      "La raíz absorbe agua y minerales (savia bruta); el tallo la transporta; la hoja fabrica la savia elaborada, que reparte el alimento.",
      "Las plantas también respiran día y noche: consumen oxígeno y liberan dióxido de carbono para obtener energía.",
      "Su importancia es enorme: producen el oxígeno que respiramos, son la base de las cadenas alimentarias y regulan el clima. Incendios y deforestación las destruyen."
    ],
    vocabulario: [
      { p: "Fotosíntesis", d: "Proceso por el que las plantas fabrican materia orgánica usando luz, agua y CO₂." },
      { p: "Clorofila", d: "Pigmento verde que capta la luz en los cloroplastos." },
      { p: "Savia bruta", d: "Agua con minerales que sube desde la raíz." },
      { p: "Savia elaborada", d: "Alimento fabricado en las hojas que se reparte por la planta." },
      { p: "Estoma", d: "Pequeño poro de la hoja por donde entran y salen gases." }
    ],
    curiosidad: "Una sola planta de maíz puede producir en un día el oxígeno que necesita una persona durante varias horas.",
    truco: "Fotosíntesis = FOTO (luz) + SÍNTESIS (fabricar). Entra CO₂ y agua, sale alimento y O₂.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué necesita una planta para hacer la fotosíntesis?", opciones: ["Agua, CO₂ y luz", "Oxígeno y oscuridad", "Solo tierra", "Solo agua"], correcta: 0, explica: "Con agua, dióxido de carbono y luz fabrica materia orgánica." },
      { tipo: "completar", q: "El pigmento verde que capta la luz se llama ___.", respuestas: ["clorofila"], explica: "Está en los cloroplastos de las células vegetales." },
      { tipo: "opcion", q: "¿Qué gas liberan las plantas al hacer la fotosíntesis?", opciones: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Vapor de agua"], correcta: 2, explica: "Liberan oxígeno, fundamental para la vida." },
      { tipo: "vf", q: "Las plantas solo respiran por la noche.", correcta: false, explica: "Respiran siempre; la fotosíntesis solo con luz." },
      { tipo: "opcion", q: "La savia bruta es...", opciones: ["agua con minerales", "alimento elaborado", "oxígeno puro", "polen"], correcta: 0, explica: "Sube desde la raíz por el tallo." },
      { tipo: "opcion", q: "¿Por qué son importantes las plantas para los animales?", opciones: ["Producen oxígeno y alimento", "Fabricas plástico", "Solo decoran", "Dan sombra únicamente"], correcta: 0, explica: "Son la base de casi todas las cadenas alimentarias." },
      { tipo: "vf", q: "Los incendios forestales aumentan el dióxido de carbono de la atmósfera.", correcta: true, explica: "Al quemarse, las plantas liberan el carbono que almacenaban." }
    ]
  },
  {
    id: "u7",
    numero: 7,
    titulo: "Los ecosistemas",
    emoji: "🌍",
    color: "#3f8f6b",
    resumen: [
      "Un ecosistema es el conjunto formado por los seres vivos de un lugar (biocenosis) y el medio físico que los rodea (biotopo), junto con sus relaciones.",
      "La biocenosis incluye todas las poblaciones: plantas, animales, hongos y microorganismos. Una población son los individuos de la misma especie.",
      "El biotopo aporta factores abióticos: luz, temperatura, agua, suelo, relieve y humedad.",
      "Los seres vivos se adaptan al medio: cactus con espinas y raíces largas, camellos con joroba, aves con picos según su alimento.",
      "El hábitat es el lugar donde vive una especie; el nicho ecológico, el papel que desempeña.",
      "Los ecosistemas tienden al equilibrio, pero una alteración (contaminación, especie invasora) puede romperlo."
    ],
    vocabulario: [
      { p: "Biocenosis", d: "Conjunto de todos los seres vivos de un ecosistema." },
      { p: "Biotopo", d: "Medio físico de un ecosistema: suelo, agua, clima, luz." },
      { p: "Población", d: "Individuos de la misma especie que viven en un lugar." },
      { p: "Hábitat", d: "Lugar donde vive y encuentra lo que necesita una especie." },
      { p: "Adaptación", d: "Característica que ayuda a un ser vivo a sobrevivir en su medio." }
    ],
    curiosidad: "En un puñado de tierra fértil puede haber más microorganismos que personas hay en una ciudad grande.",
    truco: "Ecosistema = BIO (seres vivos) + TOPO (lugar). Si cambias uno, cambia el otro.",
    preguntas: [
      { tipo: "opcion", q: "Un ecosistema está formado por...", opciones: ["solo los animales", "los seres vivos y el medio físico", "solo el clima", "solo las plantas"], correcta: 1, explica: "Biocenosis + biotopo + relaciones." },
      { tipo: "completar", q: "El conjunto de seres vivos de un ecosistema se llama ___.", respuestas: ["biocenosis"], explica: "El medio físico es el biotopo." },
      { tipo: "opcion", q: "¿Cuál es un factor abiótico?", opciones: ["Los depredadores", "La temperatura", "Las plantas", "Los hongos"], correcta: 1, explica: "Los abióticos son los componentes no vivos del medio." },
      { tipo: "vf", q: "Una población está formada por individuos de especies diferentes.", correcta: false, explica: "Es del mismo tipo de ser vivo: por ejemplo, todos los robles de un bosque." },
      { tipo: "opcion", q: "Las espinas de un cactus son una adaptación para...", opciones: ["atraer insectos", "perder menos agua", "flotar", "correr más"], correcta: 1, explica: "Reducen la pérdida de agua en medios secos." },
      { tipo: "completar", q: "El lugar donde vive una especie es su ___.", respuestas: ["hábitat", "habitat"], explica: "El nicho es su papel en el ecosistema." },
      { tipo: "vf", q: "Si desaparece un ser vivo, los demás nunca se ven afectados.", correcta: false, explica: "Todo está conectado: puede alterar toda la red trófica." }
    ]
  },
  {
    id: "u8",
    numero: 8,
    titulo: "Las relaciones de los seres vivos",
    emoji: "🕸️",
    color: "#b5832f",
    resumen: [
      "Las relaciones intraespecíficas ocurren entre individuos de la misma especie: familia, colonia, sociedad o competencia por el territorio.",
      "Las relaciones interespecíficas ocurren entre especies distintas: depredación, competencia, mutualismo, parasitismo y comensalismo.",
      "En la depredación, uno come a otro. En el parasitismo, uno vive a costa de otro y le perjudica. En el mutualismo, ambos se benefician.",
      "En una cadena trófica la energía pasa de los productores a los consumidores y a los descomponedores.",
      "Los consumidores pueden ser primarios (herbívoros), secundarios (comen herbívoros) o terciarios (comen carnívoros).",
      "Los descomponedores (hongos y bacterias) transforman los restos en sustancias que vuelven al suelo y cierran el ciclo.",
      "Las cadenas se cruzan formando redes tróficas: si un eslabón desaparece, toda la red se resiente."
    ],
    vocabulario: [
      { p: "Depredación", d: "Relación en la que un ser vivo caza y come a otro." },
      { p: "Mutualismo", d: "Relación en la que las dos especies se benefician." },
      { p: "Parasitismo", d: "Relación en la que uno vive a costa del otro y le perjudica." },
      { p: "Productor", d: "Ser vivo que fabrica su propio alimento, como las plantas." },
      { p: "Descomponedor", d: "Organismo que descompone restos y los devuelve al suelo." }
    ],
    curiosidad: "Las hormigas protegen a los pulgones y se alimentan del líquido azucarado que producen: es un mutualismo.",
    truco: "Cadena: productor → herbívoro → carnívoro → descomponedor. Cada flecha significa «sirve de alimento a».",
    preguntas: [
      { tipo: "opcion", q: "¿Cómo se llama la relación en la que ambos se benefician?", opciones: ["Parasitismo", "Competencia", "Mutualismo", "Depredación"], correcta: 2, explica: "El mutualismo beneficia a las dos especies." },
      { tipo: "opcion", q: "Los productores de un ecosistema son...", opciones: ["los herbívoros", "las plantas y algas", "los hongos", "los carnívoros"], correcta: 1, explica: "Fabrican materia orgánica con la fotosíntesis." },
      { tipo: "completar", q: "Los organismos que descomponen restos se llaman ___.", respuestas: ["descomponedores"], explica: "Hongos y bacterias reciclan la materia." },
      { tipo: "vf", q: "En el parasitismo, el parásito sale perjudicado.", correcta: false, explica: "El perjudicado es el huésped." },
      { tipo: "opcion", q: "Un consumidor secundario es el que...", opciones: ["come plantas", "come herbívoros", "fabrica su alimento", "descompone restos"], correcta: 1, explica: "Los primarios comen plantas; los secundarios, animales herbívoros." },
      { tipo: "opcion", q: "Varias cadenas tróficas conectadas forman una...", opciones: ["pirámide", "red trófica", "colonia", "población"], correcta: 1, explica: "La red trófica refleja la complejidad real del ecosistema." },
      { tipo: "vf", q: "Las relaciones intraespecíficas son las que se dan entre individuos de la misma especie.", correcta: true, explica: "Por ejemplo, una familia de lobos." }
    ]
  },
  {
    id: "u9",
    numero: 9,
    titulo: "Los tipos de ecosistemas",
    emoji: "🏝️",
    color: "#2f7f8f",
    resumen: [
      "Los ecosistemas terrestres dependen del clima y del suelo: bosques, praderas, desiertos, tundra y taiga.",
      "El bosque templado tiene árboles de hoja caduca; el mediterráneo, encinas y alcornoques adaptados a la sequía; la taiga, coníferas; la tundra, musgos y líquenes.",
      "Los ecosistemas acuáticos pueden ser de agua dulce (ríos, lagos, humedales) o marinos (costas, mar abierto, arrecifes).",
      "Los humedales, como Doñana, son ecosistemas muy ricos: mezclan agua y tierra y acogen a muchas aves migratorias.",
      "En España encontramos bosque atlántico (hayas, robles), mediterráneo, alta montaña, humedales y ecosistemas marinos.",
      "Las ciudades y cultivos son ecosistemas humanizados: dependen de la energía y los recursos que traen de fuera."
    ],
    vocabulario: [
      { p: "Taiga", d: "Bosque frío de coníferas del norte de Europa, Asia y América." },
      { p: "Tundra", d: "Ecosistema frío de suelo helado, con musgos y líquenes." },
      { p: "Humedal", d: "Zona con agua poco profunda y gran biodiversidad." },
      { p: "Hoja caduca", d: "Hoja que cae en otoño." },
      { p: "Ecosistema humanizado", d: "Ecosistema transformado por las personas, como una ciudad." }
    ],
    curiosidad: "Doñana es uno de los humedales más importantes de Europa: por allí pasan más de 300 especies de aves.",
    truco: "Tres preguntas para clasificar: ¿hay agua? ¿hace frío? ¿lo ha transformado el ser humano?",
    preguntas: [
      { tipo: "opcion", q: "¿Qué árbol es típico del bosque mediterráneo?", opciones: ["El abeto", "La encina", "El abedul", "La secuoya"], correcta: 1, explica: "Encinas y alcornoques resisten la sequía." },
      { tipo: "completar", q: "Un bosque frío de coníferas se llama ___.", respuestas: ["taiga"], explica: "La taiga ocupa el norte de Europa, Asia y América." },
      { tipo: "vf", q: "Los humedales tienen poca biodiversidad.", correcta: false, explica: "Son de los ecosistemas más ricos del planeta." },
      { tipo: "opcion", q: "Doñana es un ejemplo de...", opciones: ["desierto", "humedal", "tundra", "selva"], correcta: 1, explica: "Es un humedal andaluz famoso por sus aves." },
      { tipo: "opcion", q: "Un ecosistema de agua dulce es...", opciones: ["el mar abierto", "un río", "un arrecife", "la costa"], correcta: 1, explica: "Ríos, lagos y humedales tienen agua dulce." },
      { tipo: "vf", q: "Una ciudad es un ecosistema humanizado.", correcta: true, explica: "Está creado y mantenido por las personas." },
      { tipo: "completar", q: "Los árboles de hoja ___ pierden las hojas en otoño.", respuestas: ["caduca"], explica: "Los de hoja perenne las conservan todo el año." }
    ]
  },
  {
    id: "u10",
    numero: 10,
    titulo: "Las personas y el medio ambiente",
    emoji: "♻️",
    color: "#5b8c3e",
    resumen: [
      "Usamos recursos naturales: renovables (sol, viento, agua, seres vivos) y no renovables (carbón, petróleo, minerales).",
      "La contaminación del aire, del agua y del suelo daña los ecosistemas y nuestra salud. También hay contaminación acústica y lumínica.",
      "Los residuos se gestionan con la regla de las 3R: reducir, reutilizar y reciclar.",
      "El desarrollo sostenible busca cubrir las necesidades actuales sin comprometer las de las generaciones futuras.",
      "La huella ecológica mide los recursos que consume nuestro estilo de vida.",
      "El cambio climático, la pérdida de biodiversidad y las especies invasoras son los grandes problemas ambientales actuales."
    ],
    vocabulario: [
      { p: "Recurso renovable", d: "Recurso que la naturaleza regenera en poco tiempo." },
      { p: "Desarrollo sostenible", d: "Progreso que respeta el medio ambiente y el futuro." },
      { p: "Huella ecológica", d: "Superficie necesaria para producir lo que consumimos." },
      { p: "Biodiversidad", d: "Variedad de seres vivos de un lugar." },
      { p: "Especie invasora", d: "Especie introducida que se expande y daña el ecosistema." }
    ],
    curiosidad: "Reciclar una lata de aluminio ahorra energía suficiente para tener un televisor encendido unas tres horas.",
    truco: "3R en orden de importancia: primero Reducir, luego Reutilizar y por último Reciclar.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál de estos recursos es renovable?", opciones: ["El petróleo", "El carbón", "El viento", "El gas natural"], correcta: 2, explica: "El viento se regenera continuamente." },
      { tipo: "completar", q: "Las 3R son reducir, reutilizar y ___.", respuestas: ["reciclar"], explica: "Reciclar transforma residuos en nuevos productos." },
      { tipo: "opcion", q: "El desarrollo sostenible busca...", opciones: ["consumir más", "satisfacer necesidades sin dañar el futuro", "producir más basura", "usar solo petróleo"], correcta: 1, explica: "Equilibra el presente y el futuro." },
      { tipo: "vf", q: "Las especies invasoras suelen equilibrar el ecosistema.", correcta: false, explica: "Compiten con las autóctonas y pueden hacerlas desaparecer." },
      { tipo: "opcion", q: "¿Qué mide la huella ecológica?", opciones: ["El tamaño del pie", "Los recursos que consume nuestro estilo de vida", "La lluvia anual", "La velocidad del viento"], correcta: 1, explica: "Indica la superficie necesaria para mantener nuestro consumo." },
      { tipo: "vf", q: "La contaminación del agua solo afecta a los peces.", correcta: false, explica: "Afecta a todo el ecosistema y también a las personas." },
      { tipo: "completar", q: "La variedad de seres vivos de un lugar es la ___.", respuestas: ["biodiversidad"], explica: "Es un indicador de la salud del ecosistema." }
    ]
  },
  {
    id: "u11",
    numero: 11,
    titulo: "La materia y sus propiedades",
    emoji: "⚗️",
    color: "#8a6bbf",
    resumen: [
      "La materia es todo lo que tiene masa y volumen. La masa se mide en kilogramos y el volumen en litros o centímetros cúbicos.",
      "Las propiedades generales (masa, volumen) son comunes a toda la materia; las específicas (densidad, color, dureza, conductividad) permiten distinguir sustancias.",
      "La densidad es la masa por unidad de volumen: por eso el corcho flota y el hierro se hunde.",
      "La materia puede estar en estado sólido, líquido o gas. Los cambios de estado son físicos: fusión, solidificación, evaporación, condensación, sublimación.",
      "Una mezcla tiene varias sustancias; puede ser homogénea (no se distinguen sus componentes) o heterogénea (sí se distinguen).",
      "En un cambio químico aparecen sustancias nuevas (combustión, oxidación, fermentación); en un cambio físico cambia la forma o el estado, pero no la sustancia.",
      "Las mezclas se separan por filtración, decantación, evaporación, destilación o con un imán."
    ],
    vocabulario: [
      { p: "Densidad", d: "Masa de una sustancia por unidad de volumen." },
      { p: "Disolución", d: "Mezcla homogénea de un sólido, líquido o gas en un líquido." },
      { p: "Filtración", d: "Separar un sólido de un líquido con un filtro." },
      { p: "Decantación", d: "Separar líquidos que no se mezclan o un sólido que se deposita." },
      { p: "Cambio químico", d: "Transformación en la que aparecen sustancias nuevas." }
    ],
    curiosidad: "El agua es la única sustancia natural que se encuentra en los tres estados a temperaturas normales en la Tierra.",
    truco: "Físico = cambia el aspecto. Químico = nace algo nuevo. ¿Hay sustancia nueva? Entonces es químico.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál es una propiedad general de la materia?", opciones: ["La densidad", "La masa", "El color", "La dureza"], correcta: 1, explica: "Masa y volumen son generales; densidad y color, específicas." },
      { tipo: "completar", q: "La relación entre la masa y el volumen de un cuerpo es su ___.", respuestas: ["densidad"], explica: "Densidad = masa / volumen." },
      { tipo: "opcion", q: "El paso de líquido a gas se llama...", opciones: ["fusión", "evaporación", "condensación", "solidificación"], correcta: 1, explica: "Si ocurre en toda la masa, es ebullición." },
      { tipo: "vf", q: "En una mezcla homogénea se distinguen sus componentes a simple vista.", correcta: false, explica: "No se distinguen; por eso es homogénea." },
      { tipo: "opcion", q: "¿Qué método separa limaduras de hierro de la arena?", opciones: ["La filtración", "El imán", "La evaporación", "La decantación"], correcta: 1, explica: "El hierro es atraído por el imán." },
      { tipo: "opcion", q: "Una reacción química...", opciones: ["solo cambia la forma", "forma sustancias nuevas", "solo cambia el estado", "no cambia nada"], correcta: 1, explica: "Por ejemplo, la combustión produce sustancias nuevas." },
      { tipo: "vf", q: "El agua hierve a 100 °C a nivel del mar.", correcta: true, explica: "En altitud, la presión baja y hierve antes." },
      { tipo: "completar", q: "La oxidación de un clavo es un cambio ___.", respuestas: ["químico", "quimico"], explica: "Aparece una sustancia nueva: el óxido." }
    ]
  },
  {
    id: "u12",
    numero: 12,
    titulo: "Las fuerzas y sus propiedades",
    emoji: "🧲",
    color: "#c2703d",
    resumen: [
      "Una fuerza es un empuje o una tracción capaz de deformar un cuerpo o cambiar su movimiento.",
      "Se mide en newtons (N) con un dinamómetro. Tiene dirección, sentido y punto de aplicación.",
      "La gravedad atrae los cuerpos hacia el centro de la Tierra. El peso es una fuerza; la masa no cambia, el peso sí según el lugar.",
      "El rozamiento es la fuerza que se opone al movimiento entre dos superficies; puede frenar o calentar.",
      "La flotación depende de la densidad: un cuerpo flota si es menos denso que el líquido.",
      "Las fuerzas pueden sumarse o equilibrarse. Si están equilibradas, el cuerpo no cambia su movimiento."
    ],
    vocabulario: [
      { p: "Newton", d: "Unidad de fuerza; se representa con N." },
      { p: "Dinamómetro", d: "Aparato que mide fuerzas." },
      { p: "Gravedad", d: "Fuerza de atracción que ejerce la Tierra." },
      { p: "Rozamiento", d: "Fuerza que se opone al deslizamiento entre superficies." },
      { p: "Empuje", d: "Fuerza que un fluido ejerce hacia arriba sobre un cuerpo sumergido." }
    ],
    curiosidad: "En la Luna pesarías unas seis veces menos, pero tu masa sería exactamente la misma.",
    truco: "Masa = cuánta materia tienes (kg). Peso = cuánto te atrae la gravedad (N).",
    preguntas: [
      { tipo: "opcion", q: "¿Con qué instrumento se mide una fuerza?", opciones: ["El termómetro", "El dinamómetro", "La balanza", "El cronómetro"], correcta: 1, explica: "El dinamómetro mide fuerzas en newtons." },
      { tipo: "completar", q: "La fuerza que atrae los cuerpos hacia el centro de la Tierra es la ___.", respuestas: ["gravedad"], explica: "Nos da el peso." },
      { tipo: "vf", q: "La masa de un objeto cambia si lo llevamos a la Luna.", correcta: false, explica: "La masa no cambia; el peso sí." },
      { tipo: "opcion", q: "El rozamiento...", opciones: ["ayuda a patinar", "se opone al movimiento", "no existe", "solo actúa en el agua"], correcta: 1, explica: "Frena el movimiento y genera calor." },
      { tipo: "opcion", q: "Un cuerpo flota si...", opciones: ["es más denso que el líquido", "es menos denso que el líquido", "pesa mucho", "es muy grande"], correcta: 1, explica: "El empuje supera su peso." },
      { tipo: "opcion", q: "¿Qué efecto puede producir una fuerza?", opciones: ["Deformar un cuerpo", "Cambiar su movimiento", "Las dos anteriores", "Ninguna"], correcta: 2, explica: "Puede deformar y/o cambiar el movimiento." },
      { tipo: "completar", q: "La unidad de fuerza es el ___.", respuestas: ["newton"], explica: "Se abrevia N." }
    ]
  },
  {
    id: "u13",
    numero: 13,
    titulo: "La energía",
    emoji: "⚡",
    color: "#d99a1e",
    resumen: [
      "La energía es la capacidad de producir cambios. Se mide en julios (J).",
      "Formas de energía: cinética (movimiento), potencial (posición), térmica, luminosa, eléctrica, química, nuclear y sonora.",
      "La energía se transforma continuamente: una bombilla convierte electricidad en luz y calor; una planta, luz en energía química.",
      "La energía no se crea ni se destruye, solo se transforma: es el principio de conservación.",
      "En cualquier transformación parte de la energía se dispersa como calor y no se puede aprovechar igual.",
      "Los cuerpos almacenan energía (química en los alimentos, potencial en el agua de un embalse) y la liberan cuando hace falta."
    ],
    vocabulario: [
      { p: "Energía cinética", d: "Energía que tiene un cuerpo por estar en movimiento." },
      { p: "Energía potencial", d: "Energía que tiene un cuerpo por su posición o altura." },
      { p: "Julio", d: "Unidad de energía; se representa con J." },
      { p: "Transformación", d: "Paso de una forma de energía a otra." }
    ],
    curiosidad: "Un rayo puede alcanzar 30.000 °C, cinco veces la temperatura de la superficie del Sol.",
    truco: "La energía es como el dinero: no desaparece, solo cambia de moneda (de forma).",
    preguntas: [
      { tipo: "opcion", q: "La energía que tiene un cuerpo por su movimiento es...", opciones: ["potencial", "cinética", "química", "nuclear"], correcta: 1, explica: "Cinética viene de «cinema», movimiento." },
      { tipo: "completar", q: "La energía se mide en ___.", respuestas: ["julios", "julio"], explica: "El julio (J) es la unidad del Sistema Internacional." },
      { tipo: "vf", q: "La energía puede crearse de la nada.", correcta: false, explica: "Solo se transforma; no se crea ni se destruye." },
      { tipo: "opcion", q: "Un panel solar transforma...", opciones: ["luz en electricidad", "electricidad en luz", "calor en sonido", "sonido en calor"], correcta: 0, explica: "La célula fotovoltaica produce electricidad con la luz." },
      { tipo: "opcion", q: "¿Qué energía almacena un alimento?", opciones: ["Cinética", "Química", "Nuclear", "Sonora"], correcta: 1, explica: "El cuerpo la libera al digerirlo." },
      { tipo: "completar", q: "La energía del agua embalsada en una presa es energía ___.", respuestas: ["potencial"], explica: "Depende de su altura." },
      { tipo: "vf", q: "Al transformar energía, parte se pierde en forma de calor.", correcta: true, explica: "Es la energía dispersada, difícil de reutilizar." }
    ]
  },
  {
    id: "u14",
    numero: 14,
    titulo: "El uso de la energía",
    emoji: "🔌",
    color: "#3f7fb5",
    resumen: [
      "Las fuentes de energía renovables se regeneran: solar, eólica, hidráulica, biomasa, geotérmica y mareomotriz.",
      "Las no renovables son limitadas: carbón, petróleo, gas natural y uranio (nuclear).",
      "Las renovables contaminan menos, pero dependen del clima y necesitan instalaciones grandes. Las fósiles son baratas, pero emiten CO₂.",
      "El consumo de energía ha crecido mucho; ahorrar y usar la energía de forma eficiente es urgente.",
      "La etiqueta energética indica la eficiencia de los electrodomésticos, de la A a la G.",
      "El exceso de gases de efecto invernadero, sobre todo CO₂, intensifica el cambio climático."
    ],
    vocabulario: [
      { p: "Renovable", d: "Fuente de energía que se regenera de forma continua." },
      { p: "Eficiencia energética", d: "Aprovechar mejor la energía, gastando menos." },
      { p: "Efecto invernadero", d: "Retención del calor de la Tierra por ciertos gases." },
      { p: "Biomasa", d: "Energía obtenida de materia orgánica (restos vegetales)." }
    ],
    curiosidad: "Sustituir una bombilla incandescente por una LED puede ahorrar hasta un 80 % de electricidad.",
    truco: "Renovable = se renueva sola. No renovable = se acaba y no vuelve en miles de años.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál de estas fuentes es renovable?", opciones: ["El carbón", "El petróleo", "La energía solar", "El gas natural"], correcta: 2, explica: "El Sol es una fuente inagotable a escala humana." },
      { tipo: "completar", q: "La energía del viento se llama energía ___.", respuestas: ["eólica", "eolica"], explica: "Se obtiene con aerogeneradores." },
      { tipo: "vf", q: "El carbón y el petróleo son fuentes renovables.", correcta: false, explica: "Tardan millones de años en formarse." },
      { tipo: "opcion", q: "El efecto invernadero se intensifica por...", opciones: ["el viento", "los gases de la quema de combustibles", "la lluvia", "las mareas"], correcta: 1, explica: "El CO₂ retiene más calor del necesario." },
      { tipo: "opcion", q: "Una etiqueta energética A significa...", opciones: ["muy eficiente", "poco eficiente", "peligrosa", "antigua"], correcta: 0, explica: "A es la clase más eficiente." },
      { tipo: "vf", q: "Apagar las luces y los aparatos que no usamos ahorra energía.", correcta: true, explica: "Es un gesto sencillo y muy eficaz." },
      { tipo: "completar", q: "La energía obtenida de restos vegetales es la ___.", respuestas: ["biomasa"], explica: "Aprovecha materia orgánica como combustible." }
    ]
  },
  {
    id: "u15",
    numero: 15,
    titulo: "Máquinas y estructuras",
    emoji: "⚙️",
    color: "#6b7280",
    resumen: [
      "Las máquinas son objetos que nos ayudan a realizar un trabajo con menos esfuerzo.",
      "Las máquinas simples tienen pocos componentes: palanca, polea, plano inclinado, rueda, cuña y tornillo.",
      "La palanca tiene punto de apoyo, fuerza y resistencia; según dónde esté el apoyo hay tres géneros.",
      "Las máquinas compuestas combinan varias simples: bicicleta, tijeras, grúa o taladro.",
      "Sus partes son operadores mecánicos (engranajes, poleas, ejes), energéticos (motor, batería) y de control (botones, mandos).",
      "Las estructuras sostienen y dan forma: masivas, de armazón, laminares, abovedadas y entramadas. Su estabilidad depende de la base, el centro de gravedad y la triangulación."
    ],
    vocabulario: [
      { p: "Palanca", d: "Barra que gira sobre un punto de apoyo para levantar o mover algo." },
      { p: "Polea", d: "Rueda con una cuerda que permite subir pesos con menos esfuerzo." },
      { p: "Operador mecánico", d: "Pieza que transmite o transforma el movimiento en una máquina." },
      { p: "Estructura", d: "Conjunto de elementos que sostienen y dan forma a un objeto o edificio." },
      { p: "Triangulación", d: "Técnica de añadir diagonales para hacer rígida una estructura." }
    ],
    curiosidad: "La grúa es una máquina compuesta: combina poleas, cables, un motor y una estructura de armazón.",
    truco: "Palanca: cuanto más lejos del apoyo aplicas la fuerza, menos esfuerzo necesitas.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál es una máquina simple?", opciones: ["La bicicleta", "La palanca", "El coche", "La grúa"], correcta: 1, explica: "La palanca es una de las máquinas simples básicas." },
      { tipo: "completar", q: "Una rueda con una cuerda que sirve para levantar pesos es una ___.", respuestas: ["polea"], explica: "Cambia la dirección de la fuerza y reduce el esfuerzo." },
      { tipo: "opcion", q: "Un plano inclinado sirve para...", opciones: ["subir pesos con menos esfuerzo", "cortar madera", "iluminar", "medir fuerzas"], correcta: 0, explica: "Reparte el esfuerzo en una distancia mayor." },
      { tipo: "vf", q: "Una bicicleta es una máquina compuesta.", correcta: true, explica: "Combina ruedas, palancas, engranajes y cadena." },
      { tipo: "opcion", q: "Los botones y mandos de una máquina son operadores...", opciones: ["mecánicos", "energéticos", "de control", "estructurales"], correcta: 2, explica: "Controlan el funcionamiento." },
      { tipo: "opcion", q: "¿Qué hace más estable una estructura?", opciones: ["Añadir diagonales", "Quitar la base", "Subir el centro de gravedad", "Usar menos apoyos"], correcta: 0, explica: "La triangulación la vuelve rígida." },
      { tipo: "completar", q: "Una máquina que transforma energía eléctrica en movimiento es un ___.", respuestas: ["motor"], explica: "Los motores eléctricos mueven muchos aparatos." }
    ]
  }
];

/* utilidades de contenido */
function getUnidad(id) {
  return UNIDADES.find(function (u) { return u.id === id; });
}
