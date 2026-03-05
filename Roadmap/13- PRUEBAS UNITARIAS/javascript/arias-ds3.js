// ======================================
// EJERCICIO PRINCIPAL
// Función + Tests con Node.js (assert)
// ======================================

const assert = require("assert");

// Función a testear
function sumar(a, b) {
  return a + b;
}

// -----------------
// TESTS
// -----------------

// Test 1: suma correcta
assert.strictEqual(sumar(2, 3), 5);

// Test 2: suma con negativos
assert.strictEqual(sumar(-2, 3), 1);

// Test 3: suma con cero
assert.strictEqual(sumar(5, 0), 5);

console.log("✔ Tests de sumar() superados correctamente.");


// ======================================
// DIFICULTAD EXTRA
// ======================================

const persona = {
  name: "Facundo Arías",
  age: 25,
  birth_date: "2000-02-22",
  programming_languages: ["JavaScript", "Java", "Python"]
};

// -----------------
// TEST 1: verificar existencia de campos
// -----------------

assert.ok(persona.hasOwnProperty("name"));
assert.ok(persona.hasOwnProperty("age"));
assert.ok(persona.hasOwnProperty("birth_date"));
assert.ok(persona.hasOwnProperty("programming_languages"));

console.log("✔ Test de existencia de campos superado.");


// -----------------
// TEST 2: verificar datos correctos
// -----------------

assert.strictEqual(persona.name, "Facundo Arías");
assert.strictEqual(persona.age, 25);
assert.strictEqual(persona.birth_date, "2000-02-22");
assert.deepStrictEqual(
  persona.programming_languages,
  ["JavaScript", "Java", "Python"]
);

console.log("✔ Test de validación de datos superado.");
console.log("🎉 Todos los tests pasaron correctamente.");

