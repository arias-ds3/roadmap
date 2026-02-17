/* 
ESTRUCTURAS SOPORTADAS EN JAVACSRIPT
*/

// 1️⃣ Objet
let persona = {
    nombre: "Facundo",
    edad: 25
};

// Inserción
persona.telefono = "123456789";

// Actualización
persona.edad = 26;

// Borrado
delete persona.telefono;

console.log("Objeto final:", persona);

// 2️⃣ Array
let numeros = [5, 2, 9];

// Inserción
numeros.push(7);

// Actualización
numeros[0] = 10;

// Borrado
numeros.splice(1, 1);

// Ordenación
numeros.sort((a, b) => a - b);

console.log("Array final:", numeros);

// 3️⃣ Set
let conjunto = new Set([1, 2, 3]);

// Inserción
conjunto.add(4);

// Borrado
conjunto.delete(2);

// Actualización (se hace borrando y agregando)
conjunto.delete(3);
conjunto.add(30);

console.log("Set final:", conjunto);

// 4️⃣ Map
let mapa = new Map();

// Inserción
mapa.set("nombre", "Facundo");
mapa.set("edad", 25);

// Actualización
mapa.set("edad", 26);

// Borrado
mapa.delete("nombre");

console.log("Map final:", mapa);

// 5️⃣ String
let texto = "Hola";

// Inserción (concatenación)
texto += " Mundo";

// Reemplazo
texto = texto.replace("Mundo", "JavaScript");

// Ordenación (convertimos a array)
let ordenado = texto.split("").sort().join("");

console.log("String final:", texto);
console.log("String ordenado:", ordenado);

// 6️⃣ weakMap
let weakMapa = new WeakMap();
let clave = {};

// Inserción
weakMapa.set(clave, "Valor asociado");
// Actualización
weakMapa.set(clave, "Nuevo valor asociado");
// Borrado (se hace automáticamente al eliminar la referencia)
clave = null; // Eliminamos la referencia al objeto clave

console.log("WeakMap final:", weakMapa);

// 7️⃣ weakSet
let weakConjunto = new WeakSet();
let elemento = {};
// Inserción
weakConjunto.add(elemento);
// Borrado (se hace automáticamente al eliminar la referencia)
elemento = null; // Eliminamos la referencia al objeto elemento

console.log("WeakSet final:", weakConjunto);

/***********************
 * AGENDA FUNCIONAL
 ***********************/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let agenda = [];

function mostrarMenu() {
    console.log("\n--- AGENDA ---");
    console.log("1. Agregar contacto");
    console.log("2. Buscar contacto");
    console.log("3. Actualizar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");

    rl.question("Seleccione una opción: ", manejarOpcion);
}

function manejarOpcion(opcion) {

    switch (opcion) {

        case "1":
            rl.question("Nombre: ", (nombre) => {
                rl.question("Teléfono: ", (telefono) => {

                    if (!/^\d{1,11}$/.test(telefono)) {
                        console.log("Teléfono inválido.");
                        return mostrarMenu();
                    }

                    agenda.push({ nombre, telefono });
                    console.log("Contacto agregado.");
                    mostrarMenu();
                });
            });
            break;

        case "2":
            rl.question("Nombre a buscar: ", (nombre) => {
                let contacto = agenda.find(c => c.nombre === nombre);
                console.log(contacto || "No encontrado.");
                mostrarMenu();
            });
            break;

        case "3":
            rl.question("Nombre a actualizar: ", (nombre) => {
                let contacto = agenda.find(c => c.nombre === nombre);

                if (!contacto) {
                    console.log("No encontrado.");
                    return mostrarMenu();
                }

                rl.question("Nuevo teléfono: ", (telefono) => {

                    if (!/^\d{1,11}$/.test(telefono)) {
                        console.log("Teléfono inválido.");
                        return mostrarMenu();
                    }

                    contacto.telefono = telefono;
                    console.log("Actualizado correctamente.");
                    mostrarMenu();
                });
            });
            break;

        case "4":
            rl.question("Nombre a eliminar: ", (nombre) => {
                agenda = agenda.filter(c => c.nombre !== nombre);
                console.log("Contacto eliminado si existía.");
                mostrarMenu();
            });
            break;

        case "5":
            console.log("Programa finalizado.");
            rl.close();
            break;

        default:
            console.log("Opción inválida.");
            mostrarMenu();
    }
}

mostrarMenu();
