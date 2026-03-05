// ======================================
// EJERCICIO PRINCIPAL
// Expresiones Regulares en JavaScript
// ======================================

const texto = `
Hola, tengo 25 años.
Mi número favorito es el 7.
En 2026 voy a aprender 3 nuevos lenguajes.
Precio: 199.99 dólares.
`;

// Expresión regular para extraer números (enteros y decimales)
const regexNumeros = /\d+(\.\d+)?/g;

const numerosEncontrados = texto.match(regexNumeros);

console.log("Números encontrados:");
console.log(numerosEncontrados);


// ======================================
// DIFICULTAD EXTRA
// ======================================

// 1️⃣ Validar email
const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

// 2️⃣ Validar número de teléfono
// Acepta formatos como:
// 1234567890
// +541112345678
// 11-1234-5678
const regexTelefono = /^\+?\d{1,3}?[- ]?\d{2,4}?[- ]?\d{4,8}$/;

// 3️⃣ Validar URL
const regexURL = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/i;


// ======================================
// PRUEBAS
// ======================================

console.log("\n--- Validación Email ---");
console.log(regexEmail.test("correo@dominio.com")); // true
console.log(regexEmail.test("correo@dominio"));     // false

console.log("\n--- Validación Teléfono ---");
console.log(regexTelefono.test("+541112345678"));   // true
console.log(regexTelefono.test("123"));             // false

console.log("\n--- Validación URL ---");
console.log(regexURL.test("https://google.com"));   // true
console.log(regexURL.test("miweb"));                // false
