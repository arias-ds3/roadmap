// EXEPCIONES
try {
  // código que puede fallar
} catch (error) {
  // manejo del error
} finally {
  // se ejecuta siempre
}

// Forzar un error y capturarlo
try {
  const numeros = [1, 2, 3];

  // Acceso inválido y uso indebido
  console.log(numeros[10].toString()); // Provoca error

} catch (error) {
  console.log("Se produjo un error:");
  console.log(error.name);    // Tipo de error
  console.log(error.message); // Mensaje
} finally {
  console.log("El programa continúa ejecutándose.");
}


// Crear excepción personalizada
class ParametroInvalidoError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ParametroInvalidoError";
  }
}

// Funcion que puede lanzar 3 tipos de errores
function procesarParametros(a, b) {
  // Error 1: Tipo incorrecto
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos parámetros deben ser números.");
  }

  // Error 2: División por cero (manual)
  if (b === 0) {
    throw new RangeError("No se puede dividir por cero.");
  }

  // Error 3: Personalizado
  if (a < 0 || b < 0) {
    throw new ParametroInvalidoError("No se permiten números negativos.");
  }

  return a / b;
}

// Captura completa
try {
  const resultado = procesarParametros(10, 0);
  console.log("Resultado:", resultado);

} catch (error) {
  console.log("Se capturó un error:");
  console.log("Tipo:", error.name);
  console.log("Mensaje:", error.message);

} finally {
  console.log("La ejecución ha finalizado.");
}

// Casos de prueba
procesarParametros("10", 2); // TypeError
procesarParametros(10, 0);   // RangeError
procesarParametros(-5, 2);   // ParametroInvalidoError
procesarParametros(10, 2);   // OK

// Si no hay error:
try {
  const resultado = procesarParametros(10, 2);
  console.log("Resultado:", resultado);
  console.log("No se produjo ningún error.");

} catch (error) {
  console.log("Error:", error.name);
} finally {
  console.log("La ejecución ha finalizado.");
}
