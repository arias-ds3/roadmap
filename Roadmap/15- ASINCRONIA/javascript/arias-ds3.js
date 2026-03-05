// ======================================
// EJERCICIO PRINCIPAL
// ======================================

// Función asíncrona parametizable
function tareaAsincrona(nombre, segundos) {
  return new Promise((resolve) => {
    const inicio = new Date();
    console.log(`▶ ${nombre} inicia: ${inicio.toLocaleTimeString()}`);
    console.log(`⏳ Duración: ${segundos} segundo(s)`);

    setTimeout(() => {
      const fin = new Date();
      console.log(`✅ ${nombre} finaliza: ${fin.toLocaleTimeString()}`);
      resolve();
    }, segundos * 1000);
  });
}

// Ejemplo de uso:
// tareaAsincrona("TareaX", 2);


// ======================================
// DIFICULTAD EXTRA
// ======================================

async function ejecutarPrograma() {
  console.log("\n--- INICIO PROGRAMA ---\n");

  // C (3s), B (2s), A (1s) en paralelo
  const promesaC = tareaAsincrona("Función C", 3);
  const promesaB = tareaAsincrona("Función B", 2);
  const promesaA = tareaAsincrona("Función A", 1);

  // Esperar que todas terminen
  await Promise.all([promesaC, promesaB, promesaA]);

  // Ejecutar D cuando las anteriores finalicen
  await tareaAsincrona("Función D", 1);

  console.log("\n--- FIN PROGRAMA ---");
}

// Ejecutar
ejecutarPrograma();
