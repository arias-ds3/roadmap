// ===============================
// EJERCICIO PRINCIPAL
// ===============================

const fs = require("fs");
const path = require("path");

// Datos
const datos = {
  nombre: "Facundo Arías",
  edad: 25,
  fechaNacimiento: "2000-02-22",
  lenguajes: ["JavaScript", "Java", "Python"]
};

// ----------- JSON -----------

const jsonFile = "datos.json";
fs.writeFileSync(jsonFile, JSON.stringify(datos, null, 2));

console.log("Contenido JSON:");
console.log(fs.readFileSync(jsonFile, "utf8"));

// ----------- XML -----------

const xmlFile = "datos.xml";

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<persona>
  <nombre>${datos.nombre}</nombre>
  <edad>${datos.edad}</edad>
  <fechaNacimiento>${datos.fechaNacimiento}</fechaNacimiento>
  <lenguajes>
    ${datos.lenguajes.map(l => `<lenguaje>${l}</lenguaje>`).join("\n    ")}
  </lenguajes>
</persona>`;

fs.writeFileSync(xmlFile, xmlContent);

console.log("\nContenido XML:");
console.log(fs.readFileSync(xmlFile, "utf8"));

// ===============================
// DIFICULTAD EXTRA
// ===============================

class Persona {
  constructor(nombre, edad, fechaNacimiento, lenguajes) {
    this.nombre = nombre;
    this.edad = edad;
    this.fechaNacimiento = fechaNacimiento;
    this.lenguajes = lenguajes;
  }

  imprimir() {
    console.log("\nInstancia Persona:");
    console.log(this);
  }
}

// ----------- Leer JSON -----------

const jsonData = JSON.parse(fs.readFileSync(jsonFile, "utf8"));
const personaDesdeJSON = new Persona(
  jsonData.nombre,
  jsonData.edad,
  jsonData.fechaNacimiento,
  jsonData.lenguajes
);

personaDesdeJSON.imprimir();

// ----------- Leer XML (parseo simple manual) -----------

const xmlData = fs.readFileSync(xmlFile, "utf8");

function extraerEtiqueta(xml, etiqueta) {
  const regex = new RegExp(`<${etiqueta}>(.*?)</${etiqueta}>`, "g");
  const resultados = [];
  let match;
  while ((match = regex.exec(xml)) !== null) {
    resultados.push(match[1]);
  }
  return resultados.length === 1 ? resultados[0] : resultados;
}

const personaDesdeXML = new Persona(
  extraerEtiqueta(xmlData, "nombre"),
  parseInt(extraerEtiqueta(xmlData, "edad")),
  extraerEtiqueta(xmlData, "fechaNacimiento"),
  extraerEtiqueta(xmlData, "lenguaje")
);

personaDesdeXML.imprimir();

// ===============================
// BORRAR ARCHIVOS
// ===============================

fs.unlinkSync(jsonFile);
fs.unlinkSync(xmlFile);

console.log("\nArchivos eliminados.");
