/* ============================================================
   CIENCIAS SOCIALES · 5º PRIMARIA
   Contenido original de estudio, ordenado según el índice
   de la edición de Madrid (9 unidades).
   ============================================================ */

const UNIDADES = [
  {
    id: "s1",
    numero: 1,
    titulo: "El relieve de España",
    emoji: "🏔️",
    color: "#8a6a3b",
    resumen: [
      "España está en el sur de Europa. Su territorio incluye la mayor parte de la península ibérica, los archipiélagos de Baleares y Canarias y las ciudades de Ceuta y Melilla.",
      "La Meseta Central es una gran llanura elevada, de unos 600 a 700 metros, que ocupa el centro de la península. La recorren el Sistema Central y los Montes de Toledo.",
      "Alrededor de la Meseta se levantan la Cordillera Cantábrica, los Pirineos, el Sistema Ibérico, Sierra Morena y las Cordilleras Béticas.",
      "Entre las cordilleras hay dos grandes depresiones: la del Ebro, al noreste, y la del Guadalquivir, al sur.",
      "Las costas son muy variadas: acantilados en el Cantábrico, rías y deltas en el Atlántico y playas y cabos en el Mediterráneo.",
      "En el relieve insular destacan la Sierra de Tramuntana en Mallorca y los volcanes de Canarias. El Teide (3.718 m) es el pico más alto de España.",
      "El relieve cambia por agentes internos (volcanes y terremotos) y externos (agua, viento, hielo y seres vivos), que erosionan y transportan materiales."
    ],
    vocabulario: [
      { p: "Meseta", d: "Llanura elevada y extensa. La Meseta Central ocupa el centro de la península." },
      { p: "Cordillera", d: "Conjunto de montañas alineadas." },
      { p: "Depresión", d: "Zona baja y llana situada entre relieves más altos." },
      { p: "Cabo", d: "Porción de tierra que entra en el mar." },
      { p: "Delta", d: "Terreno triangular que forma un río al depositar sedimentos en su desembocadura." },
      { p: "Erosión", d: "Desgaste del terreno por la acción del agua, el viento o el hielo." }
    ],
    curiosidad: "El Teide es el pico más alto de España y también el volcán más alto de Europa, con 3.718 metros.",
    truco: "Imagina España como un castillo: la Meseta es el patio central, las cordilleras son las murallas y las depresiones, los fosos.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué es la Meseta Central?", opciones: ["Una cordillera del norte", "Una gran llanura elevada en el centro", "Una depresión del sur", "Un archipiélago"], correcta: 1, explica: "Es una llanura elevada de unos 600-700 m que ocupa el centro de la península." },
      { tipo: "completar", q: "El pico más alto de España es el ___, en Canarias.", respuestas: ["Teide"], explica: "El Teide mide 3.718 metros y es un volcán." },
      { tipo: "opcion", q: "¿Qué cordillera separa la Meseta del valle del Ebro?", opciones: ["Sierra Morena", "El Sistema Ibérico", "Los Pirineos", "La Cordillera Cantábrica"], correcta: 1, explica: "El Sistema Ibérico bordea la Meseta por el noreste." },
      { tipo: "vf", q: "La depresión del Guadalquivir está al sur de la península.", correcta: true, explica: "Es una llanura baja recorrida por el Guadalquivir." },
      { tipo: "opcion", q: "¿Cuál de estas formas de relieve es una entrada de tierra en el mar?", opciones: ["Golfo", "Cabo", "Ría", "Delta"], correcta: 1, explica: "El cabo entra en el mar; el golfo es una entrada de mar en la tierra." },
      { tipo: "completar", q: "El desgaste del terreno por el agua y el viento se llama ___.", respuestas: ["erosión", "erosion"], explica: "La erosión modela el relieve junto con el transporte y la sedimentación." },
      { tipo: "vf", q: "El relieve de España es muy uniforme, sin grandes diferencias de altura.", correcta: false, explica: "Es muy variado: hay montañas de más de 3.000 m y grandes llanuras." },
      { tipo: "opcion", q: "¿Qué agente modifica el relieve desde el interior de la Tierra?", opciones: ["El viento", "Un volcán", "Un río", "El hielo"], correcta: 1, explica: "Volcanes y terremotos son agentes internos." }
    ]
  },
  {
    id: "s2",
    numero: 2,
    titulo: "Las aguas de España",
    emoji: "🌊",
    color: "#2f7fb5",
    resumen: [
      "El agua de la Tierra forma la hidrosfera. En España hay aguas oceánicas y continentales: ríos, lagos, embalses, glaciares y aguas subterráneas.",
      "Un río tiene curso alto, medio y bajo. Su caudal es la cantidad de agua que lleva y su régimen, cómo varía a lo largo del año.",
      "Los ríos de la vertiente cantábrica son cortos y caudalosos, con régimen regular, porque llueve mucho.",
      "Los de la vertiente atlántica son largos y de caudal variable. El Tajo es el más largo de la península y el Duero y el Guadiana pasan por Portugal.",
      "Los de la vertiente mediterránea son cortos, con poco caudal y crecidas fuertes. El Ebro es el más caudaloso de España.",
      "En España hay lagos como el de Sanabria, humedales como Doñana y muchos embalses para almacenar agua.",
      "El agua es un recurso limitado: hay que ahorrarla y evitar contaminarla. La sequía es un problema frecuente."
    ],
    vocabulario: [
      { p: "Caudal", d: "Cantidad de agua que lleva un río." },
      { p: "Régimen", d: "Variación del caudal de un río a lo largo del año." },
      { p: "Vertiente", d: "Terreno cuyas aguas van a parar a un mismo mar u océano." },
      { p: "Afluente", d: "Río que desemboca en otro río." },
      { p: "Embalse", d: "Lago artificial para almacenar agua." },
      { p: "Acuífero", d: "Almacén subterráneo de agua." }
    ],
    curiosidad: "El Tajo recorre 1.007 km, pero solo 816 pasan por España: después entra en Portugal y desemboca en Lisboa.",
    truco: "Tres vertientes: Cantábrica (cortos y llenos), Atlántica (largos) y Mediterránea (cortos y con crecidas).",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál es el río más largo de la península ibérica?", opciones: ["El Ebro", "El Duero", "El Tajo", "El Guadalquivir"], correcta: 2, explica: "El Tajo mide 1.007 km." },
      { tipo: "completar", q: "El río más caudaloso de España es el ___.", respuestas: ["Ebro"], explica: "El Ebro recoge agua de una gran cuenca." },
      { tipo: "vf", q: "Los ríos de la vertiente mediterránea son largos y de caudal constante.", correcta: false, explica: "Son cortos y sufren sequías y crecidas." },
      { tipo: "opcion", q: "¿Qué es el caudal de un río?", opciones: ["Su longitud", "El agua que lleva", "Su profundidad", "Los metros de altura"], correcta: 1, explica: "Es la cantidad de agua que transporta." },
      { tipo: "opcion", q: "¿Dónde desemboca el Guadalquivir?", opciones: ["En el mar Mediterráneo", "En el océano Atlántico", "En el mar Cantábrico", "En el Ebro"], correcta: 1, explica: "Desemboca en el Atlántico, en Sanlúcar de Barrameda." },
      { tipo: "completar", q: "Un río que vierte sus aguas en otro río es un ___.", respuestas: ["afluente"], explica: "Por ejemplo, el Jarama es afluente del Tajo." },
      { tipo: "vf", q: "Los embalses sirven para almacenar agua y producir electricidad.", correcta: true, explica: "También regulan el caudal de los ríos." },
      { tipo: "opcion", q: "¿Cuál de estas aguas es continental?", opciones: ["El mar Cantábrico", "Un lago", "El océano Atlántico", "El mar Mediterráneo"], correcta: 1, explica: "Lagos, ríos y embalses son aguas continentales." }
    ]
  },
  {
    id: "s3",
    numero: 3,
    titulo: "La población de España y de Europa",
    emoji: "👥",
    color: "#9c5b8f",
    resumen: [
      "España tiene unos 48 millones de habitantes y una densidad de población de unos 95 habitantes por km².",
      "La población se reparte de forma irregular: se concentra en Madrid y en la costa, mientras que amplias zonas del interior están poco pobladas (la «España vaciada»).",
      "El crecimiento natural es la diferencia entre nacimientos y defunciones. En España la natalidad es baja y la esperanza de vida muy alta (unos 83 años).",
      "Las migraciones también cambian la población: muchas personas llegan del extranjero y otras salen a trabajar fuera.",
      "La población europea supera los 740 millones de habitantes. Los países más poblados son Alemania, Francia, Italia, España y Polonia.",
      "Europa tiene una población envejecida y muy diversa culturalmente. Las ciudades concentran la mayoría de los habitantes.",
      "El censo y el padrón son registros que cuentan la población y permiten planificar servicios."
    ],
    vocabulario: [
      { p: "Densidad de población", d: "Número de habitantes por kilómetro cuadrado." },
      { p: "Natalidad", d: "Número de nacimientos en un lugar y un tiempo." },
      { p: "Esperanza de vida", d: "Años que se espera que viva una persona." },
      { p: "Inmigración", d: "Llegada de personas a un país para vivir en él." },
      { p: "Emigración", d: "Salida de personas de un país para vivir en otro." },
      { p: "Padrón", d: "Registro de los habitantes de un municipio." }
    ],
    curiosidad: "España es uno de los países más longevos del mundo: la esperanza de vida supera los 83 años.",
    truco: "Densidad = habitantes ÷ km². Si el resultado es alto, la zona está muy poblada.",
    preguntas: [
      { tipo: "completar", q: "La ___ de población se calcula dividiendo los habitantes entre los km².", respuestas: ["densidad"], explica: "España tiene unos 95 hab/km²." },
      { tipo: "opcion", q: "¿Dónde se concentra más población en España?", opciones: ["En el interior despoblado", "En Madrid y la costa", "En las montañas", "En los pueblos pequeños"], correcta: 1, explica: "Madrid y el litoral son las zonas más pobladas." },
      { tipo: "vf", q: "La población española está envejeciendo.", correcta: true, explica: "Hay baja natalidad y alta esperanza de vida." },
      { tipo: "opcion", q: "¿Qué es la inmigración?", opciones: ["Salir del país", "Llegar al país para vivir", "Nacer en un país", "Cambiar de casa"], correcta: 1, explica: "La emigración es lo contrario: salir." },
      { tipo: "opcion", q: "¿Cuál es el país más poblado de la Unión Europea?", opciones: ["España", "Francia", "Alemania", "Italia"], correcta: 2, explica: "Alemania supera los 83 millones de habitantes." },
      { tipo: "completar", q: "La diferencia entre nacimientos y defunciones es el crecimiento ___.", respuestas: ["natural", "vegetativo"], explica: "Si hay más defunciones que nacimientos, el crecimiento es negativo." },
      { tipo: "vf", q: "La «España vaciada» son zonas del interior con muy poca población.", correcta: true, explica: "Sufren pérdida de habitantes y servicios." },
      { tipo: "opcion", q: "¿Para qué sirve el padrón municipal?", opciones: ["Para contar los habitantes de un municipio", "Para medir montañas", "Para estudiar el clima", "Para organizar ríos"], correcta: 0, explica: "Es un registro de vecinos." }
    ]
  },
  {
    id: "s4",
    numero: 4,
    titulo: "La actividad económica",
    emoji: "💼",
    color: "#b07d2a",
    resumen: [
      "La actividad económica produce bienes y servicios para satisfacer necesidades. Necesita recursos naturales, trabajo y capital.",
      "Las actividades se agrupan en tres sectores: primario (obtiene recursos), secundario (transforma) y terciario (ofrece servicios).",
      "La población activa son las personas que trabajan o buscan trabajo; la inactiva incluye a quienes no pueden o no quieren trabajar.",
      "Las empresas organizan la producción. El mercado pone en contacto a quienes ofrecen y quienes demandan.",
      "El precio depende de la oferta y la demanda: si hay mucho producto y poca demanda, suele bajar.",
      "La economía debe ser sostenible: producir sin agotar los recursos ni dañar el medio ambiente.",
      "En España el sector terciario es el que más empleo genera, sobre todo el turismo y el comercio."
    ],
    vocabulario: [
      { p: "Bien", d: "Producto material que satisface una necesidad." },
      { p: "Servicio", d: "Actividad que satisface una necesidad sin producir un objeto." },
      { p: "Población activa", d: "Personas que trabajan o buscan empleo." },
      { p: "Oferta", d: "Cantidad de productos o servicios disponibles." },
      { p: "Demanda", d: "Cantidad que los consumidores quieren comprar." },
      { p: "Empresa", d: "Organización que produce bienes o servicios." }
    ],
    curiosidad: "El turismo aporta alrededor del 12 % del PIB español: es una de las actividades económicas más importantes del país.",
    truco: "Tres sectores: sacar (primario), transformar (secundario) y atender (terciario).",
    preguntas: [
      { tipo: "opcion", q: "¿Qué sector obtiene los recursos naturales?", opciones: ["Primario", "Secundario", "Terciario", "Cuaternario"], correcta: 0, explica: "Agricultura, ganadería, pesca y minería son del primario." },
      { tipo: "completar", q: "El sector que ofrece servicios se llama ___.", respuestas: ["terciario"], explica: "Comercio, turismo, sanidad o educación son servicios." },
      { tipo: "vf", q: "La población activa incluye a las personas que buscan trabajo.", correcta: true, explica: "Activa = ocupados + parados." },
      { tipo: "opcion", q: "¿Qué es la demanda?", opciones: ["Lo que se produce", "Lo que quieren comprar los consumidores", "El dinero del Estado", "El precio fijo"], correcta: 1, explica: "Junto con la oferta determina el precio." },
      { tipo: "opcion", q: "¿Cuál de estas actividades es del sector secundario?", opciones: ["Una granja", "Una fábrica de coches", "Un hotel", "Una tienda"], correcta: 1, explica: "La industria transforma materias primas." },
      { tipo: "vf", q: "Producir más siempre es mejor, aunque se agoten los recursos.", correcta: false, explica: "La economía debe ser sostenible." },
      { tipo: "completar", q: "Una ___ organiza la producción de bienes o servicios.", respuestas: ["empresa"], explica: "Combina recursos, trabajo y capital." },
      { tipo: "opcion", q: "¿Qué sector genera más empleo en España?", opciones: ["El primario", "El secundario", "El terciario", "La minería"], correcta: 2, explica: "El terciario supera el 70 % del empleo." }
    ]
  },
  {
    id: "s5",
    numero: 5,
    titulo: "Los sectores productivos de España y de Europa",
    emoji: "🏭",
    color: "#6b7280",
    resumen: [
      "El sector primario en España incluye la agricultura, la ganadería, la pesca y la minería. Destacan el aceite de oliva, el vino, las frutas y hortalizas.",
      "La agricultura mediterránea cultiva olivo, vid y cereales; en Almería, los invernaderos producen hortalizas todo el año.",
      "La ganadería cría vacas, ovejas, cerdos y aves. La pesca es importante en Galicia, Andalucía y el Cantábrico.",
      "El sector secundario incluye la industria y la construcción. En España destacan la alimentación, el automóvil, la química y la energía.",
      "En Europa, Alemania, Francia e Italia son grandes potencias industriales.",
      "El sector terciario es el más importante en España: comercio, turismo, transporte, sanidad, educación y banca.",
      "España es uno de los países más visitados del mundo. El turismo de sol y playa se combina con el cultural y el rural.",
      "La industria se concentra en Madrid, Cataluña y el País Vasco; el turismo, en las costas y las grandes ciudades."
    ],
    vocabulario: [
      { p: "Sector primario", d: "Actividades que obtienen recursos de la naturaleza." },
      { p: "Sector secundario", d: "Actividades que transforman materias primas: industria y construcción." },
      { p: "Sector terciario", d: "Actividades que prestan servicios." },
      { p: "Invernadero", d: "Instalación cubierta donde se cultivan plantas fuera de temporada." },
      { p: "Turismo", d: "Actividad de las personas que viajan y se alojan fuera de su casa." }
    ],
    curiosidad: "España es el mayor productor mundial de aceite de oliva: produce cerca de la mitad del aceite del mundo.",
    truco: "Primario = campo y mar. Secundario = fábrica. Terciario = tienda, hotel y oficina.",
    preguntas: [
      { tipo: "opcion", q: "¿A qué sector pertenece la agricultura?", opciones: ["Primario", "Secundario", "Terciario", "Ninguno"], correcta: 0, explica: "Obtiene recursos directamente de la naturaleza." },
      { tipo: "completar", q: "España es el mayor productor mundial de aceite de ___.", respuestas: ["oliva"], explica: "El olivar es un cultivo típicamente mediterráneo." },
      { tipo: "vf", q: "Los invernaderos de Almería producen hortalizas durante todo el año.", correcta: true, explica: "El clima y el plástico permiten controlar la temperatura." },
      { tipo: "opcion", q: "¿Cuál es una industria importante en España?", opciones: ["La del automóvil", "La de la seda", "La del petróleo", "La del carbón"], correcta: 0, explica: "España fabrica millones de coches al año." },
      { tipo: "opcion", q: "¿Qué sector es el más importante en la economía española?", opciones: ["El primario", "El secundario", "El terciario", "La minería"], correcta: 2, explica: "El turismo y el comercio son claves." },
      { tipo: "vf", q: "El turismo solo existe en las playas.", correcta: false, explica: "También hay turismo cultural, rural y de montaña." },
      { tipo: "completar", q: "Alemania, Francia e Italia son grandes potencias ___ de Europa.", respuestas: ["industriales"], explica: "Su sector secundario es muy potente." },
      { tipo: "opcion", q: "¿Dónde se concentra la industria en España?", opciones: ["En el interior despoblado", "En Madrid, Cataluña y País Vasco", "Solo en las islas", "En los pueblos pequeños"], correcta: 1, explica: "Son las zonas con más tradición industrial." }
    ]
  },
  {
    id: "s6",
    numero: 6,
    titulo: "La Edad Media: de los visigodos a al-Ándalus",
    emoji: "🕌",
    color: "#a0522d",
    resumen: [
      "En el año 476 cayó el Imperio romano de Occidente. Entraron en la península pueblos germanos: suevos, vándalos, alanos y visigodos.",
      "Los visigodos crearon un reino con capital en Toledo (siglos VI y VII). Su monarquía era electiva y en 589 el rey Recaredo se convirtió al catolicismo.",
      "En 711 los musulmanes derrotaron a los visigodos en la batalla de Guadalete y conquistaron casi toda la península. Llamaron a su territorio al-Ándalus.",
      "Al-Ándalus fue primero un emirato dependiente de Damasco; en 756 Abderramán I creó un emirato independiente y en 929 Abderramán III proclamó el califato de Córdoba.",
      "La sociedad era muy diversa: musulmanes, mozárabes (cristianos) y judíos. Convivencia y conflictos se alternaron.",
      "Introdujeron el regadío, acequias, nuevos cultivos (arroz, cítricos, algodón), el papel, la numeración y grandes edificios como la mezquita de Córdoba.",
      "En 1031 el califato se dividió en reinos de taifas, más débiles, que fueron conquistados poco a poco por los reinos cristianos."
    ],
    vocabulario: [
      { p: "Visigodo", d: "Pueblo germano que creó un reino en la península con capital en Toledo." },
      { p: "Al-Ándalus", d: "Nombre del territorio musulmán en la península ibérica." },
      { p: "Emirato", d: "Territorio gobernado por un emir." },
      { p: "Califato", d: "Territorio gobernado por un califa, jefe político y religioso." },
      { p: "Taifa", d: "Reino independiente en que se dividió al-Ándalus desde 1031." },
      { p: "Mozárabe", d: "Cristiano que vivía en territorio musulmán." }
    ],
    curiosidad: "En la Córdoba del siglo X vivían unas 100.000 personas y tenía bibliotecas, baños públicos y calles pavimentadas.",
    truco: "Línea del tiempo: 476 (fin de Roma) → 589 (Recaredo católico) → 711 (Guadalete) → 929 (califato) → 1031 (taifas).",
    preguntas: [
      { tipo: "opcion", q: "¿Qué pueblo germano creó un reino con capital en Toledo?", opciones: ["Los romanos", "Los visigodos", "Los musulmanes", "Los fenicios"], correcta: 1, explica: "El reino visigodo dominó la península hasta 711." },
      { tipo: "completar", q: "En la batalla de ___ (711) los musulmanes derrotaron a los visigodos.", respuestas: ["Guadalete"], explica: "Fue el inicio de la conquista musulmana." },
      { tipo: "opcion", q: "¿Quién proclamó el califato de Córdoba en 929?", opciones: ["Abderramán I", "Abderramán III", "Almanzor", "Recaredo"], correcta: 1, explica: "Abderramán III convirtió el emirato en califato." },
      { tipo: "vf", q: "En al-Ándalus solo vivían musulmanes.", correcta: false, explica: "También había cristianos (mozárabes) y judíos." },
      { tipo: "opcion", q: "¿Qué aportaron los musulmanes a la agricultura?", opciones: ["El arado de hierro", "El regadío y nuevos cultivos", "La trashumancia", "El cultivo del trigo"], correcta: 1, explica: "Introdujeron acequias, arroz, cítricos y algodón." },
      { tipo: "completar", q: "Los reinos en que se dividió al-Ándalus desde 1031 se llaman ___.", respuestas: ["taifas"], explica: "Su debilidad facilitó el avance cristiano." },
      { tipo: "opcion", q: "¿Qué edificio es una joya de al-Ándalus?", opciones: ["La mezquita de Córdoba", "El Escorial", "La catedral de Santiago", "El Palacio Real"], correcta: 0, explica: "Se empezó a construir en el siglo VIII." },
      { tipo: "vf", q: "La monarquía visigoda era hereditaria, siempre de padre a hijo.", correcta: false, explica: "Era electiva: los nobles elegían al rey." }
    ]
  },
  {
    id: "s7",
    numero: 7,
    titulo: "La Edad Media: los reinos cristianos",
    emoji: "⚔️",
    color: "#7a6a4f",
    resumen: [
      "En 722, en Covadonga, un grupo de cristianos derrotó a los musulmanes. Fue el inicio del reino de Asturias, que luego se convirtió en el reino de León.",
      "Con el tiempo nacieron Castilla, Navarra, Aragón y los condados catalanes. Todos avanzaron hacia el sur: es la Reconquista.",
      "Los reyes repoblaban las tierras conquistadas con campesinos y concedían fueros o privilegios a las ciudades.",
      "En 1212 la victoria de Las Navas de Tolosa abrió el avance cristiano. En 1236 se tomó Córdoba, en 1248 Sevilla y en 1492 Granada.",
      "La economía se basaba en la agricultura y la ganadería. La Mesta controlaba la trashumancia de las ovejas y el comercio de la lana.",
      "La sociedad era estamental: nobleza, clero y pueblo llano, además de judíos y mudéjares. No se pasaba de un estamento a otro con facilidad.",
      "El Camino de Santiago impulsó el comercio y el arte románico y gótico. También nacieron las lenguas romances y las primeras Cortes."
    ],
    vocabulario: [
      { p: "Reconquista", d: "Avance de los reinos cristianos hacia el sur de la península." },
      { p: "Repoblación", d: "Asentamiento de habitantes en las tierras conquistadas." },
      { p: "Fuero", d: "Conjunto de privilegios y normas de una ciudad." },
      { p: "Mesta", d: "Asociación de ganaderos trashumantes de Castilla." },
      { p: "Estamento", d: "Grupo social de la Edad Media con derechos propios." },
      { p: "Mudéjar", d: "Musulmán que vivía en territorio cristiano." }
    ],
    curiosidad: "El Camino de Santiago fue tan importante que impulsó la creación de hospitales, puentes y ciudades a lo largo de toda la ruta.",
    truco: "Reconquista en cuatro fechas: 722 Covadonga, 1212 Navas de Tolosa, 1236 Córdoba y 1492 Granada.",
    preguntas: [
      { tipo: "completar", q: "La Reconquista comenzó en 722 con la batalla de ___.", respuestas: ["Covadonga"], explica: "Allí Pelayo derrotó a los musulmanes." },
      { tipo: "opcion", q: "¿Qué reino nació primero en el norte?", opciones: ["Castilla", "Asturias", "Aragón", "Navarra"], correcta: 1, explica: "El reino de Asturias se convirtió después en reino de León." },
      { tipo: "vf", q: "La sociedad medieval era estamental y era difícil cambiar de grupo social.", correcta: true, explica: "Nobleza, clero y pueblo llano tenían derechos distintos." },
      { tipo: "opcion", q: "¿Qué era la Mesta?", opciones: ["Una ciudad", "Una asociación de ganaderos", "Un castillo", "Un impuesto"], correcta: 1, explica: "Controlaba la trashumancia de los rebaños." },
      { tipo: "completar", q: "En 1492 los Reyes Católicos conquistaron ___.", respuestas: ["Granada"], explica: "Fue el final de la Reconquista." },
      { tipo: "opcion", q: "¿Qué ruta impulsó el comercio y el arte en la Edad Media?", opciones: ["La Ruta de la Seda", "El Camino de Santiago", "La Vía Augusta", "El Camino Real"], correcta: 1, explica: "Atrajo peregrinos y comerciantes." },
      { tipo: "vf", q: "Los fueros eran privilegios que los reyes daban a algunas ciudades.", correcta: true, explica: "Les daban ventajas y normas propias." },
      { tipo: "opcion", q: "¿Qué estilo artístico llegó después del románico?", opciones: ["El gótico", "El barroco", "El renacimiento", "El neoclásico"], correcta: 0, explica: "El gótico tiene arcos apuntados y vidrieras." }
    ]
  },
  {
    id: "s8",
    numero: 8,
    titulo: "España a comienzos de la Edad Moderna",
    emoji: "⛵",
    color: "#3f7f8f",
    resumen: [
      "En 1469 se casaron Isabel de Castilla y Fernando de Aragón. En 1479 unieron sus reinos y gobernaron como los Reyes Católicos.",
      "En 1492 conquistaron Granada, expulsaron a los judíos que no se convirtieron y financiaron el viaje de Colón, que llegó a América.",
      "Los Reyes Católicos crearon un ejército permanente, la Inquisición y una monarquía autoritaria, con más poder para el rey.",
      "Carlos I (nieto de los Reyes Católicos) heredó un enorme imperio en Europa y América. En 1519-1522 Magallanes y Elcano dieron la primera vuelta al mundo.",
      "Felipe II gobernó un imperio muy extenso, con la plata americana. Ganó en Lepanto (1571) y perdió la Armada Invencible (1588).",
      "La sociedad tenía nobles, clero, burgueses y campesinos. Los moriscos fueron expulsados en 1609.",
      "América aportó oro, plata, maíz, patata, tomate y cacao, pero la conquista causó la muerte de millones de indígenas."
    ],
    vocabulario: [
      { p: "Monarquía autoritaria", d: "Sistema en el que el rey concentra mucho poder." },
      { p: "Conquista", d: "Dominio de un territorio por la fuerza." },
      { p: "Colonia", d: "Territorio gobernado por otro país." },
      { p: "Imperio", d: "Conjunto de territorios gobernados por un mismo soberano." },
      { p: "Carabela", d: "Embarcación ligera y rápida usada en los viajes atlánticos." },
      { p: "Virrey", d: "Representante del rey en un territorio lejano." }
    ],
    curiosidad: "La primera vuelta al mundo duró tres años (1519-1522): de cinco barcos y unos 250 hombres volvieron una nave y 18 personas.",
    truco: "1492 es el año clave: Granada, América y expulsión de los judíos. Todo en el mismo año.",
    preguntas: [
      { tipo: "completar", q: "En 1492 los Reyes Católicos conquistaron ___.", respuestas: ["Granada"], explica: "Puso fin a la presencia musulmana en la península." },
      { tipo: "opcion", q: "¿Quiénes eran los Reyes Católicos?", opciones: ["Isabel de Castilla y Fernando de Aragón", "Carlos I y Felipe II", "Felipe V y María Luisa", "Juana y Felipe el Hermoso"], correcta: 0, explica: "Unieron Castilla y Aragón en 1479." },
      { tipo: "vf", q: "Colón buscaba una ruta a Asia y llegó a América en 1492.", correcta: true, explica: "Murió sin saber que era un continente nuevo." },
      { tipo: "opcion", q: "¿Quién dio la primera vuelta al mundo?", opciones: ["Colón", "Magallanes y Elcano", "Hernán Cortés", "Pizarro"], correcta: 1, explica: "La expedición salió en 1519 y volvió en 1522." },
      { tipo: "opcion", q: "¿Qué batalla naval ganó Felipe II en 1571?", opciones: ["Lepanto", "Trafalgar", "Las Navas de Tolosa", "Guadalete"], correcta: 0, explica: "Fue una victoria contra los turcos." },
      { tipo: "vf", q: "La Armada Invencible fue una gran victoria española.", correcta: false, explica: "Fue derrotada en 1588 frente a Inglaterra." },
      { tipo: "completar", q: "Los ___ fueron expulsados de España en 1609.", respuestas: ["moriscos"], explica: "Eran musulmanes convertidos al cristianismo." },
      { tipo: "opcion", q: "¿Qué producto llegó de América a Europa?", opciones: ["El trigo", "La patata", "La vid", "El olivo"], correcta: 1, explica: "También llegaron maíz, tomate y cacao." }
    ]
  },
  {
    id: "s9",
    numero: 9,
    titulo: "España en los siglos XVII y XVIII",
    emoji: "🎨",
    color: "#8f5b3f",
    resumen: [
      "En el siglo XVII gobernaron los Austrias menores (Felipe III, Felipe IV y Carlos II), que dejaron el poder en manos de validos.",
      "Fue una época de crisis: guerras, epidemias y pérdida de población. En 1640 se separó Portugal y en 1648 se firmó la Paz de Westfalia.",
      "A la vez, el Siglo de Oro dio grandes artistas y escritores: Cervantes, Lope de Vega, Calderón, Quevedo, Velázquez y Murillo.",
      "En 1700 murió Carlos II sin descendencia. La guerra de Sucesión enfrentó a los Borbones y los Austrias; ganó Felipe V.",
      "La Paz de Utrecht (1713) reconoció a Felipe V y supuso la pérdida de territorios europeos.",
      "Los Borbones centralizaron el Estado con los Decretos de Nueva Planta, que suprimieron los fueros de la Corona de Aragón.",
      "En el siglo XVIII llegó la Ilustración. Carlos III impulsó reformas, academias, obras públicas y la ciencia, aunque mantuvo el poder absoluto."
    ],
    vocabulario: [
      { p: "Valido", d: "Persona de confianza que gobernaba en nombre del rey." },
      { p: "Austria", d: "Dinastía de los Habsburgo, que gobernó España en los siglos XVI y XVII." },
      { p: "Borbón", d: "Dinastía que reina en España desde 1700." },
      { p: "Ilustración", d: "Movimiento del siglo XVIII que confiaba en la razón y la ciencia." },
      { p: "Absolutismo", d: "Sistema en el que el rey tiene todo el poder." }
    ],
    curiosidad: "«Las Meninas» de Velázquez se pintó en 1656 y es una de las obras más admiradas de la historia del arte.",
    truco: "Siglo XVII = Austrias y crisis + Siglo de Oro. Siglo XVIII = Borbones y reformas ilustradas.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué eran los validos?", opciones: ["Ministros elegidos por el pueblo", "Personas que gobernaban por el rey", "Jueces de la Inquisición", "Generales del ejército"], correcta: 1, explica: "Los reyes dejaban en ellos el gobierno." },
      { tipo: "completar", q: "La dinastía que reina en España desde 1700 es la de los ___.", respuestas: ["Borbones", "borbon"], explica: "Felipe V fue el primer rey Borbón." },
      { tipo: "vf", q: "El Siglo de Oro fue una época de gran creación artística y literaria.", correcta: true, explica: "Cervantes, Velázquez y Lope de Vega son ejemplos." },
      { tipo: "opcion", q: "¿Quién pintó «Las Meninas»?", opciones: ["Goya", "Velázquez", "Murillo", "El Greco"], correcta: 1, explica: "Velázquez fue pintor de la corte de Felipe IV." },
      { tipo: "opcion", q: "¿Qué rey impulsó las reformas ilustradas en España?", opciones: ["Felipe II", "Carlos II", "Carlos III", "Felipe V"], correcta: 2, explica: "Carlos III gobernó entre 1759 y 1788." },
      { tipo: "vf", q: "Los Decretos de Nueva Planta respetaron todos los fueros de la Corona de Aragón.", correcta: false, explica: "Los suprimieron y centralizaron el Estado." },
      { tipo: "completar", q: "En 1640 se separó de España el reino de ___.", respuestas: ["Portugal"], explica: "Recuperó su independencia." },
      { tipo: "opcion", q: "¿Qué movimiento del siglo XVIII confiaba en la razón y la ciencia?", opciones: ["La Ilustración", "El Renacimiento", "El Barroco", "El Romanticismo"], correcta: 0, explica: "Influyó en la educación y las reformas." }
    ]
  }
];

/* utilidades de contenido */
function getUnidad(id) {
  return UNIDADES.find(function (u) { return u.id === id; });
}
