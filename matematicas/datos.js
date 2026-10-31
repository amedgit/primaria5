/* ============================================================
   MATEMÁTICAS · 5º PRIMARIA
   Contenido original de estudio, ordenado según el índice
   de Santillana (15 unidades).
   ============================================================ */

const UNIDADES = [
  {
    id: "m1", numero: 1, titulo: "Números naturales", emoji: "🔢", color: "#2f6fb5",
    resumen: [
      "Los números naturales son 0, 1, 2, 3… Sirven para contar, ordenar y medir. No tienen parte decimal.",
      "Cada cifra vale diez veces más que la de su derecha: en 4.725.391, el 7 vale 700.000 (centenas de millar).",
      "Para comparar números, primero se cuentan las cifras; si son iguales, se comparan desde la izquierda.",
      "Para redondear a una unidad, miramos la cifra de la derecha: si es 5 o más, subimos; si es menor, dejamos igual.",
      "Los números romanos usan I, V, X, L, C, D y M. Se suman si van de mayor a menor y se restan si van delante de una mayor (IV = 4, XL = 40).",
      "En una operación combinada, primero los paréntesis, después multiplicaciones y divisiones, y por último sumas y restas."
    ],
    vocabulario: [
      { p: "Valor posicional", d: "Valor que tiene una cifra según el lugar que ocupa." },
      { p: "Redondear", d: "Sustituir un número por otro más próximo y sencillo." },
      { p: "Número romano", d: "Sistema de numeración con letras (I, V, X, L, C, D, M)." },
      { p: "Operación combinada", d: "Operación con varias operaciones y, a veces, paréntesis." }
    ],
    curiosidad: "Los romanos no tenían cero: su sistema empezaba en I. El cero llegó a Europa con los matemáticos árabes.",
    truco: "Para leer un número grande, agrupa de tres en tres desde la derecha: 4.725.391 → 4 millones | 725 mil | 391.",
    preguntas: [
      { tipo: "opcion", q: "En el número 4.725.391, ¿cuánto vale la cifra 7?", opciones: ["700", "7.000", "70.000", "700.000"], correcta: 3, explica: "El 7 ocupa el lugar de las centenas de millar: vale 700.000." },
      { tipo: "completar", q: "El número 3.508.042 se lee: tres millones quinientos ocho mil ___.", respuestas: ["cuarenta y dos"], explica: "3.508.042 = 3 millones + 508 mil + 42." },
      { tipo: "opcion", q: "¿Cuál es 6.847 redondeado a las centenas?", opciones: ["6.800", "6.900", "6.850", "7.000"], correcta: 0, explica: "La cifra de las decenas es 4, menor que 5: se deja 6.800." },
      { tipo: "vf", q: "5.098.765 es mayor que 5.098.675.", correcta: true, explica: "En las centenas, 7 > 6: por eso 5.098.765 es mayor que 5.098.675." },
      { tipo: "opcion", q: "¿Qué número es XLIV?", opciones: ["44", "46", "54", "64"], correcta: 0, explica: "XL = 40 y IV = 4; 40 + 4 = 44." },
      { tipo: "completar", q: "El número romano MCMXCIX equivale a ___.", respuestas: ["1999"], explica: "M = 1000, CM = 900, XC = 90, IX = 9 → 1999." },
      { tipo: "vf", q: "En 8.305.210, la cifra 8 vale 8.000.000.", correcta: true, explica: "Está en el lugar de las unidades de millón." },
      { tipo: "opcion", q: "¿Cuál es el mayor de estos números?", opciones: ["4.099.999", "4.100.000", "4.009.999", "4.100.001"], correcta: 3, explica: "4.100.001 supera a 4.100.000 en una unidad." },
      { tipo: "completar", q: "6 + 4 × 5 = ___.", respuestas: ["26"], explica: "Primero la multiplicación: 4 × 5 = 20; después 6 + 20 = 26." }
    ]
  },
  {
    id: "m2", numero: 2, titulo: "Suma, resta y multiplicación", emoji: "➕", color: "#3f8f5f",
    resumen: [
      "La suma y la multiplicación son conmutativas: el orden no cambia el resultado (7 + 5 = 5 + 7).",
      "La resta no es conmutativa: 9 − 4 no es lo mismo que 4 − 9.",
      "La multiplicación es distributiva: 25 × (10 + 4) = 25 × 10 + 25 × 4.",
      "Para multiplicar por 10, 100 o 1.000 se añaden uno, dos o tres ceros.",
      "En operaciones combinadas: paréntesis → multiplicaciones y divisiones → sumas y restas.",
      "Estimar antes de calcular ayuda a detectar errores: 198 + 305 es aproximadamente 500."
    ],
    vocabulario: [
      { p: "Conmutativa", d: "El orden de los factores no altera el resultado." },
      { p: "Asociativa", d: "Se pueden agrupar los sumandos o factores de distintas formas." },
      { p: "Distributiva", d: "Multiplicar una suma por un número es multiplicar cada sumando." },
      { p: "Estimar", d: "Calcular un resultado aproximado." }
    ],
    curiosidad: "El signo × se empezó a usar en el siglo XVII. Antes se escribía «veces» con palabras.",
    truco: "Paréntesis primero, luego × y ÷, y al final + y −. Si empatan, de izquierda a derecha.",
    preguntas: [
      { tipo: "completar", q: "4.567 + 2.845 = ___.", respuestas: ["7412"], explica: "4.567 + 2.845 = 7.412." },
      { tipo: "opcion", q: "¿Cuánto es 1.234 × 6?", opciones: ["7.404", "7.304", "6.404", "7.414"], correcta: 0, explica: "1.234 × 6 = 7.404." },
      { tipo: "completar", q: "45 × 100 = ___.", respuestas: ["4500"], explica: "Al multiplicar por 100 se añaden dos ceros." },
      { tipo: "opcion", q: "¿Qué propiedad muestra 7 + 5 = 5 + 7?", opciones: ["Asociativa", "Conmutativa", "Distributiva", "Ninguna"], correcta: 1, explica: "Cambiar el orden de los sumandos no cambia la suma." },
      { tipo: "opcion", q: "25 × (10 + 4) es igual a…", opciones: ["250 + 4", "25 × 10 + 25 × 4", "25 + 14", "25 × 10 + 4"], correcta: 1, explica: "Propiedad distributiva: se multiplica cada sumando." },
      { tipo: "completar", q: "6 + 4 × 5 = ___.", respuestas: ["26"], explica: "Primero 4 × 5 = 20; después 6 + 20 = 26." },
      { tipo: "vf", q: "La resta es conmutativa.", correcta: false, explica: "9 − 4 = 5, pero 4 − 9 no es un número natural." },
      { tipo: "opcion", q: "¿Cuánto es 3.000 − 1.275?", opciones: ["1.725", "1.825", "2.725", "1.735"], correcta: 0, explica: "3.000 − 1.275 = 1.725." },
      { tipo: "completar", q: "198 + 305 es aproximadamente ___.", respuestas: ["500"], explica: "200 + 300 = 500; el resultado exacto es 503." }
    ]
  },
  {
    id: "m3", numero: 3, titulo: "División de números naturales", emoji: "➗", color: "#b5652f",
    resumen: [
      "La división reparte una cantidad en partes iguales. Sus términos son dividendo, divisor, cociente y resto.",
      "División exacta: el resto es 0. División inexacta: el resto es distinto de 0 y siempre menor que el divisor.",
      "Prueba de la división: dividendo = divisor × cociente + resto.",
      "Para dividir entre 10, 100 o 1.000 se quitan uno, dos o tres ceros.",
      "Si el divisor tiene dos cifras, se prueba con las primeras cifras del dividendo y se ajusta el cociente.",
      "Las divisiones pueden aparecer en problemas de reparto, agrupación y promedio."
    ],
    vocabulario: [
      { p: "Dividendo", d: "Cantidad que se reparte." },
      { p: "Divisor", d: "Número de partes en que se reparte." },
      { p: "Cociente", d: "Resultado de la división." },
      { p: "Resto", d: "Lo que sobra y no se puede repartir." }
    ],
    curiosidad: "El símbolo ÷ se llama obelus y se usó por primera vez en el siglo XVII.",
    truco: "Comprueba siempre: divisor × cociente + resto = dividendo. Si no cuadra, hay un error.",
    preguntas: [
      { tipo: "completar", q: "4.725 ÷ 5 = ___.", respuestas: ["945"], explica: "4.725 : 5 = 945." },
      { tipo: "opcion", q: "En 2.347 ÷ 6, ¿cuál es el cociente?", opciones: ["391", "390", "401", "381"], correcta: 0, explica: "391 × 6 = 2.346; sobra 1." },
      { tipo: "completar", q: "El dividendo es igual al divisor por el cociente más el ___.", respuestas: ["resto"], explica: "Es la prueba de la división." },
      { tipo: "completar", q: "8.000 ÷ 10 = ___.", respuestas: ["800"], explica: "Al dividir entre 10 se quita un cero." },
      { tipo: "opcion", q: "¿Cuánto es 1.260 ÷ 12?", opciones: ["105", "100", "115", "95"], correcta: 0, explica: "105 × 12 = 1.260." },
      { tipo: "vf", q: "El resto de una división siempre es menor que el divisor.", correcta: true, explica: "Si fuera mayor, se podría seguir dividiendo." },
      { tipo: "completar", q: "3.600 ÷ 40 = ___.", respuestas: ["90"], explica: "90 × 40 = 3.600." },
      { tipo: "opcion", q: "En una división exacta, el resto es…", opciones: ["0", "1", "Igual al divisor", "No existe"], correcta: 0, explica: "Exacta significa que no sobra nada." },
      { tipo: "completar", q: "Si el divisor es 7, el cociente 12 y el resto 3, el dividendo es ___.", respuestas: ["87"], explica: "7 × 12 + 3 = 84 + 3 = 87." }
    ]
  },
  {
    id: "m4", numero: 4, titulo: "Múltiplos y divisores", emoji: "🧩", color: "#7c6bbf",
    resumen: [
      "Los múltiplos de un número se obtienen multiplicándolo por 0, 1, 2, 3… Son infinitos.",
      "Los divisores de un número lo dividen exactamente. Son finitos y siempre incluyen el 1 y el propio número.",
      "Criterios de divisibilidad: por 2 si acaba en cifra par; por 3 si la suma de sus cifras es múltiplo de 3; por 5 si acaba en 0 o 5; por 10 si acaba en 0.",
      "Un número primo solo tiene dos divisores: 1 y él mismo (2, 3, 5, 7, 11…). Si tiene más, es compuesto.",
      "El mínimo común múltiplo (m.c.m.) es el menor múltiplo común distinto de 0.",
      "El máximo común divisor (m.c.d.) es el mayor divisor común."
    ],
    vocabulario: [
      { p: "Múltiplo", d: "Resultado de multiplicar un número por otro natural." },
      { p: "Divisor", d: "Número que divide a otro de forma exacta." },
      { p: "Primo", d: "Número con solo dos divisores: 1 y él mismo." },
      { p: "m.c.m.", d: "Mínimo común múltiplo." },
      { p: "m.c.d.", d: "Máximo común divisor." }
    ],
    curiosidad: "El 1 no es primo ni compuesto: solo tiene un divisor, él mismo.",
    truco: "Múltiplos: multiplico. Divisores: divido. Primo: solo 1 y él.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál de estos números es múltiplo de 6?", opciones: ["24", "20", "15", "34"], correcta: 0, explica: "24 = 6 × 4." },
      { tipo: "opcion", q: "¿Cuántos divisores tiene 18?", opciones: ["4", "5", "6", "8"], correcta: 2, explica: "1, 2, 3, 6, 9 y 18." },
      { tipo: "completar", q: "El m.c.m. de 4 y 6 es ___.", respuestas: ["12"], explica: "Múltiplos de 4: 4, 8, 12…; de 6: 6, 12…" },
      { tipo: "completar", q: "El m.c.d. de 12 y 18 es ___.", respuestas: ["6"], explica: "Divisores comunes: 1, 2, 3 y 6." },
      { tipo: "opcion", q: "¿Cuál es un número primo?", opciones: ["9", "15", "17", "21"], correcta: 2, explica: "17 solo se divide entre 1 y 17." },
      { tipo: "opcion", q: "¿Qué número es divisible por 3?", opciones: ["4.521", "4.522", "4.523", "4.524"], correcta: 0, explica: "4+5+2+1 = 12, que es múltiplo de 3." },
      { tipo: "vf", q: "Todos los números impares son primos.", correcta: false, explica: "9 es impar pero 9 = 3 × 3, así que es compuesto." },
      { tipo: "completar", q: "Un número es ___ si solo tiene dos divisores: 1 y él mismo.", respuestas: ["primo"], explica: "Si tiene más divisores, es compuesto." },
      { tipo: "opcion", q: "El 1 es…", opciones: ["Primo", "Compuesto", "Ni primo ni compuesto", "Par"], correcta: 2, explica: "Solo tiene un divisor: él mismo." }
    ]
  },
  {
    id: "m5", numero: 5, titulo: "Fracciones. Suma y resta", emoji: "🍕", color: "#c2703d",
    resumen: [
      "Una fracción representa partes de un todo. El denominador indica en cuántas partes se divide y el numerador cuántas se toman.",
      "Para calcular una fracción de una cantidad, se divide la cantidad entre el denominador y se multiplica por el numerador.",
      "Para sumar o restar fracciones con el mismo denominador, se suman o restan los numeradores y se mantiene el denominador.",
      "Si los denominadores son distintos, se reducen primero a común denominador (m.c.m.) y después se opera.",
      "Una fracción es propia si el numerador es menor que el denominador, e impropia si es mayor o igual.",
      "Una fracción impropia se puede escribir como número mixto: 7/4 = 1 y 3/4."
    ],
    vocabulario: [
      { p: "Numerador", d: "Número de partes que se toman." },
      { p: "Denominador", d: "Número de partes iguales en que se divide el todo." },
      { p: "Fracción propia", d: "El numerador es menor que el denominador." },
      { p: "Número mixto", d: "Un entero y una fracción, como 1 3/4." }
    ],
    curiosidad: "Las fracciones ya se usaban en el antiguo Egipto, hace más de 4.000 años, para repartir alimentos.",
    truco: "Mismo denominador: opera solo arriba. Distinto denominador: primero iguala abajo.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuánto es 3/8 + 2/8?", opciones: ["5/8", "5/16", "6/8", "1/8"], correcta: 0, explica: "Se suman los numeradores: 3 + 2 = 5." },
      { tipo: "opcion", q: "7/9 − 4/9 =", opciones: ["3/9", "3/18", "11/9", "4/9"], correcta: 0, explica: "7 − 4 = 3; se mantiene el 9." },
      { tipo: "completar", q: "2/5 de 30 = ___.", respuestas: ["12"], explica: "30 : 5 = 6; 6 × 2 = 12." },
      { tipo: "opcion", q: "1/2 + 1/4 =", opciones: ["2/6", "3/4", "1/6", "2/4"], correcta: 1, explica: "1/2 = 2/4; 2/4 + 1/4 = 3/4." },
      { tipo: "opcion", q: "La fracción 7/4 como número mixto es…", opciones: ["1 3/4", "2 1/4", "1 1/4", "3 1/2"], correcta: 0, explica: "7 = 4 + 3, así que 7/4 = 1 y 3/4." },
      { tipo: "vf", q: "Para sumar fracciones con el mismo denominador se suman los denominadores.", correcta: false, explica: "El denominador se mantiene; solo se suman los numeradores." },
      { tipo: "opcion", q: "5/6 − 1/6 =", opciones: ["4/6", "4/12", "6/6", "5/6"], correcta: 0, explica: "5 − 1 = 4; queda 4/6, que equivale a 2/3." },
      { tipo: "completar", q: "En la fracción 3/7, el 7 es el ___.", respuestas: ["denominador"], explica: "Indica las partes en que se divide el todo." },
      { tipo: "completar", q: "3/4 de 20 = ___.", respuestas: ["15"], explica: "20 : 4 = 5; 5 × 3 = 15." }
    ]
  },
  {
    id: "m6", numero: 6, titulo: "Fracciones equivalentes. Comparación", emoji: "⚖️", color: "#2f8f8a",
    resumen: [
      "Dos fracciones son equivalentes si representan la misma parte del todo: 1/2 = 2/4 = 4/8.",
      "Para obtener fracciones equivalentes se multiplica o divide numerador y denominador por el mismo número.",
      "Simplificar es dividir hasta llegar a la fracción irreducible. Se usa el m.c.d.",
      "Con el mismo denominador, es mayor la que tiene mayor numerador.",
      "Con el mismo numerador, es mayor la que tiene menor denominador.",
      "Con denominadores distintos, se reducen a común denominador o se comparan multiplicando en cruz."
    ],
    vocabulario: [
      { p: "Equivalentes", d: "Fracciones que representan la misma cantidad." },
      { p: "Simplificar", d: "Escribir una fracción con números más pequeños." },
      { p: "Irreducible", d: "Fracción que ya no se puede simplificar más." },
      { p: "Comparar", d: "Decidir cuál de dos o más fracciones es mayor." }
    ],
    curiosidad: "Simplificar una fracción no cambia su valor: 50/100 y 1/2 son la misma cantidad.",
    truco: "Mismo denominador → gana el numerador mayor. Mismo numerador → gana el denominador menor.",
    preguntas: [
      { tipo: "opcion", q: "¿Qué fracción es equivalente a 1/2?", opciones: ["2/3", "3/6", "2/5", "1/4"], correcta: 1, explica: "1/2 = 3/6 al multiplicar por 3." },
      { tipo: "opcion", q: "Simplifica 12/18.", opciones: ["2/3", "3/4", "6/9", "1/2"], correcta: 0, explica: "Dividiendo entre 6: 12/18 = 2/3." },
      { tipo: "opcion", q: "¿Cuál es mayor, 3/4 o 5/8?", opciones: ["3/4", "5/8", "Son iguales", "No se puede saber"], correcta: 0, explica: "3/4 = 6/8, que es mayor que 5/8." },
      { tipo: "completar", q: "Para simplificar dividimos por el ___, el mayor divisor común.", respuestas: ["mcd", "maximo comun divisor"], explica: "El m.c.d. de numerador y denominador." },
      { tipo: "completar", q: "2/3 de 45 = ___.", respuestas: ["30"], explica: "45 : 3 = 15; 15 × 2 = 30." },
      { tipo: "vf", q: "2/3 y 4/6 son equivalentes.", correcta: true, explica: "4/6 se obtiene multiplicando 2/3 por 2." },
      { tipo: "opcion", q: "¿Cuál es irreducible?", opciones: ["6/9", "8/12", "7/9", "10/15"], correcta: 2, explica: "7 y 9 no tienen divisores comunes salvo 1." },
      { tipo: "opcion", q: "¿Cuál es mayor, 2/5 o 2/7?", opciones: ["2/5", "2/7", "Son iguales", "Depende"], correcta: 0, explica: "Con el mismo numerador, es mayor la de menor denominador." },
      { tipo: "completar", q: "20/30 simplificado es 2/___.", respuestas: ["3"], explica: "Dividiendo entre 10: 20/30 = 2/3." }
    ]
  },
  {
    id: "m7", numero: 7, titulo: "Números decimales. Suma y resta", emoji: "🔟", color: "#8a5bbf",
    resumen: [
      "Los números decimales tienen una parte entera y una parte decimal separadas por una coma.",
      "Las cifras decimales son décimas, centésimas, milésimas… Cada una vale diez veces menos que la anterior.",
      "Para leer 3,45: tres unidades y cuarenta y cinco centésimas.",
      "Para comparar decimales se compara primero la parte entera y después las décimas, centésimas…",
      "Para sumar o restar se alinean las comas y se completan con ceros los huecos.",
      "Redondear a las décimas o centésimas es mirar la cifra siguiente: 5 o más sube."
    ],
    vocabulario: [
      { p: "Décima", d: "Cada una de las diez partes iguales de una unidad (0,1)." },
      { p: "Centésima", d: "Cada una de las cien partes iguales (0,01)." },
      { p: "Coma decimal", d: "Separa la parte entera de la decimal." },
      { p: "Redondear", d: "Aproximar a una cifra determinada." }
    ],
    curiosidad: "La coma decimal se empezó a usar en el siglo XVI. Antes se usaban fracciones para los mismos valores.",
    truco: "Suma y resta: coma con coma, y rellena con ceros a la derecha para que no se descuadre.",
    preguntas: [
      { tipo: "opcion", q: "¿Cómo se descompone 3,45?", opciones: ["3 unidades y 45 décimas", "3 unidades y 45 centésimas", "3 unidades y 4 centésimas", "34 unidades y 5 décimas"], correcta: 1, explica: "4 décimas y 5 centésimas = 45 centésimas." },
      { tipo: "opcion", q: "12,7 + 8,45 =", opciones: ["20,15", "21,15", "20,52", "21,05"], correcta: 1, explica: "12,70 + 8,45 = 21,15." },
      { tipo: "opcion", q: "9,2 − 3,75 =", opciones: ["5,45", "5,55", "6,45", "5,35"], correcta: 0, explica: "9,20 − 3,75 = 5,45." },
      { tipo: "vf", q: "4,5 es mayor que 4,45.", correcta: true, explica: "4,50 > 4,45 al comparar las centésimas." },
      { tipo: "opcion", q: "6,278 redondeado a las centésimas es…", opciones: ["6,27", "6,28", "6,3", "6,278"], correcta: 1, explica: "La cifra siguiente (8) es 5 o más: sube a 6,28." },
      { tipo: "completar", q: "En 7,85 la cifra 8 ocupa el lugar de las ___.", respuestas: ["decimas"], explica: "7 unidades, 8 décimas y 5 centésimas." },
      { tipo: "opcion", q: "Ordena de menor a mayor: 0,5 · 0,45 · 0,405", opciones: ["0,405 < 0,45 < 0,5", "0,5 < 0,45 < 0,405", "0,45 < 0,405 < 0,5", "0,405 < 0,5 < 0,45"], correcta: 0, explica: "Se comparan las cifras decimales." },
      { tipo: "opcion", q: "0,7 + 0,35 =", opciones: ["1,05", "0,42", "1,5", "0,105"], correcta: 0, explica: "0,70 + 0,35 = 1,05." },
      { tipo: "completar", q: "El número 2,3 tiene ___ décimas.", respuestas: ["23"], explica: "2,3 = 23/10, es decir, 23 décimas." }
    ]
  },
  {
    id: "m8", numero: 8, titulo: "Multiplicación y división de decimales", emoji: "✖️", color: "#b5562f",
    resumen: [
      "Para multiplicar un decimal por un natural se multiplica sin la coma y se colocan tantos decimales como tenía el número.",
      "Al multiplicar por 10, 100 o 1.000 la coma se desplaza uno, dos o tres lugares a la derecha.",
      "Al dividir por 10, 100 o 1.000 la coma se desplaza a la izquierda.",
      "Para dividir un decimal entre un natural, se divide y al bajar la primera cifra decimal se pone la coma en el cociente.",
      "Para dividir entre un decimal, se multiplican dividendo y divisor por 10, 100… hasta que el divisor sea natural.",
      "Si la división no es exacta, se puede seguir sacando decimales o aproximar el cociente."
    ],
    vocabulario: [
      { p: "Producto", d: "Resultado de una multiplicación." },
      { p: "Cociente", d: "Resultado de una división." },
      { p: "Aproximar", d: "Dar un resultado cercano al exacto." },
      { p: "Desplazar la coma", d: "Mover la coma a la derecha o izquierda según se multiplique o divida." }
    ],
    curiosidad: "Multiplicar por 0,5 es lo mismo que dividir entre 2; por eso 8 × 0,5 = 4.",
    truco: "Multiplicar por 10 → coma a la derecha. Dividir entre 10 → coma a la izquierda.",
    preguntas: [
      { tipo: "opcion", q: "2,5 × 4 =", opciones: ["10", "1", "100", "8,5"], correcta: 0, explica: "25 × 4 = 100; con un decimal: 10,0." },
      { tipo: "opcion", q: "3,75 × 10 =", opciones: ["0,375", "37,5", "375", "3,750"], correcta: 1, explica: "La coma se desplaza un lugar a la derecha." },
      { tipo: "opcion", q: "8,4 ÷ 4 =", opciones: ["2,1", "21", "0,21", "2,4"], correcta: 0, explica: "84 ÷ 4 = 21; con un decimal: 2,1." },
      { tipo: "opcion", q: "6,25 ÷ 0,5 =", opciones: ["12,5", "1,25", "125", "3,125"], correcta: 0, explica: "Equivale a 62,5 ÷ 5 = 12,5." },
      { tipo: "opcion", q: "1,2 × 0,3 =", opciones: ["0,36", "3,6", "0,036", "36"], correcta: 0, explica: "12 × 3 = 36; dos decimales: 0,36." },
      { tipo: "vf", q: "Al multiplicar por 100 la coma se desplaza dos lugares a la derecha.", correcta: true, explica: "3,4 × 100 = 340." },
      { tipo: "opcion", q: "12,6 ÷ 3 =", opciones: ["4,2", "42", "0,42", "4,02"], correcta: 0, explica: "126 ÷ 3 = 42; con un decimal: 4,2." },
      { tipo: "completar", q: "0,75 × 100 = ___.", respuestas: ["75"], explica: "La coma se desplaza dos lugares: 75." },
      { tipo: "opcion", q: "45,6 ÷ 10 =", opciones: ["4,56", "456", "0,456", "45,6"], correcta: 0, explica: "La coma se desplaza un lugar a la izquierda." }
    ]
  },
  {
    id: "m9", numero: 9, titulo: "Fracciones decimales. Porcentajes", emoji: "％", color: "#c28a1e",
    resumen: [
      "Una fracción decimal tiene por denominador 10, 100 o 1.000. Se escribe directamente como número decimal: 3/10 = 0,3.",
      "Un porcentaje es una fracción con denominador 100: 25% = 25/100 = 0,25.",
      "Para calcular un porcentaje de una cantidad, se multiplica la cantidad por el porcentaje y se divide entre 100.",
      "Para pasar de decimal a porcentaje se multiplica por 100; de porcentaje a decimal, se divide entre 100.",
      "Los porcentajes sirven para descuentos, aumentos, impuestos y estadísticas.",
      "El 50% es la mitad, el 25% es la cuarta parte y el 10% es una décima parte."
    ],
    vocabulario: [
      { p: "Fracción decimal", d: "Fracción con denominador 10, 100 o 1.000." },
      { p: "Porcentaje", d: "Fracción de denominador 100; se escribe con %." },
      { p: "Descuento", d: "Cantidad que se resta al precio." },
      { p: "Aumento", d: "Cantidad que se suma al precio." }
    ],
    curiosidad: "El símbolo % evolucionó a partir de la abreviatura «cto» (ciento) usada por comerciantes medievales.",
    truco: "Porcentaje = de cada 100. El 20% de 50 es 10 porque 20 de cada 100 son 10 de 50.",
    preguntas: [
      { tipo: "opcion", q: "3/10 escrito como decimal es…", opciones: ["0,3", "3,0", "0,03", "0,003"], correcta: 0, explica: "3 décimas = 0,3." },
      { tipo: "opcion", q: "El 25% equivale a la fracción…", opciones: ["1/2", "1/4", "1/5", "1/10"], correcta: 1, explica: "25/100 = 1/4." },
      { tipo: "completar", q: "El 20% de 80 es ___.", respuestas: ["16"], explica: "80 × 20 = 1.600; 1.600 : 100 = 16." },
      { tipo: "opcion", q: "0,45 expresado en porcentaje es…", opciones: ["4,5%", "45%", "450%", "0,45%"], correcta: 1, explica: "0,45 × 100 = 45%." },
      { tipo: "opcion", q: "7/100 escrito como decimal es…", opciones: ["0,7", "0,07", "0,007", "7,0"], correcta: 1, explica: "7 centésimas = 0,07." },
      { tipo: "vf", q: "El 50% de una cantidad es su mitad.", correcta: true, explica: "50/100 = 1/2." },
      { tipo: "opcion", q: "Un jersey cuesta 40 € y tiene un 25% de descuento. ¿Cuánto se paga?", opciones: ["30 €", "35 €", "25 €", "10 €"], correcta: 0, explica: "25% de 40 = 10; 40 − 10 = 30 €." },
      { tipo: "completar", q: "El 100% de 63 es ___.", respuestas: ["63"], explica: "El 100% es la cantidad completa." },
      { tipo: "opcion", q: "El 10% de 250 es…", opciones: ["25", "2,5", "50", "10"], correcta: 0, explica: "250 : 10 = 25." }
    ]
  },
  {
    id: "m10", numero: 10, titulo: "Longitud, capacidad y masa", emoji: "📏", color: "#3f7fb5",
    resumen: [
      "La longitud se mide en km, hm, dam, m, dm, cm y mm. La unidad principal es el metro.",
      "La capacidad se mide en kl, hl, dal, l, dl, cl y ml. La unidad principal es el litro.",
      "La masa se mide en t, q, kg, hg, dag, g, dg, cg y mg. La unidad principal es el gramo.",
      "Cada escalón hacia abajo se multiplica por 10; cada escalón hacia arriba se divide entre 10.",
      "Una expresión incompleja usa una sola unidad (2.300 m); una compleja usa varias (2 km 300 m).",
      "Para operar con medidas, primero se pasa todo a la misma unidad."
    ],
    vocabulario: [
      { p: "Magnitud", d: "Cualidad que se puede medir (longitud, capacidad, masa)." },
      { p: "Unidad principal", d: "Metro, litro o gramo." },
      { p: "Expresión compleja", d: "Usa varias unidades: 1 km 250 m." },
      { p: "Expresión incompleja", d: "Usa una sola unidad: 1.250 m." }
    ],
    curiosidad: "El metro se definió en 1791 como la diezmillonésima parte de la distancia del polo al ecuador.",
    truco: "Baja → multiplica por 10. Sube → divide entre 10. Cada flecha, una coma.",
    preguntas: [
      { tipo: "completar", q: "3 km = ___ m.", respuestas: ["3000"], explica: "De km a m hay tres escalones: 3 × 1.000." },
      { tipo: "completar", q: "2,5 l = ___ ml.", respuestas: ["2500"], explica: "De l a ml hay tres escalones: 2,5 × 1.000." },
      { tipo: "completar", q: "4 kg = ___ g.", respuestas: ["4000"], explica: "De kg a g hay tres escalones: 4 × 1.000." },
      { tipo: "opcion", q: "750 cm son…", opciones: ["7,5 m", "75 m", "0,75 m", "7.500 m"], correcta: 0, explica: "100 cm = 1 m; 750 : 100 = 7,5 m." },
      { tipo: "completar", q: "1,5 t = ___ kg.", respuestas: ["1500"], explica: "1 t = 1.000 kg." },
      { tipo: "vf", q: "1 kl equivale a 1.000 litros.", correcta: true, explica: "kl → hl → dal → l: tres escalones ×10." },
      { tipo: "opcion", q: "2 km 300 m son…", opciones: ["2.300 m", "230 m", "23.000 m", "2.030 m"], correcta: 0, explica: "2 km = 2.000 m; + 300 m = 2.300 m." },
      { tipo: "opcion", q: "3.500 g son…", opciones: ["3 kg 500 g", "35 kg", "3 kg 5 g", "350 g"], correcta: 0, explica: "3.000 g = 3 kg; quedan 500 g." },
      { tipo: "completar", q: "45 dm = ___ cm.", respuestas: ["450"], explica: "De dm a cm se multiplica por 10." }
    ]
  },
  {
    id: "m11", numero: 11, titulo: "Superficie", emoji: "🟩", color: "#4f9d47",
    resumen: [
      "La superficie es la medida de una figura de dos dimensiones. Su unidad principal es el metro cuadrado (m²).",
      "Las unidades de superficie van de 100 en 100: 1 m² = 100 dm², 1 dm² = 100 cm².",
      "Para pasar a una unidad menor se multiplica por 100 por cada escalón; para una mayor, se divide.",
      "Las unidades agrarias miden campos: hectárea (ha) = 10.000 m² y área (a) = 100 m².",
      "El área de una figura es la cantidad de superficie que ocupa.",
      "No se deben confundir unidades de longitud (m) con unidades de superficie (m²)."
    ],
    vocabulario: [
      { p: "Superficie", d: "Extensión de una figura en dos dimensiones." },
      { p: "Metro cuadrado", d: "Superficie de un cuadrado de 1 m de lado." },
      { p: "Hectárea", d: "Unidad agraria igual a 10.000 m²." },
      { p: "Área", d: "Medida de la superficie de una figura." }
    ],
    curiosidad: "Un campo de fútbol mide unos 7.000 m², menos de una hectárea.",
    truco: "Superficie: cada escalón ×100 o ÷100 (dos ceros), no ×10.",
    preguntas: [
      { tipo: "completar", q: "1 m² = ___ dm².", respuestas: ["100"], explica: "Las unidades de superficie van de 100 en 100." },
      { tipo: "completar", q: "1 dm² = ___ cm².", respuestas: ["100"], explica: "1 dm = 10 cm; 10 × 10 = 100 cm²." },
      { tipo: "opcion", q: "3 m² son…", opciones: ["300 dm²", "30 dm²", "30.000 cm²", "3.000 dm²"], correcta: 2, explica: "3 m² = 300 dm² = 30.000 cm²." },
      { tipo: "completar", q: "1 ha = ___ m².", respuestas: ["10000"], explica: "Una hectárea son 10.000 m²." },
      { tipo: "vf", q: "Para pasar de m² a dm² se multiplica por 100.", correcta: true, explica: "Cada escalón de superficie vale 100." },
      { tipo: "opcion", q: "4,5 m² son…", opciones: ["450 dm²", "45 dm²", "4.500 dm²", "0,45 dm²"], correcta: 0, explica: "4,5 × 100 = 450 dm²." },
      { tipo: "opcion", q: "20.000 m² son…", opciones: ["2 ha", "20 ha", "200 ha", "0,2 ha"], correcta: 0, explica: "20.000 : 10.000 = 2 ha." },
      { tipo: "completar", q: "1 km² = ___ m².", respuestas: ["1000000"], explica: "1 km = 1.000 m; 1.000 × 1.000 = 1.000.000 m²." },
      { tipo: "opcion", q: "¿Cuál es una unidad de superficie?", opciones: ["El metro", "El metro cuadrado", "El litro", "El gramo"], correcta: 1, explica: "El m² mide superficie; el metro mide longitud." }
    ]
  },
  {
    id: "m12", numero: 12, titulo: "Sistema sexagesimal", emoji: "🕒", color: "#8a6a3b",
    resumen: [
      "El sistema sexagesimal tiene base 60. Se usa para medir ángulos y tiempo.",
      "Un grado tiene 60 minutos (1° = 60') y un minuto tiene 60 segundos (1' = 60'').",
      "Una hora tiene 60 minutos y un minuto 60 segundos.",
      "Para sumar o restar medidas, se agrupan por unidades y se pasa de 60 en 60.",
      "Para pasar de forma compleja a incompleja se multiplica por 60; al revés, se divide.",
      "2 h 15 min = 135 min; 135 min = 2 h 15 min."
    ],
    vocabulario: [
      { p: "Grado", d: "Unidad de medida de ángulos; se escribe °." },
      { p: "Minuto", d: "Cada una de las 60 partes de un grado o de una hora." },
      { p: "Segundo", d: "Cada una de las 60 partes de un minuto." },
      { p: "Forma compleja", d: "Usa varias unidades: 2 h 15 min." }
    ],
    curiosidad: "La base 60 viene de los babilonios, hace más de 4.000 años. Por eso dividimos la hora en 60 minutos.",
    truco: "Cuando llegues a 60, cambias de unidad: 60'' = 1', 60' = 1°, 60 min = 1 h.",
    preguntas: [
      { tipo: "completar", q: "1 h = ___ min.", respuestas: ["60"], explica: "La hora tiene 60 minutos." },
      { tipo: "completar", q: "2 h 15 min = ___ min.", respuestas: ["135"], explica: "2 × 60 = 120; 120 + 15 = 135." },
      { tipo: "opcion", q: "90 min son…", opciones: ["1 h 30 min", "1 h 90 min", "2 h 30 min", "1 h 15 min"], correcta: 0, explica: "90 = 60 + 30." },
      { tipo: "opcion", q: "45° 30' + 30° 45' =", opciones: ["75° 75'", "76° 15'", "75° 15'", "76° 75'"], correcta: 1, explica: "75' = 1° 15'; total 76° 15'." },
      { tipo: "completar", q: "1° = ___ minutos.", respuestas: ["60"], explica: "Un grado son 60 minutos." },
      { tipo: "vf", q: "El sistema sexagesimal tiene base 60.", correcta: true, explica: "Por eso 60 unidades forman una del orden superior." },
      { tipo: "opcion", q: "3 h 20 min + 1 h 50 min =", opciones: ["5 h 10 min", "4 h 70 min", "5 h 70 min", "4 h 10 min"], correcta: 0, explica: "70 min = 1 h 10 min; total 5 h 10 min." },
      { tipo: "opcion", q: "2° 15' son…", opciones: ["135'", "215'", "75'", "120'"], correcta: 0, explica: "2 × 60 = 120; 120 + 15 = 135'." },
      { tipo: "completar", q: "180 min = ___ h.", respuestas: ["3"], explica: "180 : 60 = 3." }
    ]
  },
  {
    id: "m13", numero: 13, titulo: "Figuras planas", emoji: "🔺", color: "#b5567f",
    resumen: [
      "Un polígono es una figura plana cerrada formada por segmentos. Sus elementos son lados, vértices y ángulos.",
      "Los polígonos regulares tienen todos los lados y ángulos iguales; los irregulares, no.",
      "Los triángulos tienen 3 lados. Según sus lados: equilátero, isósceles o escaleno; según sus ángulos: rectángulo, acutángulo u obtusángulo.",
      "Los cuadriláteros tienen 4 lados. Los paralelogramos tienen los lados paralelos dos a dos: cuadrado, rectángulo, rombo y romboide.",
      "La circunferencia es la línea curva cerrada; el círculo es la superficie que encierra.",
      "En la circunferencia, el radio es la mitad del diámetro."
    ],
    vocabulario: [
      { p: "Polígono", d: "Figura plana cerrada formada por segmentos." },
      { p: "Vértice", d: "Punto donde se unen dos lados." },
      { p: "Paralelogramo", d: "Cuadrilátero con lados paralelos dos a dos." },
      { p: "Radio", d: "Segmento del centro a un punto de la circunferencia." },
      { p: "Diámetro", d: "Segmento que pasa por el centro y une dos puntos." }
    ],
    curiosidad: "La circunferencia y el círculo tienen infinitos ejes de simetría: cualquier recta que pase por el centro.",
    truco: "Triángulos por lados: 3 iguales (equilátero), 2 iguales (isósceles), 0 iguales (escaleno).",
    preguntas: [
      { tipo: "opcion", q: "Un triángulo equilátero tiene…", opciones: ["3 lados iguales", "2 lados iguales", "Todos distintos", "4 lados"], correcta: 0, explica: "Equilátero = lados iguales." },
      { tipo: "opcion", q: "Un cuadrilátero con lados paralelos dos a dos es un…", opciones: ["Trapecio", "Paralelogramo", "Trapezoide", "Pentágono"], correcta: 1, explica: "Cuadrado, rectángulo, rombo y romboide son paralelogramos." },
      { tipo: "vf", q: "El radio mide la mitad del diámetro.", correcta: true, explica: "Diámetro = 2 × radio." },
      { tipo: "completar", q: "Un pentágono tiene ___ vértices.", respuestas: ["5"], explica: "Tantos vértices como lados." },
      { tipo: "opcion", q: "Un triángulo con un ángulo recto se llama…", opciones: ["Acutángulo", "Obtusángulo", "Rectángulo", "Equilátero"], correcta: 2, explica: "Tiene un ángulo de 90°." },
      { tipo: "vf", q: "Un cuadrado es un paralelogramo.", correcta: true, explica: "Tiene los lados paralelos dos a dos." },
      { tipo: "completar", q: "Si el diámetro mide 10 cm, el radio mide ___ cm.", respuestas: ["5"], explica: "El radio es la mitad del diámetro." },
      { tipo: "opcion", q: "¿Cuál NO es un polígono?", opciones: ["Triángulo", "Cuadrado", "Círculo", "Pentágono"], correcta: 2, explica: "El círculo no está formado por segmentos." },
      { tipo: "opcion", q: "Un rombo tiene…", opciones: ["4 lados iguales", "3 lados iguales", "4 ángulos rectos", "5 lados"], correcta: 0, explica: "Sus cuatro lados son iguales, pero sus ángulos no son rectos." }
    ]
  },
  {
    id: "m14", numero: 14, titulo: "Perímetro y área de figuras planas", emoji: "📐", color: "#2f8f9f",
    resumen: [
      "El perímetro es la suma de todos los lados de una figura y se mide en unidades de longitud (cm, m…).",
      "El área es la superficie que ocupa y se mide en unidades cuadradas (cm², m²…).",
      "Área del cuadrado = lado × lado. Área del rectángulo = base × altura.",
      "Área del triángulo = base × altura ÷ 2.",
      "Área del rombo = diagonal mayor × diagonal menor ÷ 2. Área del trapecio = (base mayor + base menor) × altura ÷ 2.",
      "Longitud de la circunferencia = 2 × π × radio. Área del círculo = π × radio²."
    ],
    vocabulario: [
      { p: "Perímetro", d: "Suma de los lados de una figura." },
      { p: "Área", d: "Superficie que ocupa una figura." },
      { p: "Base", d: "Lado sobre el que se apoya la figura." },
      { p: "Altura", d: "Distancia perpendicular entre la base y el lado opuesto." }
    ],
    curiosidad: "π (pi) vale aproximadamente 3,1416 y se usa para calcular círculos desde la antigüedad.",
    truco: "Perímetro: suma de lados (una dimensión). Área: base × altura (dos dimensiones, al cuadrado).",
    preguntas: [
      { tipo: "completar", q: "El perímetro de un cuadrado de 7 cm de lado es ___ cm.", respuestas: ["28"], explica: "4 × 7 = 28 cm." },
      { tipo: "completar", q: "El área de un rectángulo de 8 cm × 5 cm es ___ cm².", respuestas: ["40"], explica: "8 × 5 = 40 cm²." },
      { tipo: "completar", q: "El área de un triángulo de base 10 cm y altura 6 cm es ___ cm².", respuestas: ["30"], explica: "10 × 6 ÷ 2 = 30 cm²." },
      { tipo: "completar", q: "El área de un cuadrado de 6 cm de lado es ___ cm².", respuestas: ["36"], explica: "6 × 6 = 36 cm²." },
      { tipo: "completar", q: "El perímetro de un rectángulo de 9 cm × 4 cm es ___ cm.", respuestas: ["26"], explica: "2 × (9 + 4) = 26 cm." },
      { tipo: "opcion", q: "El área de un círculo de radio 5 cm (π ≈ 3,14) es…", opciones: ["78,5 cm²", "31,4 cm²", "15,7 cm²", "157 cm²"], correcta: 0, explica: "3,14 × 25 = 78,5 cm²." },
      { tipo: "vf", q: "El área se mide en unidades cuadradas.", correcta: true, explica: "cm², m²… porque mide superficie." },
      { tipo: "completar", q: "El área de un rombo de diagonales 8 cm y 6 cm es ___ cm².", respuestas: ["24"], explica: "8 × 6 ÷ 2 = 24 cm²." },
      { tipo: "opcion", q: "¿Qué mide el perímetro?", opciones: ["La superficie", "El contorno", "El volumen", "La masa"], correcta: 1, explica: "Es la longitud del contorno." }
    ]
  },
  {
    id: "m15", numero: 15, titulo: "Probabilidad y estadística", emoji: "🎲", color: "#6b7280",
    resumen: [
      "La probabilidad mide la posibilidad de que ocurra un suceso. Va de 0 (imposible) a 1 (seguro).",
      "Probabilidad = casos favorables ÷ casos posibles.",
      "La frecuencia absoluta es el número de veces que se repite un dato; la relativa es esa frecuencia dividida entre el total.",
      "La media se calcula sumando todos los datos y dividiendo entre el número de datos.",
      "La moda es el dato que más se repite; la mediana, el valor central al ordenar los datos.",
      "Los gráficos de barras comparan categorías; los lineales muestran evolución; los de sectores, partes de un total."
    ],
    vocabulario: [
      { p: "Probabilidad", d: "Medida de la posibilidad de un suceso." },
      { p: "Frecuencia absoluta", d: "Veces que aparece un dato." },
      { p: "Media", d: "Suma de los datos dividida entre el número de datos." },
      { p: "Moda", d: "Dato que más se repite." },
      { p: "Mediana", d: "Valor central de los datos ordenados." }
    ],
    curiosidad: "Si tiras una moneda muchas veces, el número de caras se acerca al 50%: es la ley de los grandes números.",
    truco: "Probabilidad: favorables entre posibles. Media: suma y divide. Moda: la que más sale.",
    preguntas: [
      { tipo: "opcion", q: "¿Cuál es la probabilidad de sacar un 3 con un dado?", opciones: ["1/6", "1/3", "3/6", "1/2"], correcta: 0, explica: "Hay un caso favorable de seis posibles." },
      { tipo: "completar", q: "La probabilidad de un suceso imposible es ___.", respuestas: ["0"], explica: "Nunca puede ocurrir." },
      { tipo: "completar", q: "La media de 4, 6 y 8 es ___.", respuestas: ["6"], explica: "(4 + 6 + 8) : 3 = 18 : 3 = 6." },
      { tipo: "completar", q: "La moda de 2, 3, 3, 5 y 7 es ___.", respuestas: ["3"], explica: "El 3 se repite más veces." },
      { tipo: "opcion", q: "La probabilidad de un suceso seguro es…", opciones: ["0", "1", "1/2", "100"], correcta: 1, explica: "Siempre ocurre: probabilidad 1 (o 100%)." },
      { tipo: "vf", q: "La frecuencia absoluta es el número de veces que se repite un dato.", correcta: true, explica: "Se cuenta cuántas veces aparece." },
      { tipo: "completar", q: "La media de 5, 7, 9 y 11 es ___.", respuestas: ["8"], explica: "32 : 4 = 8." },
      { tipo: "opcion", q: "¿Qué gráfico compara mejor varias categorías?", opciones: ["De barras", "Lineal", "Un mapa", "Una recta"], correcta: 0, explica: "Las barras comparan cantidades de cada categoría." },
      { tipo: "opcion", q: "Sacar un 7 con un dado de 6 caras es un suceso…", opciones: ["Seguro", "Posible", "Imposible", "Probable"], correcta: 2, explica: "No hay ningún 7 en el dado." }
    ]
  }
];

function getUnidad(id) {
  return UNIDADES.find(function (u) { return u.id === id; });
}
