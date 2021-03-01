const body = document.body;

var info = [
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  {
    events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    squirrel: false,
  },
  {
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist",
    ],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["bread", "beer", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
  {
    events: ["lettuce", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "computer", "work"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    squirrel: false,
  },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false,
  },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  {
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false,
  },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false,
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false,
  },
  {
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree",
    ],
    squirrel: false,
  },
  {
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  {
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false,
  },
  {
    events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  {
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false,
  },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  {
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false,
  },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false,
  },
];

var contenedor = document.createElement("div")
contenedor.classList.add("table-responsive")
body.append(contenedor)
var titulo1 = document.createElement("h1")
contenedor.appendChild(titulo1)
titulo1.innerText = "Events"
var contenedorTabla = document.createElement("div");
contenedorTabla.classList.add("table");
contenedorTabla.classList.add("w-100%");
contenedor.appendChild(contenedorTabla);
var headerTabla = document.createElement("thead");
contenedorTabla.appendChild(headerTabla);
var tr = document.createElement("tr")
headerTabla.appendChild(tr)
var col1 = document.createElement("th");
var col2 = document.createElement("th");
var col3 = document.createElement("th");
tr.appendChild(col1);
col1.scope="col";
tr.appendChild(col2);
col2.scope="col";
tr.appendChild(col3);
col3.scope="col";

col1.innerText = "#";
col2.innerText = "Events";
col3.innerText = "Squirrel";

var bodyTabla = document.createElement("tbody");
contenedorTabla.appendChild(bodyTabla);

for (i = 0; i < info.length; i++) {
  let events = info[i].events.toString();
  let squirrel = info[i].squirrel;



  var tr2 = document.createElement("tr")
  bodyTabla.appendChild(tr2)
  
  var col1 = document.createElement("th");
  col1.scope="row";
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  tr2.appendChild(col1);
  tr2.appendChild(col2);
  tr2.appendChild(col3);

  if(squirrel)
  {
      tr2.classList.add("table-danger")
  }
  col1.innerText = i;
  col2.innerText = events;
  col3.innerText = squirrel;
}

function tieneEvento(evento, registro) {
  return registro.events.indexOf(evento) !== -1;
}

function tablaAux(evento, info) {
  let tabla = [0, 0, 0, 0];
  for (let i = 0, len = info.length; i < len; i++) {
    let entrada = info[i],
      j = 0;
    if (tieneEvento(evento, entrada)) j += 1;
    if (entrada.squirrel) j += 2;
    tabla[j] += 1;
  }
  return tabla;
}

var totalEventos = [];
info.forEach((entrada) => {
  entrada.events.forEach((evento) => {
    if (totalEventos.indexOf(evento) === -1) {
      totalEventos.push(evento);
    }
  });
});

var totalTablas = totalEventos.map((evento) => {
  return { evento: evento, valor: tablaAux(evento, info) };
});

function calculo(a, b, c, d) {
  const numerador = a * d - b * c;
  const denominador = Math.sqrt((a + b) * (c + d) * (a + c) * (b + d));
  return (numerador / denominador);
}

var correlaciones = totalTablas.map((table) => {
    return { evento: table.evento, cor: calculo.apply(null, table.valor) };
  });

correlaciones.sort(function(a, b){return b.cor - a.cor});


var titulo2 = document.createElement("h1")
contenedor.append(titulo2)
titulo2.innerText = "Correlation of events"

var contenedorTabla2 = document.createElement("div");
contenedorTabla2.classList.add("table");
contenedor.appendChild(contenedorTabla2);
var headerTabla2 = document.createElement("thead");
contenedorTabla2.appendChild(headerTabla2);
var tr3 = document.createElement("tr")
headerTabla2.appendChild(tr3)
var col1 = document.createElement("th");
var col2 = document.createElement("th");
var col3 = document.createElement("th");
tr3.appendChild(col1);
col1.scope="col";
tr3.appendChild(col2);
col2.scope="col";
tr3.appendChild(col3);
col3.scope="col";

col1.innerText = "#";
col2.innerText = "Event";
col3.innerText = "Correlation";

var bodyTabla2 = document.createElement("tbody");
contenedorTabla2.appendChild(bodyTabla2);

for (i = 0; i < correlaciones.length; i++) {
  
  let event = correlaciones[i].evento;
  let cor = correlaciones[i].cor;
  

  var tr4 = document.createElement("tr")
  bodyTabla2.appendChild(tr4)
  
  var col1 = document.createElement("th");
  col1.scope="row";
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  tr4.appendChild(col1);
  tr4.appendChild(col2);
  tr4.appendChild(col3);

  col1.innerText = i;
  col2.innerText = event;
  col3.innerText = cor;
}
