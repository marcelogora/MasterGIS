const enlaces = document.getElementsByTagName("a");
console.log("Número de enlaces es: ", enlaces.length);

const penultimoEnlace = enlaces[enlaces.length - 2].href;
console.log(penultimoEnlace);

const tercerParrafo = document.getElementById("Third paragraph");
const numeroEnlacestercerParrafo =
  tercerParrafo.getElementsByTagName("a").length;

const parrafoResultados = document.createElement("p");
const contenidoParradoResultado = document.createTextNode(
  ` El número de enlaces en la página es: ${enlaces.length}, el link al que apunta el penúltimo enlace es: ${penultimoEnlace} y el número de enlaces del tercer párrafo es ${numeroEnlacestercerParrafo}`
);

parrafoResultados.appendChild(contenidoParradoResultado)
document.body.appendChild(parrafoResultados)