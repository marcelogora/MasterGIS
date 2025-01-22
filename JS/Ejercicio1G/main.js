// Ejercicio 1G.1
const numeros = [1, 2, 3, 4, 5];

function sumaNumerosPares(numeros) {
  let suma = 0;

  for (const numero of numeros) {
    if (numero % 2 == 0) {
      suma += numero;
    }
  }

  return suma;
}

console.log("Ejercicio 1G.1 =", sumaNumerosPares(numeros));

// Ejercicio 1G.2

const cadena = "Hola Mundo";

function eliminarConsonantes(cadenaInput) {
  let vocales = "";

  const cadenaArray = cadenaInput.toLowerCase().split("");

  for (const letra of cadenaArray) {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      vocales += letra;
    }
  }

  return vocales;
}

console.log("Ejercicio 1G.2 =", eliminarConsonantes(cadena));


// Ejercicio 1G.3

function celsiusAFahrenheit(gradoCelsius) {
    return (gradoCelsius * (9/5) + 32)
}

console.log('Ejercicicio 1G.3', celsiusAFahrenheit(20))

// Ejercicio 1G.4

function checkNumber(numero) { 
    if(numero % 2 == 0) {
        return 'Núemero Par'
    } else {
        return 'Número Inpar'
    }
}


// Ejercicio 1G.5

// const promptUsuario = prompt('Escribe la cadena a evaluar')

// function mayusOMinus(cadenaDeTexto) {
//     if(promptUsuario == promptUsuario.toUpperCase()) {
//         return alert('Ka cadena está en mayúsculas')
//     } else if (promptUsuario == promptUsuario.toLowerCase()) {
//         return alert('La cadena está en minúscuas')
//     } else {
//         return alert('La cadena tiene ambas mayúsculas y minúsculas')
//     }
// }

//mayusOMinus(promptUsuario)

// Ejercicio 1G.6

const topics = [
    'JavaScript' ,
    'variables' ,
    'Funciones' ,
    'condiciones' ,
    'Bucles'
]

function invertMayus(array){
    const arrayMayus = array.map((topic)=>{
        return topic.toUpperCase()
    })
    arrayMayus.reverse()
    return arrayMayus
}

console.log('Ejercicio 1G.6',invertMayus(topics))

// Ejercicio 1G.7

 const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683]

 function paresArray(arrayNumeros){
    return arrayNumeros.filter(numero => numero % 2 == 0)
 }

 console.log('Ejercicio 1G.7 = ', paresArray(number))

 // Ejercicio 1G.8

 const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
 ]
 function mesesLargosmayusculas (arrayMeses){
    return arrayMeses.filter((mes)=> mes.length > 7)
    .map((mes) => {
        return mes.toUpperCase()
    })
 }

 console.log('Ejercicio 1G.8 = ', mesesLargosmayusculas(meses))