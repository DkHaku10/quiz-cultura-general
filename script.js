// =====================================================
// BANCO DE PREGUNTAS CON DISTRACTORES COHERENTES
// d = distractores temáticos (mismo contexto que la correcta)
// =====================================================
const preguntas = [
  { p: "¿A quién se le conoce como el Caballero de los Mares?", r: ["Miguel Grau Seminario", "Francisco Bolognesi", "Andrés A. Cáceres", "José Olaya"], c: 0,
    d: ["Francisco Bolognesi", "Andrés A. Cáceres", "José Olaya", "Ramón Castilla", "Alfonso Ugarte", "José de San Martín", "Simón Bolívar", "Jorge Chávez"] },
  { p: "¿Cuál es el ave nacional del Perú?", r: ["El cóndor", "El gallito de las rocas", "El pelícano", "La parihuana"], c: 1,
    d: ["El cóndor", "El pelícano", "La parihuana", "El flamenco", "El águila", "El halcón", "La lechuza", "El pingüino"] },
  { p: "¿Cuál es la flor nacional del Perú?", r: ["La rosa", "El girasol", "La flor de la cantuta", "La orquídea"], c: 2,
    d: ["La rosa", "El girasol", "La orquídea", "El clavel", "La margarita", "El tulipán", "La azucena", "El jazmín"] },
  { p: "¿Cómo se le llama al conjunto de personas?", r: ["Multitud", "Muchedumbre", "Gentío", "Concurrencia"], c: 1,
    d: ["Multitud", "Gentío", "Concurrencia", "Grupo", "Público", "Comunidad", "Asamblea", "Reunión"] },
  { p: "¿A quién se le conoce como el Santo de la Escoba?", r: ["San Martín de Porres", "Santo Domingo de Guzmán", "San Francisco", "San Pedro"], c: 0,
    d: ["Santo Domingo de Guzmán", "San Francisco", "San Pedro", "San Agustín", "San Ignacio", "San Pablo", "San Juan", "Santo Tomás"] },
  { p: "¿Cómo se llama el proceso por el cual las plantas obtienen su alimento?", r: ["Respiración", "Fotosíntesis", "Transpiración", "Germinación"], c: 1,
    d: ["Respiración", "Transpiración", "Germinación", "Polinización", "Fecundación", "Evaporación", "Digestión", "Nutrición"] },
  { p: "¿Quién proclamó la Independencia del Perú?", r: ["Simón Bolívar", "José de San Martín", "Túpac Amaru II", "Ramón Castilla"], c: 1,
    d: ["Simón Bolívar", "Túpac Amaru II", "Ramón Castilla", "Andrés A. Cáceres", "Miguel Grau", "Francisco Bolognesi", "José Olaya", "Manco Cápac"] },
  { p: "¿Quién entonó por primera vez el Himno Nacional?", r: ["Rosa Merino", "Micaela Bastidas", "Santa Rosa de Lima", "Chabuca Granda"], c: 0,
    d: ["Micaela Bastidas", "Santa Rosa de Lima", "Chabuca Granda", "Santa Ana", "Santa Clara", "Santa María", "María Parado de Bellido", "Rosa de Lima"] },
  { p: "Los seres que producen su propio alimento son considerados:", r: ["Heterótrofos", "Autótrofos", "Omnívoros", "Descomponedores"], c: 1,
    d: ["Heterótrofos", "Omnívoros", "Descomponedores", "Carnívoros", "Herbívoros", "Parásitos", "Saprófitos", "Carroñeros"] },
  { p: "¿Cuál es la montaña más alta del mundo?", r: ["Everest", "Huascarán", "Kilimanjaro", "Aconcagua"], c: 0,
    d: ["Huascarán", "Kilimanjaro", "Aconcagua", "Mont Blanc", "Chimborazo", "Cotopaxi", "Alpamayo", "Misti"] },
  { p: "¿Cuál es la montaña más alta del Perú?", r: ["Misti", "Alpamayo", "Huascarán", "Ausangate"], c: 2,
    d: ["Misti", "Alpamayo", "Ausangate", "Chimborazo", "Cotopaxi", "Everest", "Aconcagua", "Kilimanjaro"] },
  { p: "¿Cuál es el nombre del buque de Grau?", r: ["Monitor Huáscar", "Fragata Independencia", "Corbeta Unión", "Buque América"], c: 0,
    d: ["Fragata Independencia", "Corbeta Unión", "Buque América", "La Esmeralda", "La Covadonga", "El Cochrane", "El Blanco Encalada", "La Pilcomayo"] },
  { p: "¿Cuál es el instrumento musical de percusión peruano?", r: ["Charango", "Cajón", "Quena", "Zampoña"], c: 1,
    d: ["Charango", "Quena", "Zampoña", "Guitarra", "Violín", "Arpa", "Mandolina", "Bombo"] },
  { p: "¿Cuál es el resultado de 65 × 100?", r: ["650", "6500", "65000", "6050"], c: 1,
    d: ["650", "65000", "6050", "6000", "7000", "5000", "6560", "6505"] },
  { p: "¿Cuántos minutos hay en una media hora?", r: ["15 minutos", "20 minutos", "30 minutos", "45 minutos"], c: 2,
    d: ["15 minutos", "20 minutos", "45 minutos", "10 minutos", "25 minutos", "50 minutos", "60 minutos", "40 minutos"] },
  { p: "¿Qué prócer de la patria cruzó a nado desde el Callao a Lima?", r: ["José Olaya Balandra", "Miguel Grau", "Túpac Amaru II", "Francisco Bolognesi"], c: 0,
    d: ["Miguel Grau", "Túpac Amaru II", "Francisco Bolognesi", "Andrés A. Cáceres", "José de San Martín", "Simón Bolívar", "Alfonso Ugarte", "Ramón Castilla"] },
  { p: "¿Cuál es el país de Sudamérica donde se habla portugués?", r: ["Argentina", "Brasil", "Uruguay", "Paraguay"], c: 1,
    d: ["Argentina", "Uruguay", "Paraguay", "Chile", "Perú", "Colombia", "Ecuador", "Bolivia"] },
  { p: "¿Cuál es el océano de mayor tamaño?", r: ["Atlántico", "Índico", "Pacífico", "Ártico"], c: 2,
    d: ["Atlántico", "Índico", "Ártico", "Antártico", "Mar Mediterráneo", "Mar Rojo", "Mar Caribe", "Mar Negro"] },
  { p: "¿A quién se le conoce como la patrona de la Policía Nacional?", r: ["Santa Rosa de Lima", "Santa María", "Santa Ana", "Santa Clara"], c: 0,
    d: ["Santa María", "Santa Ana", "Santa Clara", "Santa Mónica", "Santa Teresa", "Santa Cecilia", "Santa Lucía", "Santa Bárbara"] },
  { p: "¿Cuál es el continente más poblado del mundo?", r: ["África", "América", "Europa", "Asia"], c: 3,
    d: ["África", "América", "Europa", "Oceanía", "Antártida", "América del Sur", "América del Norte", "Centroamérica"] },
  { p: "¿Cuáles son los 2 países sudamericanos que no tienen salida al mar?", r: ["Bolivia y Paraguay", "Chile y Ecuador", "Perú y Brasil", "Uruguay y Venezuela"], c: 0,
    d: ["Chile y Ecuador", "Perú y Brasil", "Uruguay y Venezuela", "Argentina y Chile", "Colombia y Venezuela", "Brasil y Argentina", "Ecuador y Perú", "Argentina y Uruguay"] },
  { p: "¿Quién descubrió la cultura Paracas?", r: ["Julio C. Tello", "María Reiche", "Max Uhle", "Federico Kauffmann"], c: 0,
    d: ["María Reiche", "Max Uhle", "Federico Kauffmann", "Hiram Bingham", "Thor Heyerdahl", "John Rowe", "Luis Lumbreras", "Richard Burger"] },
  { p: "¿Cómo se llamaban los primeros pobladores que vivían de un lugar a otro?", r: ["Sedentarios", "Nómadas", "Cazadores", "Agricultores"], c: 1,
    d: ["Sedentarios", "Cazadores", "Agricultores", "Pescadores", "Pastores", "Recolectores", "Comerciantes", "Artesanos"] },
  { p: "¿Cómo se llamaban las representaciones que dejaron los pobladores de Toquepala?", r: ["Petroglifos", "Pinturas rupestres", "Cerámicas", "Textiles"], c: 1,
    d: ["Petroglifos", "Cerámicas", "Textiles", "Esculturas", "Murales", "Jeroglíficos", "Geoglifos", "Mosaicos"] },
  { p: "¿Cuántos años cumple la I.E. Santa María del Rosario?", r: ["25 años", "27 años", "29 años", "30 años"], c: 2,
    d: ["25 años", "27 años", "30 años", "35 años", "20 años", "26 años", "28 años", "32 años"] },
  { p: "¿Quiénes fueron los padres de la Virgen María?", r: ["Ana y Joaquín", "José y María", "Isabel y Zacarías", "Marta y Lázaro"], c: 0,
    d: ["José y María", "Isabel y Zacarías", "Marta y Lázaro", "Pedro y María", "Juan y María", "Santiago y Salomé", "Cleofás y María", "Zebedeo y Salomé"] },
  { p: "¿Qué santo nos enseñó a rezar el Santo Rosario?", r: ["San Francisco", "Santo Domingo de Guzmán", "San Agustín", "San Ignacio"], c: 1,
    d: ["San Francisco", "San Agustín", "San Ignacio", "San Pedro", "San Pablo", "San Juan", "Santo Tomás", "San Benito"] },
  { p: "¿Jesús enseñaba a través de qué?", r: ["Milagros", "Parábolas", "Sermones", "Cartas"], c: 1,
    d: ["Milagros", "Sermones", "Cartas", "Oraciones", "Profecías", "Salmos", "Mandamientos", "Rituales"] },
  { p: "¿Cómo se llamaron las cirugías que realizaron en los cráneos los hombres de Paracas?", r: ["Amputaciones", "Trepanaciones craneanas", "Momificaciones", "Craneotomías"], c: 1,
    d: ["Amputaciones", "Momificaciones", "Craneotomías", "Autopsias", "Incisiones", "Suturas", "Escisiones", "Resecciones"] },
  { p: "¿Quién es el actual alcalde de Lima?", r: ["Rafael López Aliaga", "Jorge Muñoz", "Luis Castañeda", "Susana Villarán"], c: 0,
    d: ["Jorge Muñoz", "Luis Castañeda", "Susana Villarán", "Manuel Damert", "Marco Álvarez", "Enrique Cornejo", "Alberto Andrade", "Ricardo Belmont"] },
  { p: "¿Cómo se llama la base naval peruana en la Antártida?", r: ["Machu Picchu", "San Martín", "Grau", "Bolognesi"], c: 0,
    d: ["San Martín", "Grau", "Bolognesi", "Túpac Amaru", "Huáscar", "Independencia", "Almirante Grau", "Callao"] },
  { p: "¿Quién dijo: 'Tengo deberes sagrados que cumplir y los cumpliré hasta quemar el último cartucho'?", r: ["Miguel Grau", "Francisco Bolognesi", "José Olaya", "Andrés A. Cáceres"], c: 1,
    d: ["Miguel Grau", "José Olaya", "Andrés A. Cáceres", "Alfonso Ugarte", "José de San Martín", "Simón Bolívar", "Ramón Castilla", "Túpac Amaru II"] },
  { p: "¿Qué día se celebra el Día de la Bandera?", r: ["28 de julio", "7 de junio", "8 de octubre", "12 de octubre"], c: 1,
    d: ["28 de julio", "8 de octubre", "12 de octubre", "15 de septiembre", "20 de julio", "1 de mayo", "6 de agosto", "9 de diciembre"] },
  { p: "¿En qué región se ubica el volcán Misti?", r: ["Cusco", "Puno", "Arequipa", "Moquegua"], c: 2,
    d: ["Cusco", "Puno", "Moquegua", "Tacna", "Lima", "Ayacucho", "Huancavelica", "Apurímac"] },
  { p: "¿Cuál es el único mamífero que puede volar?", r: ["El águila", "El murciélago", "El cóndor", "La lechuza"], c: 1,
    d: ["El águila", "El cóndor", "La lechuza", "El halcón", "El pingüino", "El avestruz", "El flamenco", "El pelícano"] },
  { p: "¿En qué se especializa la cartografía?", r: ["En el estudio de mapas", "En el estudio de rocas", "En el estudio de astros", "En el estudio de climas"], c: 0,
    d: ["En el estudio de rocas", "En el estudio de astros", "En el estudio de climas", "En el estudio de fósiles", "En el estudio de animales", "En el estudio de plantas", "En el estudio de la historia", "En el estudio del agua"] },
  { p: "¿Quién fue la esposa de Túpac Amaru II?", r: ["Micaela Bastidas", "Rosa Merino", "Santa Rosa", "Chabuca Granda"], c: 0,
    d: ["Rosa Merino", "Santa Rosa", "Chabuca Granda", "Santa Ana", "Santa Clara", "María Parado de Bellido", "Santa María", "Rosa de Lima"] },
  { p: "¿Cuáles fueron los 4 suyos del Imperio Incaico?", r: ["Norte, Sur, Este, Oeste", "Contisuyo, Chinchaysuyo, Collasuyo, Antisuyo", "Cusco, Lima, Quito, Potosí", "Inca, Yupanqui, Amaru, Túpac"], c: 1,
    d: ["Norte, Sur, Este, Oeste", "Cusco, Lima, Quito, Potosí", "Inca, Yupanqui, Amaru, Túpac", "Costa, Sierra, Selva, Mar", "Cusco, Cajamarca, Quito, Chile", "Alto, Bajo, Medio, Centro", "Norte, Centro, Sur, Oriente", "Andes, Amazonía, Costa, Islas"] },
  { p: "¿Quién escribió 'Los Heraldos Negros'?", r: ["César Vallejo", "José María Arguedas", "Mario Vargas Llosa", "Ricardo Palma"], c: 0,
    d: ["José María Arguedas", "Mario Vargas Llosa", "Ricardo Palma", "Abraham Valdelomar", "Manuel González Prada", "José Carlos Mariátegui", "Alfredo Bryce Echenique", "Julio Ramón Ribeyro"] },
  { p: "¿Cuántos años tiene un siglo?", r: ["10 años", "50 años", "100 años", "1000 años"], c: 2,
    d: ["10 años", "50 años", "1000 años", "25 años", "20 años", "500 años", "200 años", "150 años"] },
  { p: "¿En qué lugar del cuerpo se produce la insulina?", r: ["El hígado", "El páncreas", "El estómago", "Los riñones"], c: 1,
    d: ["El hígado", "El estómago", "Los riñones", "El corazón", "El cerebro", "Los pulmones", "El intestino", "La piel"] },
  { p: "¿Cuál es el animal más rápido del mundo?", r: ["El león", "El guepardo", "El halcón", "El caballo"], c: 1,
    d: ["El león", "El halcón", "El caballo", "El tigre", "El águila", "El delfín", "El avestruz", "El antílope"] },
  { p: "¿Cuál es el satélite natural de la Tierra?", r: ["El Sol", "Marte", "La Luna", "Venus"], c: 2,
    d: ["El Sol", "Marte", "Venus", "Júpiter", "Saturno", "Mercurio", "Neptuno", "Urano"] },
  { p: "¿Cuál es la capital del Perú?", r: ["Arequipa", "Cusco", "Lima", "Trujillo"], c: 2,
    d: ["Arequipa", "Cusco", "Trujillo", "Piura", "Chiclayo", "Iquitos", "Huancayo", "Cajamarca"] },
  { p: "¿Dónde murió el inca Atahualpa?", r: ["En Cusco", "En Cajamarca", "En Lima", "En Quito"], c: 1,
    d: ["En Cusco", "En Lima", "En Quito", "En Arequipa", "En Puno", "En Trujillo", "En Piura", "En Ayacucho"] },
  { p: "¿Qué figura geométrica tiene 5 lados?", r: ["Hexágono", "Pentágono", "Cuadrado", "Triángulo"], c: 1,
    d: ["Hexágono", "Cuadrado", "Triángulo", "Heptágono", "Octágono", "Rectángulo", "Rombo", "Trapecio"] },
  { p: "¿Cuáles son los símbolos patrios del Perú?", r: ["La Bandera, el Himno Nacional y el Escudo", "La Bandera y el Himno", "El Escudo y la Escarapela", "La Bandera y el Escudo"], c: 0,
    d: ["La Bandera y el Himno", "El Escudo y la Escarapela", "La Bandera y el Escudo", "El Himno y el Escudo", "La Bandera, el Escudo y la Escarapela", "El Himno, la Escarapela y el Escudo", "Solo la Bandera", "La Bandera y la Escarapela"] },
  { p: "¿Cuáles son los elementos del Escudo Nacional?", r: ["El sol, la luna y las estrellas", "La vicuña, el árbol de la quina y la cornucopia", "El cóndor, el puma y la serpiente", "El mar, la montaña y la selva"], c: 1,
    d: ["El sol, la luna y las estrellas", "El cóndor, el puma y la serpiente", "El mar, la montaña y la selva", "El león, el castillo y la corona", "El águila, el roble y la espada", "La paloma, el olivo y la rama", "El toro, el trigo y la vid", "El caballo, el escudo y la lanza"] },
  { p: "¿Qué se celebra el 8 de octubre?", r: ["Día de la Bandera", "El Combate de Angamos", "La Independencia", "Día del Trabajo"], c: 1,
    d: ["Día de la Bandera", "La Independencia", "Día del Trabajo", "Día de la Marina", "Día del Ejército", "Batalla de Junín", "Batalla de Ayacucho", "Día de la Fuerza Aérea"] },
  { p: "¿A quién se le conoce como el 'Brujo de los Andes'?", r: ["Andrés Avelino Cáceres", "Miguel Grau", "Francisco Bolognesi", "Ramón Castilla"], c: 0,
    d: ["Miguel Grau", "Francisco Bolognesi", "Ramón Castilla", "José de San Martín", "Simón Bolívar", "Alfonso Ugarte", "Túpac Amaru II", "José Olaya"] },
  { p: "¿Quién es el héroe de la aviación civil peruana?", r: ["Jorge Chávez", "Daniel Alcides Carrión", "José Quiñones", "Alfonso Ugarte"], c: 0,
    d: ["Daniel Alcides Carrión", "José Quiñones", "Alfonso Ugarte", "Miguel Grau", "Francisco Bolognesi", "Andrés A. Cáceres", "Ramón Castilla", "José Olaya"] },
  { p: "¿Quién es el mártir de la medicina peruana?", r: ["Jorge Chávez", "Daniel Alcides Carrión", "José Olaya", "Miguel Grau"], c: 1,
    d: ["Jorge Chávez", "José Olaya", "Miguel Grau", "Francisco Bolognesi", "Alfonso Ugarte", "Andrés A. Cáceres", "Ramón Castilla", "José Quiñones"] },
  { p: "¿Con qué países limita el Perú?", r: ["Ecuador, Colombia, Brasil, Bolivia y Chile", "Solo con Ecuador y Chile", "Brasil, Argentina y Bolivia", "Colombia, Venezuela y Ecuador"], c: 0,
    d: ["Solo con Ecuador y Chile", "Brasil, Argentina y Bolivia", "Colombia, Venezuela y Ecuador", "Ecuador, Colombia y Brasil", "Chile, Bolivia y Argentina", "Brasil, Bolivia y Paraguay", "Ecuador, Colombia, Brasil y Bolivia", "Colombia, Brasil, Bolivia y Chile"] },
  { p: "¿Cuántos lados tiene un cuadrilátero?", r: ["3 lados", "4 lados", "5 lados", "6 lados"], c: 1,
    d: ["3 lados", "5 lados", "6 lados", "7 lados", "8 lados", "2 lados", "10 lados", "12 lados"] },
  { p: "¿Qué tipo de animal es la ballena?", r: ["Un pez", "Un mamífero", "Un reptil", "Un anfibio"], c: 1,
    d: ["Un pez", "Un reptil", "Un anfibio", "Un ave", "Un crustáceo", "Un molusco", "Un invertebrado", "Un insecto"] },
  { p: "¿Cómo se llama a los seres que no tienen vida?", r: ["Bióticos", "Abióticos", "Inertes", "Minerales"], c: 1,
    d: ["Bióticos", "Inertes", "Minerales", "Orgánicos", "Inorgánicos", "Vivos", "Naturales", "Artificiales"] },
  { p: "¿Cómo se llama la cría del oso?", r: ["Osezno", "Cachorro", "Osito", "Osero"], c: 0,
    d: ["Cachorro", "Osito", "Osero", "Cría", "Cervatillo", "Ballato", "Lobezno", "Ternerito"] }
];

// =====================================================
// 🔒 CONFIGURACIÓN DE ADMIN
// =====================================================
const CLAVE_ADMIN = "Dennis2026*";
const USUARIO_ADMIN = "admin";
const CLAVE_NOMBRE = "quizizz_nombre_jugador";
const CLAVE_RANKING = "quizizz_ranking_avila_2026";

// =====================================================
// ESTADO
// =====================================================
let orden = [];
let indice = 0;
let aciertos = 0;
let errores = [];
let respondida = false;
let tiempoInicio = 0;
let intervalo = null;
let nombreJugador = "";

// =====================================================
// MÚSICA (Web Audio API)
// =====================================================
let audioCtx = null;
let musicaInterval = null;

function iniciarMusica() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notas = [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25];
    let i = 0;
    musicaInterval = setInterval(() => {
      if (!audioCtx || audioCtx.state === 'closed') return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = notas[i % notas.length];
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
      i++;
    }, 280);
  } catch (e) { console.log('Audio no disponible'); }
}

function detenerMusica() {
  if (musicaInterval) { clearInterval(musicaInterval); musicaInterval = null; }
  if (audioCtx) { audioCtx.close(); audioCtx = null; }
}

function sonidoAcierto() {
  if (!audioCtx) return;
  [660, 880, 1100].forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = f;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.08 + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + i * 0.08);
    osc.stop(audioCtx.currentTime + i * 0.08 + 0.25);
  });
}

function sonidoError() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.frequency.value = 180;
  osc.type = 'sawtooth';
  gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.4);
}

function sonidoVictoria() {
  if (!audioCtx) return;
  const melodia = [523, 659, 783, 1046, 1318, 1046, 1318, 1568];
  melodia.forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = f;
    osc.type = 'triangle';
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime + i * 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + i * 0.15);
    osc.stop(audioCtx.currentTime + i * 0.15 + 0.35);
  });
}

// =====================================================
// 🎊 CONFETI
// =====================================================
const canvas = document.getElementById('confeti-canvas');
const ctx = canvas.getContext('2d');
let confetis = [];
let animandoConfeti = false;

function ajustarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', ajustarCanvas);
ajustarCanvas();

const COLORES_CONFETI = ['#e91e63', '#9c27b0', '#3f51b5', '#ff9800', '#ffd700', '#00e676', '#00bcd4', '#ff5722'];

function lanzarConfeti() {
  const cantidad = 120;
  for (let i = 0; i < cantidad; i++) {
    confetis.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 300,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: Math.random() * -18 - 5,
      size: Math.random() * 12 + 6,
      color: COLORES_CONFETI[Math.floor(Math.random() * COLORES_CONFETI.length)],
      rotacion: Math.random() * Math.PI * 2,
      vRotacion: (Math.random() - 0.5) * 0.3,
      forma: Math.random() > 0.5 ? 'rect' : 'circle',
      vida: 1
    });
  }
  if (!animandoConfeti) {
    animandoConfeti = true;
    animarConfeti();
  }
}

function animarConfeti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetis.forEach(c => {
    c.x += c.vx;
    c.y += c.vy;
    c.vy += 0.5;
    c.vx *= 0.99;
    c.rotacion += c.vRotacion;
    c.vida -= 0.008;

    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rotacion);
    ctx.globalAlpha = Math.max(0, c.vida);
    ctx.fillStyle = c.color;

    if (c.forma === 'rect') {
      ctx.fillRect(-c.size / 2, -c.size / 4, c.size, c.size / 2);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });

  confetis = confetis.filter(c => c.vida > 0 && c.y < canvas.height + 50);

  if (confetis.length > 0) {
    requestAnimationFrame(animarConfeti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animandoConfeti = false;
  }
}

// =====================================================
// UTILIDADES
// =====================================================
function formatearTiempo(ms) {
  const total = Math.floor(ms / 1000);
  const min = String(Math.floor(total / 60)).padStart(2, '0');
  const seg = String(total % 60).padStart(2, '0');
  return `${min}:${seg}`;
}

function fechaLegible() {
  const d = new Date();
  return d.toLocaleDateString('es-PE') + ' ' +
         d.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
}

function mostrarPantalla(pantalla) {
  document.querySelectorAll('.pantalla, .pantalla-quiz').forEach(p => {
    p.classList.remove('activa');
    p.style.display = 'none';
  });
  pantalla.classList.add('activa');
  pantalla.style.display = 'block';
}

// =====================================================
// 🔐 NOMBRE PERSISTENTE
// =====================================================
function obtenerNombreGuardado() {
  return localStorage.getItem(CLAVE_NOMBRE) || "";
}

function guardarNombre(nombre) {
  localStorage.setItem(CLAVE_NOMBRE, nombre);
}

// =====================================================
// CRONÓMETRO
// =====================================================
function iniciarCronometro() {
  tiempoInicio = Date.now();
  const cronometroEl = document.getElementById('cronometro');
  if (cronometroEl) cronometroEl.textContent = '00:00';
  intervalo = setInterval(() => {
    const el = document.getElementById('cronometro');
    if (el) el.textContent = formatearTiempo(Date.now() - tiempoInicio);
  }, 200);
}

function detenerCronometro() {
  if (intervalo) clearInterval(intervalo);
  return Date.now() - tiempoInicio;
}

// =====================================================
// 🎯 OPCIONES ALEATORIAS
// =====================================================
function generarOpcionesAleatorias(pregunta) {
  const correcta = pregunta.r[pregunta.c];
  const pool = (pregunta.d && pregunta.d.length >= 3) ? pregunta.d : pregunta.r;
  const candidatos = [...new Set(pool)].filter(op => op !== correcta);
  const incorrectas = candidatos.sort(() => Math.random() - 0.5).slice(0, 3);
  return [
    { texto: correcta, esCorrecta: true },
    ...incorrectas.map(t => ({ texto: t, esCorrecta: false }))
  ].sort(() => Math.random() - 0.5);
}

// =====================================================
// CARGAR PREGUNTA
// =====================================================
function cargarPregunta() {
  respondida = false;
  const actual = orden[indice];
  document.getElementById('pregunta-texto').textContent = actual.p;
  document.getElementById('progreso').textContent = `Pregunta ${indice + 1} de ${orden.length}`;
  document.getElementById('barra').style.width = `${(indice / orden.length) * 100}%`;

  const respuestasDiv = document.getElementById('respuestas');
  respuestasDiv.innerHTML = '';

  const opciones = generarOpcionesAleatorias(actual);

  opciones.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'respuesta';
    btn.textContent = `${String.fromCharCode(65 + i)}) ${op.texto}`;
    btn.dataset.correcta = op.esCorrecta;
    btn.onclick = () => seleccionar(op.esCorrecta, btn);
    respuestasDiv.appendChild(btn);
  });
}

// =====================================================
// SELECCIONAR
// =====================================================
function seleccionar(esCorrecta, boton) {
  if (respondida) return;
  respondida = true;

  const botones = document.querySelectorAll('.respuesta');
  botones.forEach(b => b.classList.add('bloqueada'));

  const actual = orden[indice];

  if (esCorrecta) {
    boton.classList.add('correcta');
    aciertos++;
    const pv = document.getElementById('puntaje-vivo');
    pv.textContent = aciertos;
    pv.classList.add('sube');
    setTimeout(() => pv.classList.remove('sube'), 500);
    sonidoAcierto();
    lanzarConfeti();
  } else {
    boton.classList.add('incorrecta');
    sonidoError();

    let textoCorrecto = actual.r[actual.c];
    botones.forEach(b => {
      if (b.dataset.correcta === 'true') {
        b.classList.add('correcta');
        textoCorrecto = b.textContent.substring(3);
      }
    });

    errores.push({
      pregunta: actual.p,
      respuestaCorrecta: textoCorrecto,
      respuestaUsuario: boton.textContent.substring(3)
    });
  }

  setTimeout(() => {
    indice++;
    if (indice < orden.length) {
      cargarPregunta();
    } else {
      terminarQuiz();
    }
  }, 1500);
}

// =====================================================
// TERMINAR
// =====================================================
function terminarQuiz() {
  const tiempoTotal = detenerCronometro();
  detenerMusica();
  document.getElementById('barra').style.width = '100%';

  const precision = Math.round((aciertos / orden.length) * 100);

  document.getElementById('res-aciertos').textContent = aciertos;
  document.getElementById('res-tiempo').textContent = formatearTiempo(tiempoTotal);
  document.getElementById('res-precision').textContent = `${precision}%`;
  document.getElementById('nombre-campeon').textContent = nombreJugador;

  personalizarVictoria(precision);
  renderizarRepaso();

  document.getElementById('cert-nombre').textContent = nombreJugador;
  document.getElementById('cert-stats').textContent =
    `${aciertos} aciertos en ${formatearTiempo(tiempoTotal)} (${precision}%)`;
  document.getElementById('cert-fecha').textContent =
    'Otorgado el ' + new Date().toLocaleDateString('es-PE', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

  const btnCert = document.getElementById('btn-certificado');
  if (btnCert) btnCert.classList.remove('oculto');

  guardarEnRanking(nombreJugador, aciertos, tiempoTotal);
  mostrarPantalla(document.getElementById('resultado'));

  sonidoVictoria();
  iniciarLluviaConfeti();
  generarDestellos();
}

// =====================================================
// 🏆 PERSONALIZAR VICTORIA
// =====================================================
function personalizarVictoria(precision) {
  const medallaEl = document.getElementById('medalla');
  const trofeoEl = document.getElementById('trofeo-grande');
  const coronaEl = document.getElementById('corona');
  const titulo = document.getElementById('titulo-final');
  const subtitulo = document.getElementById('subtitulo-victoria');
  const mensaje = document.getElementById('mensaje-final');

  if (precision === 100) {
    medallaEl.textContent = '🥇';
    coronaEl.classList.remove('oculto');
    titulo.textContent = '¡PERFECTO!';
    subtitulo.textContent = '¡Eres una leyenda de la cultura general!';
    mensaje.textContent = '👑 Has alcanzado la puntuación máxima. Tu conocimiento es imparable. ¡Felicidades, campeón absoluto!';
    trofeoEl.style.filter = 'drop-shadow(0 0 70px rgba(255, 215, 0, 1)) drop-shadow(0 0 120px rgba(255, 143, 0, 0.8))';
  } else if (precision >= 90) {
    medallaEl.textContent = '🥇';
    titulo.textContent = '¡VICTORIA!';
    subtitulo.textContent = '¡Nivel Oro desbloqueado!';
    mensaje.textContent = '🏆 Excelente trabajo. Dominas la cultura general como un verdadero campeón. ¡Sigue así!';
  } else if (precision >= 75) {
    medallaEl.textContent = '🥈';
    titulo.textContent = '¡GRAN TRABAJO!';
    subtitulo.textContent = '¡Nivel Plata conseguido!';
    mensaje.textContent = '🌟 Estuviste muy cerca de la cima. Con un poco más de repaso, el oro es tuyo.';
  } else if (precision >= 50) {
    medallaEl.textContent = '🥉';
    titulo.textContent = '¡BUEN ESFUERZO!';
    subtitulo.textContent = '¡Nivel Bronce alcanzado!';
    mensaje.textContent = '💪 Vas por buen camino. Repasa las preguntas falladas y verás cómo subes al podio.';
  } else {
    medallaEl.textContent = '🎖️';
    titulo.textContent = '¡SIGUE INTENTANDO!';
    subtitulo.textContent = 'Cada intento te hace más fuerte';
    mensaje.textContent = '📚 El verdadero campeón no se rinde. Revisa tus errores, estudia y vuelve a intentarlo. ¡Tú puedes!';
  }
}

// =====================================================
// 🎊 LLUVIA DE CONFETI
// =====================================================
function iniciarLluviaConfeti() {
  let duracion = 0;
  const interval = setInterval(() => {
    lanzarConfeti();
    duracion += 400;
    if (duracion >= 5000) clearInterval(interval);
  }, 400);
  lanzarConfeti();
  setTimeout(() => lanzarConfeti(), 150);
  setTimeout(() => lanzarConfeti(), 300);
}

// =====================================================
// ✨ DESTELLOS
// =====================================================
function generarDestellos() {
  const contenedor = document.getElementById('destellos');
  if (!contenedor) return;
  contenedor.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const d = document.createElement('div');
    d.className = 'destello';
    d.style.left = Math.random() * 100 + '%';
    d.style.top = Math.random() * 100 + '%';
    d.style.animationDelay = Math.random() * 2 + 's';
    d.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    contenedor.appendChild(d);
  }
}

// =====================================================
// RANKING
// =====================================================
function obtenerRanking() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_RANKING)) || [];
  } catch { return []; }
}

function guardarEnRanking(nombre, aciertos, tiempo) {
  const ranking = obtenerRanking();
  const fecha = fechaLegible();

  const idxExistente = ranking.findIndex(r =>
    r.nombre.toLowerCase() === nombre.toLowerCase()
  );

  const nuevaEntrada = { nombre, aciertos, tiempo, fecha };

  if (idxExistente !== -1) {
    const anterior = ranking[idxExistente];
    const mejora = (aciertos > anterior.aciertos) ||
                   (aciertos === anterior.aciertos && tiempo < anterior.tiempo);
    if (mejora) {
      ranking[idxExistente] = nuevaEntrada;
    } else {
      ranking[idxExistente].fecha = fecha;
    }
  } else {
    ranking.push(nuevaEntrada);
  }

  ranking.sort((a, b) => {
    if (b.aciertos !== a.aciertos) return b.aciertos - a.aciertos;
    return a.tiempo - b.tiempo;
  });

  localStorage.setItem(CLAVE_RANKING, JSON.stringify(ranking.slice(0, 50)));
}

function mostrarRanking() {
  const ranking = obtenerRanking();
  const contenedor = document.getElementById('tabla-ranking');

  if (ranking.length === 0) {
    contenedor.innerHTML = '<div class="sin-datos">😴 Aún no hay registros. ¡Sé el primero!</div>';
  } else {
    contenedor.innerHTML = ranking.map((r, i) => {
      const medalla = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;
      const clase = i < 3 ? `top-${i + 1}` : '';
      const esMismoJugador = (r.nombre.toLowerCase() === (obtenerNombreGuardado() || '').toLowerCase());
      const bordeDorado = esMismoJugador ? 'style="box-shadow: 0 0 0 3px #ffd700; border-radius: 12px;"' : '';
      return `
        <div class="fila-ranking ${clase}" ${bordeDorado}>
          <div class="posicion">${medalla}</div>
          <div class="nombre-rank">${r.nombre}${esMismoJugador ? ' 👈' : ''}</div>
          <div class="puntaje-rank">✅ ${r.aciertos}</div>
          <div class="tiempo-rank">⏱️ ${formatearTiempo(r.tiempo)}</div>
        </div>
      `;
    }).join('');
  }
  mostrarPantalla(document.getElementById('ranking'));
}

// =====================================================
// 📚 REPASO DE ERRORES
// =====================================================
function renderizarRepaso() {
  const seccion = document.getElementById('seccion-repaso');
  const lista = document.getElementById('lista-errores');
  const mensajePerfecto = document.getElementById('mensaje-perfecto');
  const btnRepaso = document.getElementById('btn-repaso');

  if (errores.length === 0) {
    seccion.classList.add('oculto');
    mensajePerfecto.classList.remove('oculto');
    btnRepaso.classList.add('oculto');
    return;
  }

  seccion.classList.remove('oculto');
  mensajePerfecto.classList.add('oculto');
  btnRepaso.classList.remove('oculto');

  lista.innerHTML = errores.map((e, i) => `
    <div class="error-item">
      <div class="error-pregunta">
        <span class="num">${i + 1}</span>${e.pregunta}
      </div>
      <div class="error-respuestas">
        <div class="error-respuesta tuya">
          <span class="etiqueta">Tu respuesta</span>
          <span>${e.respuestaUsuario}</span>
        </div>
        <div class="error-respuesta correcta">
          <span class="etiqueta">Correcta</span>
          <span>${e.respuestaCorrecta}</span>
        </div>
      </div>
    </div>
  `).join('');

  btnRepaso.onclick = () => {
    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

// =====================================================
// 🚀 INICIALIZACIÓN (todo adentro de DOMContentLoaded)
// =====================================================
document.addEventListener('DOMContentLoaded', () => {

  // --- Mostrar total de preguntas ---
  const totalEl = document.getElementById('total-preguntas');
  if (totalEl) totalEl.textContent = preguntas.length;

  // --- Precargar nombre si ya existe ---
  const nombreGuardado = obtenerNombreGuardado();
  const inputNombre = document.getElementById('nombre-jugador');

  if (nombreGuardado && inputNombre) {
    inputNombre.value = nombreGuardado;
    inputNombre.disabled = true;
    inputNombre.style.background = '#f3e5f5';
    inputNombre.style.cursor = 'not-allowed';
    inputNombre.style.color = '#7b1fa2';
    inputNombre.style.fontWeight = '700';
    inputNombre.style.textAlign = 'center';
    inputNombre.title = 'Ya estás registrado con este nombre';

    const infoMsg = document.createElement('p');
    infoMsg.style.cssText = 'text-align:center;color:#4a148c;font-weight:600;font-size:1rem;margin-bottom:10px;background:#f3e5f5;padding:12px;border-radius:12px;';
    infoMsg.innerHTML = `👋 ¡Bienvenido de nuevo, <strong>${nombreGuardado}</strong>!`;
    inputNombre.parentNode.insertBefore(infoMsg, inputNombre.nextSibling);
  }

  // --- Botón INICIAR ---
  const btnIniciar = document.getElementById('btn-iniciar');
  if (btnIniciar) {
    btnIniciar.onclick = () => {
      const guardado = obtenerNombreGuardado();
      let nombre;

      if (guardado) {
        nombre = guardado;
      } else {
        nombre = inputNombre.value.trim();
        if (!nombre) {
          inputNombre.style.borderColor = '#e91e63';
          inputNombre.placeholder = '⚠️ ¡Escribe tu nombre!';
          return;
        }
        if (nombre.length < 3) {
          inputNombre.style.borderColor = '#e91e63';
          inputNombre.placeholder = '⚠️ Nombre muy corto (mínimo 3 letras)';
          return;
        }
        guardarNombre(nombre);
      }

      nombreJugador = nombre;
      document.getElementById('nombre-mostrar').textContent = nombre;

      // Mezclar preguntas
      orden = [...preguntas].sort(() => Math.random() - 0.5);

      mostrarPantalla(document.getElementById('quiz'));
      iniciarMusica();
      iniciarCronometro();
      cargarPregunta();
    };
  }

  // --- Botón VER RANKING (inicio) ---
  const btnRanking = document.getElementById('btn-ranking');
  if (btnRanking) btnRanking.onclick = () => mostrarRanking();

  // --- Botón VER RANKING (resultado) ---
  const btnVerRanking = document.getElementById('btn-ver-ranking');
  if (btnVerRanking) btnVerRanking.onclick = () => mostrarRanking();

  // --- Botón LIMPIAR RANKING (solo admin) ---
  const btnLimpiar = document.getElementById('btn-limpiar');
  if (btnLimpiar) {
    btnLimpiar.onclick = () => {
      const usuario = prompt('🔒 Acceso restringido\n\nUsuario administrador:');
      if (usuario === null) return;

      const clave = prompt('🔒 Ingresa la contraseña de administrador:');
      if (clave === null) return;

      if (usuario.toLowerCase() !== USUARIO_ADMIN || clave !== CLAVE_ADMIN) {
        sonidoError();
        alert('❌ Acceso denegado.\n\nUsuario o contraseña incorrectos.');
        return;
      }

      if (confirm('⚠️ ¿Estás seguro de borrar TODO el ranking?\n\nEsta acción no se puede deshacer.')) {
        localStorage.removeItem(CLAVE_RANKING);
        sonidoVictoria();
        alert('🗑️ Ranking borrado correctamente.');
        mostrarRanking();
      }
    };
  }

  // --- Botón RESET NOMBRE (solo admin) ---
  const btnReset = document.getElementById('btn-reset-nombre');
  if (btnReset) {
    btnReset.onclick = () => {
      const usuario = prompt('🔒 Usuario administrador:');
      if (usuario === null) return;

      const clave = prompt('🔒 Contraseña:');
      if (clave === null) return;

      if (usuario.toLowerCase() !== USUARIO_ADMIN || clave !== CLAVE_ADMIN) {
        sonidoError();
        alert('❌ Acceso denegado.');
        return;
      }

      if (confirm('⚠️ Se borrará el nombre guardado en este dispositivo.\n\n¿Continuar?')) {
        localStorage.removeItem(CLAVE_NOMBRE);
        alert('✅ Nombre liberado. La próxima vez podrás ingresar otro.');
        location.reload();
      }
    };
  }

  // --- Botón CERTIFICADO ---
  const btnCert = document.getElementById('btn-certificado');
  const certificado = document.getElementById('certificado');
  if (btnCert && certificado) {
    btnCert.onclick = () => {
      certificado.classList.toggle('oculto');
      if (!certificado.classList.contains('oculto')) {
        certificado.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lanzarConfeti();
        setTimeout(() => lanzarConfeti(), 300);
      }
    };
  }
});
