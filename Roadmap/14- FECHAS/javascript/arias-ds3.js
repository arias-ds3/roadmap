// ======================================
// EJERCICIO PRINCIPAL
// ======================================

// Fecha actual
const fechaActual = new Date();

// Fecha de nacimiento (año, mes - 0 indexado, día, hora, minuto, segundo)
const fechaNacimiento = new Date(2000, 1, 22, 10, 30, 0); 
// 22 de Febrero de 2000 - 10:30:00

// Calcular años transcurridos
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

// Ajustar si todavía no pasó el cumpleaños este año
const mesActual = fechaActual.getMonth();
const diaActual = fechaActual.getDate();

const mesNacimiento = fechaNacimiento.getMonth();
const diaNacimiento = fechaNacimiento.getDate();

if (
  mesActual < mesNacimiento ||
  (mesActual === mesNacimiento && diaActual < diaNacimiento)
) {
  edad--;
}

console.log("Fecha actual:", fechaActual);
console.log("Fecha nacimiento:", fechaNacimiento);
console.log("Años transcurridos:", edad);


// ======================================
// DIFICULTAD EXTRA
// 10 FORMATEOS DIFERENTES
// ======================================

console.log("\n--- FORMATOS ---");

// 1. Día, mes y año
console.log("1:", fechaNacimiento.toLocaleDateString());

// 2. Hora, minuto y segundo
console.log("2:", fechaNacimiento.toLocaleTimeString());

// 3. Día de la semana
console.log("3:", fechaNacimiento.toLocaleDateString("es-ES", { weekday: "long" }));

// 4. Nombre del mes
console.log("4:", fechaNacimiento.toLocaleDateString("es-ES", { month: "long" }));

// 5. Día del año
const inicioAño = new Date(fechaNacimiento.getFullYear(), 0, 0);
const diferencia = fechaNacimiento - inicioAño;
const unDia = 1000 * 60 * 60 * 24;
const diaDelAño = Math.floor(diferencia / unDia);
console.log("5: Día del año:", diaDelAño);

// 6. Formato ISO
console.log("6:", fechaNacimiento.toISOString());

// 7. Año solamente
console.log("7:", fechaNacimiento.getFullYear());

// 8. Mes numérico
console.log("8:", fechaNacimiento.getMonth() + 1);

// 9. Timestamp (milisegundos desde 1970)
console.log("9:", fechaNacimiento.getTime());

// 10. Formato personalizado manual
const dia = String(fechaNacimiento.getDate()).padStart(2, "0");
const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, "0");
const año = fechaNacimiento.getFullYear();
const hora = String(fechaNacimiento.getHours()).padStart(2, "0");
const minutos = String(fechaNacimiento.getMinutes()).padStart(2, "0");

console.log("10:", `${dia}-${mes}-${año} ${hora}:${minutos}`);
