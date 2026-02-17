const texto = "Hola Mundo";

// 🔹 1. Longitud
console.log(texto.length); // 10

// 🔹 2. Acceso a caracteres
console.log(texto[0]);        // H
console.log(texto.charAt(1)); // o

// 🔹 3. Subcadenas
console.log(texto.slice(0, 4));      // Hola
console.log(texto.substring(5, 10)); // Mundo
console.log(texto.substr(5, 5));     // Mundo (obsoleto pero funciona)

// 🔹 4. Concatenación
console.log(texto + "!!!");
console.log(texto.concat("!!!"));

// 🔹 5. Repetición
console.log("Ja".repeat(3)); // JaJaJa

// 🔹 6. Conversión a mayúsculas/minúsculas
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// 🔹 7. Eliminar espacios
console.log("   Hola   ".trim());
console.log("   Hola   ".trimStart());
console.log("   Hola   ".trimEnd());

// 🔹 8. Reemplazo
console.log(texto.replace("Mundo", "JavaScript"));
console.log("aaa".replaceAll("a", "b"));

// 🔹 9. División
const palabras = texto.split(" ");
console.log(palabras); // ["Hola", "Mundo"]

// 🔹 10. Unión
console.log(palabras.join("-")); // Hola-Mundo

// 🔹 11. Búsqueda
console.log(texto.includes("Mundo")); // true
console.log(texto.startsWith("Hola")); // true
console.log(texto.endsWith("Mundo")); // true
console.log(texto.indexOf("M")); // 5
console.log(texto.lastIndexOf("o")); // 9

// 🔹 12. Comparación
console.log("a" === "a"); // true
console.log("a".localeCompare("b")); // -1

// 🔹 13. Interpolación (Template Strings)
const nombre = "Facundo";
console.log(`Hola ${nombre}, bienvenido!`);

// 🔹 14. Recorrido
for (let letra of texto) {
  console.log(letra);
}

// 🔹 15. Convertir string a array
console.log(Array.from(texto));

// 🔹 16. Convertir número a string
const numero = 123;
console.log(numero.toString());
console.log(String(numero));

// EXTRA: Funciones para palíndromos, anagramas e isogramas

function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase().replace(/\s/g, "");
  return limpia === limpia.split("").reverse().join("");
}

function esAnagrama(p1, p2) {
  const limpiar = str =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  
  return limpiar(p1) === limpiar(p2);
}

function esIsograma(palabra) {
  const limpia = palabra.toLowerCase();
  const letras = new Set(limpia);
  return letras.size === limpia.length;
}

// 🔹 PRUEBA
const palabra1 = "reconocer";
const palabra2 = "correr";

console.log("¿Es palíndromo?", esPalindromo(palabra1));
console.log("¿Son anagramas?", esAnagrama(palabra1, palabra2));
console.log("¿Es isograma?", esIsograma(palabra1));
