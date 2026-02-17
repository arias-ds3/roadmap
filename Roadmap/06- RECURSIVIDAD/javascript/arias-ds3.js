// RECURSIVIDAD

// Imprimir números del 100 al 0 de forma regresiva

function contarRegresivo(numero) {
  // Caso base
  if (numero < 0) return;

  console.log(numero);

  // Llamada recursiva
  contarRegresivo(numero - 1);
}

// Ejecutar
contarRegresivo(100);

// DIFICULTAD EXTRA: FACTORIAL
function factorial(n) {
  // Caso base
  if (n === 0) return 1;

  // Llamada recursiva
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// FIBONACCI
function fibonacci(n) {
  // Casos base
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Llamada recursiva
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13

// VERSION OPTIMIZADA DE FIBONACCI (MEMOIZATION)
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(50)); // Rápido
