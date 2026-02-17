/*
  FUNCIONES BÁSICAS
*/

// 1️⃣ Función sin parámetros ni retorno
function saludar() {
    console.log("Hola, esta es una función sin parámetros ni retorno");
}

saludar();


// 2️⃣ Función con un parámetro
function saludarPersona(nombre) {
    console.log("Hola " + nombre);
}

saludarPersona("Facundo");


// 3️⃣ Función con varios parámetros
function sumar(a, b) {
    console.log("La suma es:", a + b);
}

sumar(5, 10);


// 4️⃣ Función con retorno
function multiplicar(a, b) {
    return a * b;
}

let resultadoMultiplicacion = multiplicar(4, 6);
console.log("Resultado multiplicación:", resultadoMultiplicacion);


/***********************
 * FUNCIONES DENTRO DE FUNCIONES
 ***********************/

function externa() {
    console.log("Función externa");

    function interna() {
        console.log("Función interna");
    }

    interna(); // Llamamos a la función interna
}

externa();


/***********************
 * FUNCIONES PROPIAS DEL LENGUAJE
 ***********************/

// Ejemplo con Math
let numeroAleatorio = Math.random();
console.log("Número aleatorio:", numeroAleatorio);

// Ejemplo con parseInt
let textoNumero = "123";
let numeroConvertido = parseInt(textoNumero);
console.log("Número convertido:", numeroConvertido);


/***********************
 * VARIABLES LOCALES Y GLOBALES
 ***********************/

let variableGlobal = "Soy global";

function ejemploVariables() {
    let variableLocal = "Soy local";

    console.log(variableGlobal); // Se puede usar
    console.log(variableLocal);  // Se puede usar
}

ejemploVariables();

console.log(variableGlobal); // Funciona
// console.log(variableLocal); ❌ Error si la descomentás


/***********************
 * DIFICULTAD EXTRA
 ***********************/

function reto(texto1, texto2) {
    let contadorNumeros = 0;

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(texto1 + texto2);
        } 
        else if (i % 3 === 0) {
            console.log(texto1);
        } 
        else if (i % 5 === 0) {
            console.log(texto2);
        } 
        else {
            console.log(i);
            contadorNumeros++;
        }
    }

    return contadorNumeros;
}

let cantidad = reto("Fizz", "Buzz");
console.log("Cantidad de números impresos:", cantidad);
