/* ============================================================
   LENGUA CASTELLANA · 5º PRIMARIA
   Contenido original, ordenado según las 15 lecturas del índice.
   Los textos son propios: no reproducen el libro.
   ============================================================ */

const UNIDADES = [
  {
    id: "l1", numero: 1, titulo: "El juez hábil", emoji: "⚖️", color: "#8a6a3b",
    texto: {
      titulo: "El juez hábil",
      parrafos: [
        "Dos hombres llegaron ante el juez discutiendo por una bolsa de monedas. Cada uno aseguraba que la había encontrado primero.",
        "El juez les pidió que describieran la bolsa. Uno dijo que era de cuero rojo y que tenía un nudo doble. El otro afirmó que era de tela azul y que estaba abierta.",
        "El juez abrió la bolsa: era de cuero rojo y tenía un nudo doble. Entregó las monedas al primer hombre y explicó al otro que mentir no era el camino."
      ]
    },
    resumen: [
      "La comunicación es el proceso por el que transmitimos información. Necesita emisor, receptor, mensaje y canal.",
      "Según su intención, los textos pueden ser narrativos, descriptivos, expositivos, argumentativos o dialogados.",
      "Una sílaba es cada golpe de voz. En «juez» hay una sola sílaba; en «jue-ces» hay dos.",
      "La sílaba tónica es la que se pronuncia con más fuerza: «juez», «há-bil».",
      "Las palabras agudas llevan la fuerza en la última sílaba y se escriben con tilde si terminan en vocal, -n o -s: «juez» no, «café» sí.",
      "Las palabras llanas llevan la fuerza en la penúltima sílaba y llevan tilde si NO terminan en vocal, -n o -s: «hábil» sí, «juez» no."
    ],
    vocabulario: [
      { p: "Emisor", d: "Quien produce el mensaje." },
      { p: "Receptor", d: "Quien recibe e interpreta el mensaje." },
      { p: "Sílaba tónica", d: "Sílaba que se pronuncia con más fuerza." },
      { p: "Palabra aguda", d: "Su sílaba tónica es la última." },
      { p: "Palabra llana", d: "Su sílaba tónica es la penúltima." }
    ],
    curiosidad: "La palabra «juez» tiene una sola sílaba, aunque parezca que se pronuncia en dos golpes de voz.",
    truco: "Aguda: última + vocal/-n/-s → tilde. Llana: penúltima y NO vocal/-n/-s → tilde.",
    preguntas: [
      { tipo: "opcion", q: "¿Quién encontró primero la bolsa según el texto?", opciones: ["Nadie lo sabe con certeza", "El hombre del cuero rojo", "El hombre de la tela azul", "El juez"], correcta: 0, explica: "El texto no lo dice; solo sabemos que el juez descubre quién miente." },
      { tipo: "opcion", q: "¿Cómo descubre el juez la verdad?", opciones: ["Preguntando por la bolsa", "Abriendo la bolsa", "Llamando a la policía", "Contando las monedas"], correcta: 1, explica: "Al abrirla comprueba que era de cuero rojo con nudo doble." },
      { tipo: "completar", q: "La persona que recibe el mensaje se llama ___.", respuestas: ["receptor"], explica: "El emisor lo produce y el receptor lo recibe." },
      { tipo: "opcion", q: "¿Cuál es la sílaba tónica de «hábil»?", opciones: ["há", "bil", "há-bil", "Ninguna"], correcta: 0, explica: "Es una palabra llana: la fuerza está en la penúltima sílaba." },
      { tipo: "opcion", q: "«Café» es una palabra…", opciones: ["Aguda", "Llana", "Esdrújula", "Sobresdrújula"], correcta: 0, explica: "La fuerza está en la última sílaba y termina en vocal: lleva tilde." },
      { tipo: "vf", q: "Las palabras llanas llevan tilde cuando terminan en vocal, -n o -s.", correcta: false, explica: "Es al revés: las llanas NO llevan tilde en esos casos." },
      { tipo: "completar", q: "En «jue-ces», la palabra tiene ___ sílabas.", respuestas: ["2", "dos"], explica: "«Jue» y «ces»." },
      { tipo: "opcion", q: "Un texto que cuenta unos hechos que ocurren a unos personajes es…", opciones: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo"], correcta: 0, explica: "La narración cuenta una historia." }
    ]
  },
  {
    id: "l2", numero: 2, titulo: "El valor de la verdad", emoji: "💬", color: "#2f7fb5",
    texto: {
      titulo: "El valor de la verdad",
      parrafos: [
        "Marta jugaba en el salón cuando, sin querer, tiró el jarrón de su abuela. El jarrón se rompió en mil pedazos.",
        "Cuando llegó su madre, Marta sintió un nudo en el estómago. Podía decir que había sido el gato, pero respiró hondo y confesó la verdad.",
        "Su madre se entristeció por el jarrón, pero la abrazó: «Lo material se puede reponer. La confianza, no»."
      ]
    },
    resumen: [
      "El sustantivo es la palabra que nombra personas, animales, cosas, lugares o ideas: Marta, gato, jarrón, verdad.",
      "Los sustantivos comunes nombran de forma general (niña, ciudad) y los propios, de forma particular (Marta, Madrid).",
      "Pueden ser concretos (se perciben por los sentidos) o abstractos (ideas o sentimientos: verdad, miedo).",
      "El género puede ser masculino o femenino; el número, singular o plural.",
      "Las palabras llanas llevan tilde si no terminan en vocal, -n o -s: «jarrón» (aguda), «árbol» (llana).",
      "Al contar algo, es importante ordenar los hechos: qué pasó primero, después y al final."
    ],
    vocabulario: [
      { p: "Sustantivo propio", d: "Nombra un ser único: Marta, España." },
      { p: "Sustantivo abstracto", d: "Nombra ideas o sentimientos: verdad, alegría." },
      { p: "Confianza", d: "Seguridad que se tiene en alguien." },
      { p: "Confesar", d: "Reconocer algo que se ha hecho." },
      { p: "Género", d: "Masculino o femenino." }
    ],
    curiosidad: "«Verdad» es un sustantivo abstracto: no se puede tocar, pero se puede perder y recuperar.",
    truco: "Para saber si una palabra es aguda o llana, cuéntala desde el final: última sílaba o penúltima.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué rompe Marta?", opciones: ["Un plato", "Un jarrón", "Una ventana", "Un juguete"], correcta: 1, explica: "Tira sin querer el jarrón de su abuela." },
      { tipo: "opcion", q: "¿Qué decide hacer Marta al final?", opciones: ["Culpar al gato", "Decir la verdad", "Esconder los trozos", "Salir corriendo"], correcta: 1, explica: "Confiesa lo que ha pasado." },
      { tipo: "completar", q: "«Marta» es un sustantivo ___.", respuestas: ["propio"], explica: "Nombra a una persona concreta." },
      { tipo: "opcion", q: "¿Cuál es un sustantivo abstracto?", opciones: ["Mesa", "Alegría", "Perro", "Madrid"], correcta: 1, explica: "La alegría es un sentimiento." },
      { tipo: "vf", q: "«Jarrón» es una palabra aguda.", correcta: true, explica: "La fuerza está en la última sílaba y termina en -n: lleva tilde." },
      { tipo: "opcion", q: "El plural de «jarrón» es…", opciones: ["jarrones", "jarróns", "jarronés", "jarrónes"], correcta: 0, explica: "Las palabras terminadas en -n añaden -es." },
      { tipo: "completar", q: "El ___ es quien produce el mensaje.", respuestas: ["emisor"], explica: "El receptor lo recibe." },
      { tipo: "opcion", q: "«Confianza» es un sustantivo…", opciones: ["Concreto", "Abstracto", "Propio", "Colectivo"], correcta: 1, explica: "No se percibe por los sentidos." }
    ]
  },
  {
    id: "l3", numero: 3, titulo: "Medina Azahara", emoji: "🏛️", color: "#b5832f",
    texto: {
      titulo: "Medina Azahara",
      parrafos: [
        "A las afueras de Córdoba se levantan las ruinas de Medina Azahara, una ciudad palatina construida en el siglo X.",
        "Sus salones estaban decorados con arcos, columnas y jardines. Allí vivía la corte del califa y se recibían embajadores.",
        "Hoy sus piedras cuentan la historia de al-Ándalus. Miles de visitantes recorren cada año sus calles y admiran sus restos."
      ]
    },
    resumen: [
      "El adjetivo expresa cualidades del sustantivo y concuerda con él en género y número: ciudad hermosa, jardines verdes.",
      "Los adjetivos pueden ser explicativos (destacan una cualidad propia: nieve blanca) o especificativos (distinguen: coche rojo).",
      "Grados del adjetivo: positivo, comparativo (más… que, tan… como) y superlativo (muy…, -ísimo).",
      "Las palabras esdrújulas llevan la fuerza en la antepenúltima sílaba y SIEMPRE llevan tilde: «pálido», «mágico».",
      "Las palabras sobresdrújulas llevan la fuerza antes de la antepenúltima y también llevan tilde: «dígamelo».",
      "Al describir un lugar se usan adjetivos y se ordena la información: qué es, cómo es y qué se puede ver."
    ],
    vocabulario: [
      { p: "Adjetivo", d: "Palabra que expresa una cualidad del sustantivo." },
      { p: "Concordancia", d: "Coincidencia en género y número." },
      { p: "Esdrújula", d: "Palabra con la fuerza en la antepenúltima sílaba." },
      { p: "Palatino", d: "Relativo al palacio de un rey o califa." },
      { p: "Califa", d: "Jefe político y religioso del califato." }
    ],
    curiosidad: "Medina Azahara fue declarada Patrimonio de la Humanidad en 2018 y es uno de los mayores yacimientos arqueológicos de España.",
    truco: "Esdrújula = siempre tilde. Si dudas, cuenta desde el final: an-te-pe-núl-ti-ma.",
    preguntas: [
      { tipo: "opcion", q: "¿Dónde se encuentra Medina Azahara?", opciones: ["En Sevilla", "En Córdoba", "En Granada", "En Toledo"], correcta: 1, explica: "Está a las afueras de Córdoba." },
      { tipo: "opcion", q: "¿Quién vivía en la ciudad palatina?", opciones: ["La corte del califa", "Los romanos", "Los visigodos", "Los Reyes Católicos"], correcta: 0, explica: "Era la sede de la corte." },
      { tipo: "completar", q: "«Hermosa» es un ___ que acompaña a «ciudad».", respuestas: ["adjetivo"], explica: "Expresa una cualidad del sustantivo." },
      { tipo: "opcion", q: "¿Cuál es esdrújula?", opciones: ["ciudad", "pálido", "jardín", "califa"], correcta: 1, explica: "PÁ-li-do: fuerza en la antepenúltima." },
      { tipo: "vf", q: "Todas las palabras esdrújulas llevan tilde.", correcta: true, explica: "Es una regla fija." },
      { tipo: "opcion", q: "«Más alto que» expresa grado…", opciones: ["Positivo", "Comparativo", "Superlativo", "Ninguno"], correcta: 1, explica: "Compara dos elementos." },
      { tipo: "completar", q: "El adjetivo concuerda con el sustantivo en género y ___.", respuestas: ["numero", "número"], explica: "Ejemplo: jardines verdes." },
      { tipo: "opcion", q: "Un texto que dice cómo es un lugar es…", opciones: ["Descriptivo", "Narrativo", "Argumentativo", "Dialogado"], correcta: 0, explica: "Describe sus características." }
    ]
  },
  {
    id: "l4", numero: 4, titulo: "Galileo Galilei", emoji: "🔭", color: "#3f7f8f",
    texto: {
      titulo: "Galileo Galilei",
      parrafos: [
        "Galileo Galilei nació en Pisa en 1564. Fue matemático, físico y astrónomo.",
        "Con un telescopio que él mismo mejoró, observó la Luna, las manchas solares y cuatro lunas de Júpiter.",
        "Defendió que la Tierra giraba alrededor del Sol, una idea que entonces no todos aceptaban. Murió en 1642, pero sus descubrimientos cambiaron la ciencia."
      ]
    },
    resumen: [
      "Los determinantes acompañan al sustantivo y lo concretan: el, la, un, una, este, mi, tres, algún.",
      "El artículo puede ser determinado (el, la, los, las) o indeterminado (un, una, unos, unas).",
      "Los demostrativos indican cercanía (este, ese, aquel); los posesivos, pertenencia (mi, tu, su).",
      "Los numerales indican cantidad u orden (tres, primero); los indefinidos, cantidad imprecisa (algunos, varios).",
      "Se escribe b antes de consonante y al final de sílaba: «observar», «absoluto»; también en los verbos terminados en -bir: «escribir».",
      "Se escribe v en los adjetivos terminados en -avo, -ave, -ivo: «nuevo», «activo»."
    ],
    vocabulario: [
      { p: "Determinante", d: "Palabra que acompaña y concreta al sustantivo." },
      { p: "Artículo", d: "Determinante que indica si el sustantivo es conocido." },
      { p: "Posesivo", d: "Indica a quién pertenece algo: mi, tu, su." },
      { p: "Astronomía", d: "Ciencia que estudia los astros." },
      { p: "Telescopio", d: "Instrumento para observar objetos lejanos." }
    ],
    curiosidad: "Galileo mejoró tanto el telescopio que pudo ver montañas en la Luna y cuatro lunas de Júpiter.",
    truco: "Antes de -b- o -v- piensa en la familia de palabras: «escribo» → «escrito» con b.",
    preguntas: [
      { tipo: "opcion", q: "¿En qué ciudad nació Galileo?", opciones: ["Roma", "Pisa", "Florencia", "Venecia"], correcta: 1, explica: "Nació en Pisa en 1564." },
      { tipo: "opcion", q: "¿Qué observó con su telescopio?", opciones: ["Las lunas de Júpiter", "Los anillos de Saturno", "Marte", "Un cometa"], correcta: 0, explica: "También la Luna y las manchas solares." },
      { tipo: "completar", q: "«Mi» es un determinante ___.", respuestas: ["posesivo"], explica: "Indica pertenencia." },
      { tipo: "opcion", q: "¿Cuál es un artículo indeterminado?", opciones: ["el", "la", "un", "los"], correcta: 2, explica: "Un, una, unos, unas." },
      { tipo: "vf", q: "«Tres» es un determinante numeral.", correcta: true, explica: "Indica cantidad exacta." },
      { tipo: "opcion", q: "¿Qué palabra está bien escrita?", opciones: ["escribir", "escrivir", "escrivír", "escrivir"], correcta: 0, explica: "Los verbos terminados en -bir se escriben con b." },
      { tipo: "completar", q: "«Nuevo» se escribe con ___.", respuestas: ["v", "uve"], explica: "Los adjetivos en -avo, -ave, -ivo llevan v." },
      { tipo: "opcion", q: "«Este» es un determinante…", opciones: ["Demostrativo", "Posesivo", "Numeral", "Indefinido"], correcta: 0, explica: "Indica cercanía." }
    ]
  },
  {
    id: "l5", numero: 5, titulo: "La Tierra se examina", emoji: "🌍", color: "#3f8f6b",
    texto: {
      titulo: "La Tierra se examina",
      parrafos: [
        "Imagina que la Tierra se sentara en un examen. Las preguntas serían difíciles: ¿por qué sube la temperatura?, ¿quién gasta tanta agua?, ¿qué hacemos con los residuos?",
        "Los científicos responden con datos: el clima cambia por los gases que emitimos, y muchas especies desaparecen por la pérdida de bosques.",
        "Aprobar ese examen depende de todos: reducir, reciclar y cuidar los recursos son respuestas que están en nuestras manos."
      ]
    },
    resumen: [
      "El pronombre sustituye al sustantivo y evita repetirlo: «Ella estudia»; «lo vimos».",
      "Los pronombres personales son yo, tú, él/ella, nosotros, vosotros, ellos/ellas; también me, te, se, lo, la, le.",
      "Un texto expositivo explica un tema de forma ordenada y objetiva: presenta el tema, lo desarrolla y concluye.",
      "Se escriben con g las palabras que acaban en -gen, -ger, -gir, salvo «tejer» y «crujir»: «recoger», «dirigir».",
      "Se escriben con j las palabras terminadas en -aje, -eje, -jero: «viaje», «garaje».",
      "Palabras con g y j se confunden al hablar; conviene memorizar familias: «dirigir» → «dirección»."
    ],
    vocabulario: [
      { p: "Pronombre", d: "Palabra que sustituye al sustantivo." },
      { p: "Texto expositivo", d: "Explica un tema de forma clara y ordenada." },
      { p: "Objetivo", d: "Basado en hechos, sin opiniones personales." },
      { p: "Residuo", d: "Material que sobra y hay que gestionar." },
      { p: "Emisión", d: "Salida de gases o sustancias al aire." }
    ],
    curiosidad: "El texto expositivo suele usar datos, ejemplos y conectores como «por eso», «además» o «en conclusión».",
    truco: "Pronombre: sustituye. Expositivo: explica. Ortografía: -ger/-gir con g; -aje con j.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué pregunta NO aparece en el texto?", opciones: ["¿Por qué sube la temperatura?", "¿Quién gasta tanta agua?", "¿Cuántos planetas hay?", "¿Qué hacemos con los residuos?"], correcta: 2, explica: "El texto no habla del número de planetas." },
      { tipo: "opcion", q: "¿Qué tipo de texto es?", opciones: ["Expositivo", "Narrativo", "Dialogado", "Poético"], correcta: 0, explica: "Explica un tema con datos." },
      { tipo: "completar", q: "«Ella» es un ___.", respuestas: ["pronombre"], explica: "Sustituye a un nombre." },
      { tipo: "opcion", q: "¿Qué pronombre personal es de primera persona del plural?", opciones: ["yo", "tú", "nosotros", "ellos"], correcta: 2, explica: "Nosotros/nosotras." },
      { tipo: "vf", q: "«Viaje» se escribe con j.", correcta: true, explica: "Las palabras terminadas en -aje llevan j." },
      { tipo: "opcion", q: "¿Cuál está bien escrita?", opciones: ["recoger", "recojer", "recogér", "recojer"], correcta: 0, explica: "Los verbos en -ger se escriben con g." },
      { tipo: "completar", q: "«Dirigir» se escribe con ___.", respuestas: ["g"], explica: "Los verbos en -gir llevan g (salvo tejer y crujir)." },
      { tipo: "opcion", q: "Un texto expositivo debe ser…", opciones: ["Objetivo y ordenado", "Inventado", "Con rima", "Dialogado"], correcta: 0, explica: "Presenta hechos de forma clara." }
    ]
  },
  {
    id: "l6", numero: 6, titulo: "El vampiro negro", emoji: "🦇", color: "#5b5f8f",
    texto: {
      titulo: "El vampiro negro",
      parrafos: [
        "Aquella noche, en el pueblo, las farolas parpadearon. Un murciélago enorme cruzó la plaza y se perdió entre los tejados.",
        "Lucía encendió su linterna y siguió el vuelo del animal hasta una casa abandonada. Allí encontró un nido de murciélagos pequeños, no un vampiro.",
        "Al amanecer, el misterio se había convertido en una lección: los murciélagos no chupan sangre humana, pero sí comen insectos."
      ]
    },
    resumen: [
      "El verbo expresa acciones, estados o procesos. Su forma cambia según la persona, el número, el tiempo y el modo.",
      "Las formas verbales tienen raíz y desinencia: «cant-aba» (raíz cant-, desinencia -aba).",
      "El tiempo puede ser pasado, presente o futuro; la persona, primera, segunda o tercera.",
      "Se escriben con h las formas de los verbos haber y hacer, y las palabras que empiezan por hie-, hia-, hue-: «hielo», «hueco».",
      "Los verbos terminados en -ar, -er, -ir forman tres conjugaciones.",
      "En una narración de misterio se usan detalles, silencios y preguntas para crear suspense."
    ],
    vocabulario: [
      { p: "Verbo", d: "Palabra que expresa acción, estado o proceso." },
      { p: "Conjugación", d: "Conjunto de formas de un verbo." },
      { p: "Raíz", d: "Parte del verbo que no cambia." },
      { p: "Desinencia", d: "Parte final que indica persona, tiempo…" },
      { p: "Suspense", d: "Sensación de expectativa e intriga." }
    ],
    curiosidad: "Los murciélagos son los únicos mamíferos que vuelan y se orientan con ultrasonidos: la ecolocalización.",
    truco: "Verbo: raíz + desinencia. Si empieza por hue-/hie-, casi siempre lleva h.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué encuentra Lucía en la casa abandonada?", opciones: ["Un vampiro", "Murciélagos pequeños", "Un tesoro", "A su amigo"], correcta: 1, explica: "Descubre un nido de murciélagos." },
      { tipo: "opcion", q: "¿Qué tipo de texto es?", opciones: ["Narración de misterio", "Texto expositivo", "Poema", "Receta"], correcta: 0, explica: "Cuenta una historia con intriga." },
      { tipo: "completar", q: "En «cantaba», la raíz es «cant-» y la ___ es «-aba».", respuestas: ["desinencia"], explica: "La desinencia aporta la información gramatical." },
      { tipo: "opcion", q: "¿Cuál es un verbo en futuro?", opciones: ["comeré", "comí", "como", "comía"], correcta: 0, explica: "La terminación -é indica futuro." },
      { tipo: "vf", q: "«Hielo» se escribe con h.", correcta: true, explica: "Las palabras que empiezan por hie- llevan h." },
      { tipo: "opcion", q: "¿Cuál está bien escrita?", opciones: ["hacer", "acer", "haser", "hacer con h y s"], correcta: 0, explica: "Las formas de hacer llevan h." },
      { tipo: "completar", q: "Los verbos terminados en -ar pertenecen a la ___ conjugación.", respuestas: ["primera"], explica: "-ar, -er, -ir son las tres conjugaciones." },
      { tipo: "opcion", q: "«Ellos vuelan»: el verbo está en…", opciones: ["Presente", "Pasado", "Futuro", "Condicional"], correcta: 0, explica: "Expresa una acción actual." }
    ]
  },
  {
    id: "l7", numero: 7, titulo: "Apolo y Dafne", emoji: "🏹", color: "#b5567f",
    texto: {
      titulo: "Apolo y Dafne",
      parrafos: [
        "Cuenta el mito que Apolo, orgulloso de su arco, se burló del dios Cupido. Este, para vengarse, lanzó una flecha de amor a Apolo y otra de rechazo a la ninfa Dafne.",
        "Apolo la persiguió sin descanso. Cuando estaba a punto de alcanzarla, Dafne pidió ayuda a su padre, el río, y se transformó en laurel.",
        "Desde entonces, el laurel es el árbol de Apolo y simboliza la gloria de los poetas."
      ]
    },
    resumen: [
      "El mito es un relato tradicional que explica fenómenos naturales o el origen de algo, con dioses y héroes.",
      "El pretérito perfecto simple expresa acciones pasadas y terminadas: «persiguió», «pidió».",
      "El pretérito imperfecto describe acciones pasadas durativas: «perseguía», «corría».",
      "Se escriben con ll las palabras terminadas en -illo, -illa, -ullo: «flecha» no, «laurel» no; «sencillo», «silla».",
      "Se escriben con y las formas verbales que no llevan ll ni v: «huye», «cayó», «oyó».",
      "En los mitos, los personajes suelen representar ideas: el amor, la belleza, la venganza."
    ],
    vocabulario: [
      { p: "Mito", d: "Relato tradicional con dioses o héroes." },
      { p: "Ninfa", d: "Divinidad menor de la naturaleza." },
      { p: "Pretérito", d: "Tiempo verbal que expresa pasado." },
      { p: "Laurel", d: "Árbol asociado a Apolo y a la gloria." },
      { p: "Metamorfosis", d: "Transformación de un ser en otro." }
    ],
    curiosidad: "La escultura «Apolo y Dafne» de Bernini, en Roma, representa el momento exacto de la transformación en laurel.",
    truco: "Pasado terminado: perfecto simple (pidió). Pasado que dura: imperfecto (corría).",
    preguntas: [
      { tipo: "opcion", q: "¿Quién lanza las flechas en el mito?", opciones: ["Apolo", "Cupido", "Dafne", "El río"], correcta: 1, explica: "Cupido se venga de Apolo." },
      { tipo: "opcion", q: "¿En qué se transforma Dafne?", opciones: ["En un río", "En un laurel", "En una estrella", "En un pájaro"], correcta: 1, explica: "Se convierte en laurel." },
      { tipo: "completar", q: "«Persiguió» está en pretérito perfecto ___.", respuestas: ["simple"], explica: "Expresa una acción pasada y terminada." },
      { tipo: "opcion", q: "¿Qué verbo está en imperfecto?", opciones: ["corría", "corrió", "correrá", "corre"], correcta: 0, explica: "Describe una acción pasada que duraba." },
      { tipo: "vf", q: "«Silla» se escribe con ll.", correcta: true, explica: "Las palabras en -illa llevan ll." },
      { tipo: "opcion", q: "¿Cuál está bien escrita?", opciones: ["cayó", "calló", "cayó con ll", "caió"], correcta: 0, explica: "«Cayó» es del verbo caer y se escribe con y." },
      { tipo: "completar", q: "Un relato con dioses que explica el origen de algo es un ___.", respuestas: ["mito"], explica: "Los mitos son relatos tradicionales." },
      { tipo: "opcion", q: "«Laurel» es un sustantivo…", opciones: ["Común", "Propio", "Abstracto", "Colectivo"], correcta: 0, explica: "Nombra un tipo de árbol." }
    ]
  },
  {
    id: "l8", numero: 8, titulo: "Los dos gigantes", emoji: "🌬️", color: "#6b7280",
    texto: {
      titulo: "Los dos gigantes",
      parrafos: [
        "En la llanura vivían dos gigantes de piedra que se creían los más fuertes del mundo. Un día sopló un viento enorme y ambos se rieron de él.",
        "El viento sopló y sopló. Uno de los gigantes se inclinó para resistir; el otro, orgulloso, se quedó quieto y acabó perdiendo un brazo.",
        "El primero comprendió que la fuerza sin flexibilidad no sirve de nada."
      ]
    },
    resumen: [
      "La fábula es un relato breve con animales o seres fantásticos que termina con una moraleja.",
      "Los prefijos son partículas que se añaden al principio de una palabra y cambian su significado: «re-», «des-», «in-», «pre-».",
      "«Rehacer» = volver a hacer; «deshacer» = lo contrario de hacer; «imposible» = no posible.",
      "Se escriben con mayúscula los nombres propios, el inicio de un texto y después de punto.",
      "Los títulos de obras y los nombres de instituciones llevan mayúscula en las palabras principales.",
      "La moraleja es una enseñanza que se extrae del relato."
    ],
    vocabulario: [
      { p: "Fábula", d: "Relato breve con moraleja." },
      { p: "Moraleja", d: "Enseñanza final de una fábula." },
      { p: "Prefijo", d: "Partícula que se añade al inicio de una palabra." },
      { p: "Flexibilidad", d: "Capacidad de adaptarse." },
      { p: "Orgullo", d: "Exceso de estimación propia." }
    ],
    curiosidad: "Las fábulas más antiguas que se conservan son las de Esopo, hace unos 2.500 años.",
    truco: "Prefijo al principio (re-, des-), sufijo al final (-ito, -oso).",
    preguntas: [
      { tipo: "opcion", q: "¿Qué destruye al segundo gigante?", opciones: ["El viento", "Su orgullo", "Un terremoto", "Otro gigante"], correcta: 1, explica: "Se queda quieto por orgullo y pierde un brazo." },
      { tipo: "opcion", q: "¿Qué es una moraleja?", opciones: ["El inicio del cuento", "La enseñanza final", "Un personaje", "El título"], correcta: 1, explica: "Es la lección que se extrae." },
      { tipo: "completar", q: "El prefijo de «deshacer» es ___.", respuestas: ["des"], explica: "Indica lo contrario." },
      { tipo: "opcion", q: "¿Qué palabra lleva prefijo?", opciones: ["rehacer", "hacer", "hecho", "hacía"], correcta: 0, explica: "Re- significa «volver a»." },
      { tipo: "vf", q: "Los nombres propios se escriben con mayúscula.", correcta: true, explica: "Ejemplo: Madrid, Marta." },
      { tipo: "opcion", q: "«Imposible» significa…", opciones: ["Muy posible", "No posible", "Posible otra vez", "Poco probable"], correcta: 1, explica: "El prefijo in-/im- indica negación." },
      { tipo: "completar", q: "«Re-» en «releer» significa ___.", respuestas: ["volver a", "otra vez"], explica: "Volver a leer." },
      { tipo: "opcion", q: "Una fábula suele ser…", opciones: ["Breve", "Muy larga", "Un poema", "Una noticia"], correcta: 0, explica: "Es un relato corto." }
    ]
  },
  {
    id: "l9", numero: 9, titulo: "Odisea en el hielo", emoji: "🧊", color: "#2f8f9f",
    texto: {
      titulo: "Odisea en el hielo",
      parrafos: [
        "El barco quedó atrapado entre bloques de hielo. La tripulación, asustada, se reunió en la cubierta.",
        "El capitán repartió tareas: unos comprobaron los víveres, otros reforzaron la proa y los demás prepararon señales de auxilio.",
        "Tras dos días de esfuerzo, el hielo se abrió y el barco pudo avanzar. Nadie se había rendido."
      ]
    },
    resumen: [
      "Los sufijos son partículas que se añaden al final de una palabra y cambian su significado o categoría: «-ero», «-ista», «-oso», «-ción».",
      "«Pescador» → pesca + -dor; «valiente» → valer + -nte; «navegación» → navegar + -ción.",
      "Se escriben con c las palabras terminadas en -ción cuando provienen de verbos en -ar: «navegar» → «navegación».",
      "Se escriben con z las palabras terminadas en -azo, -eza, -izo: «golpazo», «tristeza».",
      "Se escriben con qu las palabras con sonido /k/ ante e, i: «barquito», «queso».",
      "Los textos de aventuras suelen presentar un conflicto, esfuerzo y superación."
    ],
    vocabulario: [
      { p: "Sufijo", d: "Partícula que se añade al final de una palabra." },
      { p: "Tripulación", d: "Conjunto de personas que trabajan en un barco." },
      { p: "Víveres", d: "Alimentos y provisiones." },
      { p: "Proa", d: "Parte delantera del barco." },
      { p: "Odisea", d: "Viaje lleno de dificultades." }
    ],
    curiosidad: "«Odisea» viene del poema de Homero: un viaje de diez años lleno de peligros.",
    truco: "Sufijo al final: -ción, -oso, -ero. Prefijo al principio: re-, des-.",
    preguntas: [
      { tipo: "opcion", q: "¿Por qué se detiene el barco?", opciones: ["Por una tormenta", "Por el hielo", "Por falta de combustible", "Por una avería"], correcta: 1, explica: "Queda atrapado entre bloques de hielo." },
      { tipo: "opcion", q: "¿Qué hace el capitán?", opciones: ["Abandona el barco", "Reparte tareas", "Duerme", "Pide ayuda por radio"], correcta: 1, explica: "Organiza al grupo." },
      { tipo: "completar", q: "La parte delantera de un barco es la ___.", respuestas: ["proa"], explica: "La parte trasera es la popa." },
      { tipo: "opcion", q: "¿Qué palabra tiene sufijo?", opciones: ["navegación", "barco", "hielo", "capitán"], correcta: 0, explica: "Navegar + -ción." },
      { tipo: "vf", q: "«Tristeza» se escribe con z.", correcta: true, explica: "Las palabras en -eza llevan z." },
      { tipo: "opcion", q: "¿Cuál está bien escrita?", opciones: ["barquito", "barquito con c", "barquitto", "barkito"], correcta: 0, explica: "Ante -i se escribe qu para el sonido /k/." },
      { tipo: "completar", q: "«Pescador» está formado por «pesca» + ___.", respuestas: ["-dor", "dor"], explica: "El sufijo -dor indica oficio." },
      { tipo: "opcion", q: "Un relato de aventuras suele tener…", opciones: ["Un conflicto y superación", "Solo diálogos", "Rima", "Datos científicos"], correcta: 0, explica: "Los personajes afrontan dificultades." }
    ]
  },
  {
    id: "l10", numero: 10, titulo: "El ciervo y el león", emoji: "🦌", color: "#8a5b3f",
    texto: {
      titulo: "El ciervo y el león",
      parrafos: [
        "Un ciervo bebía en el río cuando vio al león acercarse. En lugar de huir, se escondió detrás de unos juncos.",
        "El león pasó de largo, pero el ciervo, al moverse, hizo ruido. El león giró la cabeza y lo descubrió.",
        "El ciervo aprendió que la prudencia no consiste solo en esconderse, sino en quedarse quieto y pensar."
      ]
    },
    resumen: [
      "La oración es un conjunto de palabras con sentido completo. Tiene sujeto y predicado.",
      "El sujeto indica quién realiza la acción; el predicado, qué se dice del sujeto.",
      "El sujeto puede ser léxico (un sustantivo: «el ciervo») o gramatical (elíptico: «corría» → él).",
      "El núcleo del sujeto es un sustantivo o pronombre; el núcleo del predicado, un verbo.",
      "Se escriben con r las palabras con sonido suave entre vocales: «ciervo», «arena».",
      "Se escriben con rr el sonido fuerte entre vocales: «perro», «tierra»."
    ],
    vocabulario: [
      { p: "Oración", d: "Conjunto de palabras con sentido completo." },
      { p: "Sujeto", d: "Quien realiza la acción del verbo." },
      { p: "Predicado", d: "Lo que se dice del sujeto." },
      { p: "Núcleo", d: "Palabra principal del sujeto o del predicado." },
      { p: "Prudencia", d: "Cuidado y sensatez." }
    ],
    curiosidad: "En español, el sujeto puede no aparecer: «Corría por el bosque» tiene sujeto elíptico.",
    truco: "Pregunta «¿quién?» al verbo para encontrar el sujeto.",
    preguntas: [
      { tipo: "opcion", q: "¿Dónde se esconde el ciervo?", opciones: ["Detrás de unos juncos", "En una cueva", "Tras un árbol", "En el agua"], correcta: 0, explica: "Se oculta entre los juncos." },
      { tipo: "opcion", q: "¿Qué error comete el ciervo?", opciones: ["Correr", "Hacer ruido al moverse", "Beber agua", "Dormirse"], correcta: 1, explica: "El ruido revela su escondite." },
      { tipo: "completar", q: "En «El ciervo bebía», el sujeto es «el ___».", respuestas: ["ciervo"], explica: "Es quien realiza la acción." },
      { tipo: "opcion", q: "El núcleo del predicado es…", opciones: ["Un sustantivo", "Un verbo", "Un adjetivo", "Un artículo"], correcta: 1, explica: "En «bebía», el verbo es el núcleo." },
      { tipo: "vf", q: "«Tierra» se escribe con rr.", correcta: true, explica: "Sonido fuerte entre vocales." },
      { tipo: "opcion", q: "¿Cuál está bien escrita?", opciones: ["perro", "pero con rr", "pero", "perró"], correcta: 0, explica: "El sonido fuerte entre vocales se escribe rr." },
      { tipo: "completar", q: "En «Corría por el bosque», el sujeto es ___.", respuestas: ["elíptico", "elipsis", "omitido"], explica: "No aparece, pero se sobreentiende." },
      { tipo: "opcion", q: "Una oración debe tener…", opciones: ["Sentido completo", "Rima", "Muchos adjetivos", "Un diálogo"], correcta: 0, explica: "Es su característica principal." }
    ]
  },
  {
    id: "l11", numero: 11, titulo: "Leopoldo", emoji: "🐕", color: "#b5652f",
    texto: {
      titulo: "Leopoldo",
      parrafos: [
        "Leopoldo era un perro pequeño, tranquilo y muy curioso. Cada mañana, cuando la familia salía, él comenzaba su ronda.",
        "Primero revisaba los zapatos del pasillo; después, el sofá; por último, la cocina. Un día encontró un calcetín bajo la mesa y lo llevó a su cama.",
        "Cuando llegaron sus dueños, no encontraron el calcetín. Leopoldo movía la cola, orgulloso de su tesoro."
      ]
    },
    resumen: [
      "La oración se compone de sujeto y predicado; ambos deben concordar en número y persona.",
      "El punto separa oraciones y párrafos. Puede ser punto y seguido, punto y aparte o punto final.",
      "La coma indica una pausa breve y separa elementos de una enumeración.",
      "Los dos puntos introducen una enumeración o una explicación.",
      "Los signos de interrogación y exclamación se escriben al principio y al final en español.",
      "Un relato breve puede combinar narración y descripción para retratar a un personaje."
    ],
    vocabulario: [
      { p: "Párrafo", d: "Conjunto de oraciones sobre una misma idea." },
      { p: "Enumeración", d: "Lista de elementos separados por comas." },
      { p: "Punto y aparte", d: "Separa párrafos." },
      { p: "Ronda", d: "Recorrido de vigilancia." },
      { p: "Tesoro", d: "Objeto muy valorado por alguien." }
    ],
    curiosidad: "Los perros tienen un olfato hasta 100.000 veces más sensible que el de las personas.",
    truco: "Punto: cierra ideas. Coma: pequeña pausa. Dos puntos: anuncian una lista.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué encuentra Leopoldo?", opciones: ["Un calcetín", "Un hueso", "Una pelota", "Un zapato"], correcta: 0, explica: "Lo encuentra bajo la mesa." },
      { tipo: "opcion", q: "¿Cómo es Leopoldo?", opciones: ["Tranquilo y curioso", "Agresivo", "Miedoso", "Perezoso"], correcta: 0, explica: "El texto lo describe así." },
      { tipo: "completar", q: "El ___ separa párrafos.", respuestas: ["punto y aparte", "punto"], explica: "El punto y aparte cambia de párrafo." },
      { tipo: "opcion", q: "¿Qué signo introduce una enumeración?", opciones: ["La coma", "Los dos puntos", "El punto final", "Las comillas"], correcta: 1, explica: "Los dos puntos anuncian la lista." },
      { tipo: "vf", q: "En español, la interrogación se escribe solo al final.", correcta: false, explica: "Se escribe al principio y al final: ¿…?" },
      { tipo: "opcion", q: "«Leopoldo, el perro, dormía»: las comas…", opciones: ["Separan una aclaración", "Cierran la oración", "Indican exclamación", "No son necesarias"], correcta: 0, explica: "Aíslan el complemento explicativo." },
      { tipo: "completar", q: "Un conjunto de oraciones sobre la misma idea es un ___.", respuestas: ["parrafo", "párrafo"], explica: "Los párrafos organizan el texto." },
      { tipo: "opcion", q: "El sujeto de «Leopoldo movía la cola» es…", opciones: ["Leopoldo", "la cola", "movía", "No hay sujeto"], correcta: 0, explica: "Es quien realiza la acción." }
    ]
  },
  {
    id: "l12", numero: 12, titulo: "A tocar la nariz del rey", emoji: "👑", color: "#a07a2a",
    texto: {
      titulo: "A tocar la nariz del rey",
      parrafos: [
        "Un rey presumía de tener la nariz más grande del reino. Para demostrarlo, ordenó que todo el que quisiera hablar con él debía tocarla.",
        "Los cortesanos obedecían con miedo. Un día llegó un campesino que, en lugar de tocarla, se puso a reír.",
        "«¿De qué te ríes?», preguntó el rey. «De que su nariz es tan grande que no me hace falta tocarla para creérmelo», respondió. El rey, sorprendido, también se rio."
      ]
    },
    resumen: [
      "El campo semántico es un conjunto de palabras con significados relacionados: rey, corona, trono, palacio.",
      "Las comillas se usan para reproducir palabras textuales y para citar títulos.",
      "La raya (—) introduce cada intervención de un diálogo; el guion (-) une palabras o separa sílabas.",
      "En un diálogo, cada personaje que habla ocupa un párrafo y empieza con raya.",
      "Los cuentos populares se transmiten oralmente y suelen tener personajes sencillos y un final sorprendente.",
      "La ironía consiste en decir lo contrario de lo que se quiere dar a entender."
    ],
    vocabulario: [
      { p: "Campo semántico", d: "Palabras relacionadas por su significado." },
      { p: "Comillas", d: "Signos que reproducen palabras textuales." },
      { p: "Raya", d: "Signo que introduce el parlamento de un personaje." },
      { p: "Ironía", d: "Decir lo contrario de lo que se piensa." },
      { p: "Cortesano", d: "Persona que vive en la corte." }
    ],
    curiosidad: "La raya de diálogo (—) es más larga que el guion (-) y se usa al empezar a hablar cada personaje.",
    truco: "Diálogo: raya + mayúscula. Cita textual: comillas.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué ordena el rey?", opciones: ["Tocarle la nariz", "Inclinarse", "Darle un regalo", "Cantar"], correcta: 0, explica: "Quería demostrar que era la más grande." },
      { tipo: "opcion", q: "¿Por qué se ríe el campesino?", opciones: ["Por miedo", "Por la ocurrencia del rey", "Porque está contento", "Porque es un payaso"], correcta: 1, explica: "Le parece absurda la orden." },
      { tipo: "completar", q: "Rey, corona y trono forman un ___ semántico.", respuestas: ["campo"], explica: "Son palabras relacionadas." },
      { tipo: "opcion", q: "¿Qué signo introduce lo que dice un personaje?", opciones: ["La raya", "El guion", "La coma", "El punto"], correcta: 0, explica: "La raya (—)." },
      { tipo: "vf", q: "Las comillas sirven para reproducir palabras textuales.", correcta: true, explica: "También para títulos." },
      { tipo: "opcion", q: "¿Cuál es un campo semántico de «mar»?", opciones: ["ola, marea, arena", "mesa, silla, sofá", "rojo, verde, azul", "correr, saltar, nadar"], correcta: 0, explica: "Son elementos relacionados con el mar." },
      { tipo: "completar", q: "Decir lo contrario de lo que se piensa es usar la ___.", respuestas: ["ironia", "ironía"], explica: "Es un recurso expresivo." },
      { tipo: "opcion", q: "Un cuento popular se transmite…", opciones: ["Oralmente", "Solo por escrito", "Por televisión", "Por cartas"], correcta: 0, explica: "Pasa de generación en generación." }
    ]
  },
  {
    id: "l13", numero: 13, titulo: "La anciana astuta", emoji: "🧶", color: "#8f5b7f",
    texto: {
      titulo: "La anciana astuta",
      parrafos: [
        "Tres ladrones entraron en casa de una anciana. Ella, sin perder la calma, les dijo que guardaba un tesoro en un cofre.",
        "Los ladrones corrieron al cofre. Mientras lo abrían, la anciana salió y cerró la puerta con llave.",
        "Cuando llegó la guardia, los ladrones seguían dentro, discutiendo por un cofre vacío."
      ]
    },
    resumen: [
      "Las frases hechas son expresiones con significado propio que no se deduce de las palabras: «estar en las nubes», «tomar el pelo».",
      "Los refranes son dichos populares con una enseñanza: «Más vale tarde que nunca».",
      "Se escriben con x las palabras que empiezan por extra- o ex-: «extraño», «explicar».",
      "También llevan x palabras como «examen», «éxito», «taxi» y «máximo».",
      "El prefijo extra- significa «fuera de» o «más allá».",
      "Los cuentos populares suelen presentar a un personaje ingenioso que vence con astucia."
    ],
    vocabulario: [
      { p: "Frase hecha", d: "Expresión con significado propio." },
      { p: "Refrán", d: "Dicho popular con enseñanza." },
      { p: "Astucia", d: "Habilidad para conseguir algo con ingenio." },
      { p: "Cofre", d: "Caja fuerte para guardar objetos de valor." },
      { p: "Guardia", d: "Persona o grupo que vigila." }
    ],
    curiosidad: "«Estar en las nubes» no tiene nada que ver con el cielo: significa estar distraído.",
    truco: "Palabras con x: examen, éxito, taxi, explicar, extraño.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué hace la anciana para vencer a los ladrones?", opciones: ["Les da el tesoro", "Los encierra con una trampa", "Llama a la puerta", "Huye"], correcta: 1, explica: "Los engaña con un cofre vacío y los encierra." },
      { tipo: "opcion", q: "¿Qué había en el cofre?", opciones: ["Oro", "Un mapa", "Nada", "Joyas"], correcta: 2, explica: "El cofre estaba vacío." },
      { tipo: "completar", q: "«Estar en las nubes» es una ___.", respuestas: ["frase hecha"], explica: "Tiene un significado figurado." },
      { tipo: "opcion", q: "¿Cuál está bien escrita?", opciones: ["examen", "esamen", "exámen", "eksamen"], correcta: 0, explica: "Se escribe con x y con tilde en la penúltima." },
      { tipo: "vf", q: "«Extraño» se escribe con x.", correcta: true, explica: "Las palabras con extra- llevan x." },
      { tipo: "opcion", q: "¿Qué significa «tomar el pelo»?", opciones: ["Cortar el pelo", "Bromear con alguien", "Peinarse", "Tener frío"], correcta: 1, explica: "Es una frase hecha." },
      { tipo: "completar", q: "«Más vale tarde que nunca» es un ___.", respuestas: ["refran", "refrán"], explica: "Es un dicho popular." },
      { tipo: "opcion", q: "La anciana demuestra…", opciones: ["Astucia", "Fuerza", "Miedo", "Prisa"], correcta: 0, explica: "Vence con ingenio." }
    ]
  },
  {
    id: "l14", numero: 14, titulo: "Un país con demasiados reyes", emoji: "♟️", color: "#5b6b8f",
    texto: {
      titulo: "Un país con demasiados reyes",
      parrafos: [
        "En un país pequeño había tantos reyes que nadie sabía a quién obedecer. Unos querían impuestos altos; otros, bajos; algunos, ninguno.",
        "Los habitantes, cansados, celebraron una asamblea. Decidieron elegir a un solo rey y escribir entre todos las normas.",
        "Desde entonces, el país tuvo un rey y muchas ideas. Y funcionó."
      ]
    },
    resumen: [
      "Los sinónimos son palabras con significado igual o parecido: contento/alegre.",
      "Los antónimos son palabras con significado contrario: alto/bajo.",
      "Las palabras homófonas suenan igual pero se escriben distinto: «hola» (saludo) y «ola» (del mar).",
      "También son homófonas «vaca» (animal) y «baca» (del coche); «haya» (verbo) y «halla» (encontrar).",
      "El contexto ayuda a elegir la palabra correcta.",
      "Un texto puede defender una idea con argumentos: es un texto argumentativo."
    ],
    vocabulario: [
      { p: "Sinónimo", d: "Palabra con significado igual o parecido." },
      { p: "Antónimo", d: "Palabra con significado contrario." },
      { p: "Homófona", d: "Palabra que suena igual que otra." },
      { p: "Asamblea", d: "Reunión para tomar decisiones." },
      { p: "Argumentar", d: "Dar razones para defender una idea." }
    ],
    curiosidad: "«Hola» y «ola» suenan igual, pero una saluda y la otra rompe en la playa.",
    truco: "Sinónimo = igual; antónimo = contrario; homófono = mismo sonido.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué problema tiene el país?", opciones: ["Muchos reyes", "Sequía", "Guerra", "Pocos habitantes"], correcta: 0, explica: "Nadie sabía a quién obedecer." },
      { tipo: "opcion", q: "¿Qué decide la asamblea?", opciones: ["Elegir un rey y escribir normas", "Marcharse", "Poner impuestos", "Construir un castillo"], correcta: 0, explica: "Buscan una solución común." },
      { tipo: "completar", q: "«Alegre» es un sinónimo de ___.", respuestas: ["contento", "feliz"], explica: "Significan lo mismo." },
      { tipo: "opcion", q: "¿Cuál es el antónimo de «alto»?", opciones: ["bajo", "grande", "largo", "ancho"], correcta: 0, explica: "Significado contrario." },
      { tipo: "vf", q: "«Hola» y «ola» son palabras homófonas.", correcta: true, explica: "Suenan igual, se escriben distinto." },
      { tipo: "opcion", q: "«Vaca» y «baca» son…", opciones: ["Sinónimos", "Antónimos", "Homófonas", "Iguales"], correcta: 2, explica: "Suenan igual." },
      { tipo: "completar", q: "Un texto que defiende una idea con razones es ___.", respuestas: ["argumentativo"], explica: "Usa argumentos." },
      { tipo: "opcion", q: "¿Qué palabra está bien usada? «Espero que ___ venido»", opciones: ["haya", "halla", "aya", "haiga"], correcta: 0, explica: "«Haya» es del verbo haber." }
    ]
  },
  {
    id: "l15", numero: 15, titulo: "El emperador bandido", emoji: "🏯", color: "#a0522d",
    texto: {
      titulo: "El emperador bandido",
      parrafos: [
        "Cuenta la leyenda que un bandido asaltaba a los viajeros en un paso de montaña. Un día robó a un anciano que resultó ser un sabio.",
        "El sabio le dijo: «Tienes valor, pero lo usas mal». El bandido reflexionó, devolvió lo robado y comenzó a proteger a los viajeros.",
        "Años después, el pueblo lo eligió emperador. Y nunca olvidó el consejo del anciano."
      ]
    },
    resumen: [
      "Los géneros literarios son narración, lírica y teatro. La leyenda es una narración tradicional con elementos fantásticos.",
      "La lírica expresa sentimientos y suele usar verso, rima y ritmo.",
      "La rima puede ser consonante (coinciden vocales y consonantes) o asonante (solo vocales).",
      "La métrica mide los versos contando sílabas; si el verso acaba en palabra aguda, se suma una sílaba.",
      "El teatro se escribe para ser representado: incluye diálogos y acotaciones.",
      "Una leyenda suele explicar o enseñar algo y se transmite de forma oral."
    ],
    vocabulario: [
      { p: "Leyenda", d: "Narración tradicional con elementos fantásticos." },
      { p: "Lírica", d: "Género que expresa sentimientos." },
      { p: "Rima consonante", d: "Coinciden vocales y consonantes finales." },
      { p: "Métrica", d: "Medida de los versos." },
      { p: "Acotación", d: "Indicación sobre la escena o los personajes." }
    ],
    curiosidad: "En un poema, un verso de 8 sílabas se llama octosílabo y es el más habitual en la poesía popular española.",
    truco: "Rima consonante: todo coincide. Asonante: solo las vocales.",
    preguntas: [
      { tipo: "opcion", q: "¿A quién roba el bandido?", opciones: ["A un anciano sabio", "A un rey", "A un niño", "A un comerciante"], correcta: 0, explica: "El anciano le hace reflexionar." },
      { tipo: "opcion", q: "¿Qué hace el bandido al final?", opciones: ["Sigue robando", "Protege a los viajeros", "Se marcha del país", "Se hace soldado"], correcta: 1, explica: "Cambia su comportamiento." },
      { tipo: "completar", q: "Una narración tradicional con elementos fantásticos es una ___.", respuestas: ["leyenda"], explica: "Se transmite oralmente." },
      { tipo: "opcion", q: "¿Qué género expresa sentimientos?", opciones: ["Lírica", "Narrativa", "Teatro", "Ensayo"], correcta: 0, explica: "La lírica es el género poético." },
      { tipo: "vf", q: "En la rima asonante coinciden vocales y consonantes.", correcta: false, explica: "En la asonante solo coinciden las vocales." },
      { tipo: "opcion", q: "Un verso de 8 sílabas es…", opciones: ["Octosílabo", "Endecasílabo", "Heptasílabo", "Alejandrino"], correcta: 0, explica: "Octo- significa ocho." },
      { tipo: "completar", q: "Las indicaciones de una obra de teatro se llaman ___.", respuestas: ["acotaciones"], explica: "Guían la representación." },
      { tipo: "opcion", q: "«La luna brilla / sobre la orilla» es una rima…", opciones: ["Consonante", "Asonante", "Libre", "No tiene"], correcta: 0, explica: "Coinciden vocales y consonantes: -illa." }
    ]
  }
];

function getUnidad(id) {
  return UNIDADES.find(function (u) { return u.id === id; });
}
