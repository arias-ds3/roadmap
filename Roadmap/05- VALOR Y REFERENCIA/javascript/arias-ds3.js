// ASIGNACION POR VALOR

// los tipos primitivos son: string, number, boolean, null, undefined y symbol, bigint

let a = 10;
let b = a; // copia el valor

b = 20;

console.log(a); // 10 (NO cambia)
console.log(b); // 20

// ASIGNACION POR REFERENCIA
let obj1 = { nombre: "Facundo" };
let obj2 = obj1; // copia la referencia

obj2.nombre = "Juan";

console.log(obj1.nombre); // Juan (¡se modificó!)
console.log(obj2.nombre); // Juan

// Funciones: paso por valor
function modificarNumero(num) {
  num = num + 10;
}

let numero = 5;

modificarNumero(numero);

console.log(numero); // 5 (no cambia)

// Funciones: paso por referencia
function modificarObjeto(persona) {
  persona.nombre = "Carlos";
}

let persona1 = { nombre: "Facundo" };

modificarObjeto(persona1);

console.log(persona1.nombre); // Carlos (sí cambia)

// caso interesante
function reemplazarObjeto(obj) {
  obj = { nombre: "Nuevo" };
}

let persona2 = { nombre: "Original" };

reemplazarObjeto(persona2);

console.log(persona2.nombre); // Original

// EXTRA: Programa 1 - Intercambio por valor (primitivos)
function intercambiarValor(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

let x = 1;
let y = 2;

let [nuevoX, nuevoY] = intercambiarValor(x, y);

console.log("Originales:", x, y);     // 1 2
console.log("Intercambiados:", nuevoX, nuevoY); // 2 1

// Programa 2 - Intercambio por referencia (objetos)
function intercambiarReferencia(obj1, obj2) {
  let temp = obj1.valor;
  obj1.valor = obj2.valor;
  obj2.valor = temp;
}

let objA = { valor: 10 };
let objB = { valor: 20 };

intercambiarReferencia(objA, objB);

console.log("Originales modificados:");
console.log(objA.valor); // 20
console.log(objB.valor); // 10
