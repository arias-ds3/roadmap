// ======================================
// EJERCICIO PRINCIPAL
// ======================================

let conjunto = [1, 2, 3, 4];

console.log("Inicial:", conjunto);

// 1️⃣ Añadir un elemento al final
conjunto.push(5);
console.log("Push (final):", conjunto);

// 2️⃣ Añadir un elemento al principio
conjunto.unshift(0);
console.log("Unshift (inicio):", conjunto);

// 3️⃣ Añadir varios elementos en bloque al final
conjunto.push(6, 7, 8);
console.log("Push múltiples (final):", conjunto);

// 4️⃣ Añadir varios elementos en bloque en posición concreta
// En índice 2, sin eliminar elementos
conjunto.splice(2, 0, 100, 200);
console.log("Splice insertar en posición 2:", conjunto);

// 5️⃣ Eliminar un elemento en posición concreta
// Eliminar 1 elemento en índice 3
conjunto.splice(3, 1);
console.log("Splice eliminar en índice 3:", conjunto);

// 6️⃣ Actualizar un elemento en posición concreta
conjunto[4] = 999;
console.log("Actualizar índice 4:", conjunto);

// 7️⃣ Comprobar si un elemento existe
console.log("¿Incluye 999?", conjunto.includes(999));

// 8️⃣ Eliminar todo el contenido
conjunto.length = 0;
console.log("Vaciar conjunto:", conjunto);


// ======================================
// DIFICULTAD EXTRA
// Operaciones con Set
// ======================================

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 🔹 Unión
const union = new Set([...setA, ...setB]);
console.log("\nUnión:", union);

// 🔹 Intersección
const interseccion = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersección:", interseccion);

// 🔹 Diferencia (A - B)
const diferencia = new Set([...setA].filter(x => !setB.has(x)));
console.log("Diferencia (A - B):", diferencia);

// 🔹 Diferencia simétrica
const diferenciaSimetrica = new Set(
  [...setA].filter(x => !setB.has(x))
  .concat([...setB].filter(x => !setA.has(x)))
);
console.log("Diferencia simétrica:", diferenciaSimetrica);
