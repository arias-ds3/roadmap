// ======================================
// EJERCICIO PRINCIPAL
// 3 mecanismos para imprimir del 1 al 10
// ======================================

// 1️⃣ for clásico
console.log("For clásico:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2️⃣ while
console.log("\nWhile:");
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// 3️⃣ forEach con Array
console.log("\nforEach:");
Array.from({ length: 10 }, (_, i) => i + 1)
  .forEach(num => console.log(num));


// ======================================
// DIFICULTAD EXTRA
// Más mecanismos de iteración
// ======================================

console.log("\n4️⃣ do...while:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);


console.log("\n5️⃣ for...of:");
for (const num of Array.from({ length: 10 }, (_, i) => i + 1)) {
  console.log(num);
}


console.log("\n6️⃣ for...in (sobre array):");
const arr = Array.from({ length: 10 }, (_, i) => i + 1);
for (const index in arr) {
  console.log(arr[index]);
}


console.log("\n7️⃣ map():");
arr.map(num => console.log(num));


console.log("\n8️⃣ reduce():");
arr.reduce((_, num) => {
  console.log(num);
}, 0);


console.log("\n9️⃣ Iterador manual:");
const iterator = arr[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}


console.log("\n🔟 Recursividad:");
function imprimirRecursivo(n) {
  if (n > 10) return;
  console.log(n);
  imprimirRecursivo(n + 1);
}
imprimirRecursivo(1);
