/**********************************
 * OPERADORES ARITMÉTICOS
 **********************************/

let a = 10;
let b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);
console.log("Potencia:", a ** b);
console.log("Incremento:", ++a);
console.log("Decremento:", --b);


/**********************************
 * OPERADORES DE ASIGNACIÓN
 **********************************/

let x = 5;

x += 2;
console.log("Asignación +=", x);

x -= 1;
console.log("Asignación -=", x);

x *= 3;
console.log("Asignación *=", x);

x /= 2;
console.log("Asignación /=", x);


/**********************************
 * OPERADORES DE COMPARACIÓN
 **********************************/

console.log("Igual (==):", 5 == "5");
console.log("Estrictamente igual (===):", 5 === "5");
console.log("Distinto (!=):", 5 != "5");
console.log("Mayor que:", 10 > 5);
console.log("Menor o igual:", 10 <= 10);


/**********************************
 * OPERADORES LÓGICOS
 **********************************/

let verdadero = true;
let falso = false;

console.log("AND (&&):", verdadero && falso);
console.log("OR (||):", verdadero || falso);
console.log("NOT (!):", !verdadero);


/**********************************
 * OPERADORES DE IDENTIDAD
 **********************************/

let obj1 = { nombre: "Facu" };
let obj2 = { nombre: "Facu" };
let obj3 = obj1;

console.log("Misma referencia:", obj1 === obj3);
console.log("Distinta referencia:", obj1 === obj2);


/**********************************
 * OPERADORES DE PERTENENCIA
 **********************************/

let array = [1, 2, 3];

console.log("Incluye 2:", array.includes(2));
console.log("Propiedad en objeto:", "nombre" in obj1);


/**********************************
 * OPERADORES BIT A BIT
 **********************************/

console.log("AND bit a bit:", 5 & 1);
console.log("OR bit a bit:", 5 | 1);
console.log("XOR bit a bit:", 5 ^ 1);
console.log("Desplazamiento izquierda:", 5 << 1);
console.log("Desplazamiento derecha:", 5 >> 1);
console.log("Desplazamiento sin signo:", 5 >>> 1);


/**********************************
 * CONDICIONALES
 **********************************/

let edad = 20;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Ternario
let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log("Operador ternario:", mensaje);


/**********************************
 * SWITCH
 **********************************/

let dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Otro día");
}


/**********************************
 * BUCLES ITERATIVOS
 **********************************/

// For
for (let i = 0; i < 3; i++) {
    console.log("For:", i);
}

// While
let contador = 0;
while (contador < 3) {
    console.log("While:", contador);
    contador++;
}

// Do While
let numero = 0;
do {
    console.log("Do While:", numero);
    numero++;
} while (numero < 3);

// For Of
for (let valor of array) {
    console.log("For Of:", valor);
}


/**********************************
 * EXCEPCIONES
 **********************************/

try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) {
        throw new Error("División inválida");
    }
} catch (error) {
    console.log("Error capturado:", error.message);
} finally {
    console.log("Bloque finally ejecutado");
}

/*EXTRA: NÚMEROS PARES ENTRE 10 Y 55, EXCLUYENDO 16 Y MÚLTIPLOS DE 3 */

console.log("Números entre 10 y 55, pares, no 16 y no múltiplos de 3:");

for (let i = 10; i <= 55; i++) {

    if (
        i % 2 === 0 &&     // Es par
        i !== 16 &&        // No es 16
        i % 3 !== 0        // No múltiplo de 3
    ) {
        console.log(i);
    }
}
