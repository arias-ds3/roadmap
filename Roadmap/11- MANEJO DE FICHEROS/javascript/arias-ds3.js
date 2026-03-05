// ===============================
// EJERCICIO PRINCIPAL
// ===============================

const fs = require("fs");
const readline = require("readline");

const githubUser = "arias-ds3";
const filename = `${githubUser}.txt`;

// Crear archivo y escribir contenido
const contenido = `Nombre: Facundo Arías
Edad: 25
Lenguaje favorito: JavaScript`;

fs.writeFileSync(filename, contenido);

// Leer e imprimir contenido
const data = fs.readFileSync(filename, "utf8");
console.log("Contenido del archivo:");
console.log(data);

// Borrar archivo
fs.unlinkSync(filename);
console.log("Archivo eliminado.");


// ===============================
// DIFICULTAD EXTRA
// ===============================

const salesFile = "ventas.txt";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n--- GESTIÓN DE VENTAS ---");
  console.log("1. Añadir producto");
  console.log("2. Consultar productos");
  console.log("3. Actualizar producto");
  console.log("4. Eliminar producto");
  console.log("5. Calcular venta total");
  console.log("6. Calcular venta por producto");
  console.log("7. Salir");
}

function leerArchivo() {
  if (!fs.existsSync(salesFile)) return [];
  const data = fs.readFileSync(salesFile, "utf8");
  return data ? data.split("\n").map(line => line.split(", ")) : [];
}

function guardarArchivo(productos) {
  const data = productos.map(p => p.join(", ")).join("\n");
  fs.writeFileSync(salesFile, data);
}

function menu() {
  mostrarMenu();
  rl.question("Seleccione opción: ", opcion => {
    switch (opcion) {
      case "1":
        rl.question("Nombre: ", nombre => {
          rl.question("Cantidad vendida: ", cantidad => {
            rl.question("Precio: ", precio => {
              const productos = leerArchivo();
              productos.push([nombre, cantidad, precio]);
              guardarArchivo(productos);
              console.log("Producto añadido.");
              menu();
            });
          });
        });
        break;

      case "2":
        const productos = leerArchivo();
        console.log("\nProductos:");
        productos.forEach(p => console.log(p.join(", ")));
        menu();
        break;

      case "3":
        rl.question("Nombre del producto a actualizar: ", nombre => {
          const productos = leerArchivo();
          const index = productos.findIndex(p => p[0] === nombre);
          if (index !== -1) {
            rl.question("Nueva cantidad: ", cantidad => {
              rl.question("Nuevo precio: ", precio => {
                productos[index] = [nombre, cantidad, precio];
                guardarArchivo(productos);
                console.log("Producto actualizado.");
                menu();
              });
            });
          } else {
            console.log("Producto no encontrado.");
            menu();
          }
        });
        break;

      case "4":
        rl.question("Nombre del producto a eliminar: ", nombre => {
          let productos = leerArchivo();
          productos = productos.filter(p => p[0] !== nombre);
          guardarArchivo(productos);
          console.log("Producto eliminado.");
          menu();
        });
        break;

      case "5":
        const lista = leerArchivo();
        const total = lista.reduce((acc, p) => acc + (parseFloat(p[1]) * parseFloat(p[2])), 0);
        console.log("Venta total:", total);
        menu();
        break;

      case "6":
        rl.question("Nombre del producto: ", nombre => {
          const lista = leerArchivo();
          const producto = lista.find(p => p[0] === nombre);
          if (producto) {
            const totalProducto = parseFloat(producto[1]) * parseFloat(producto[2]);
            console.log("Venta del producto:", totalProducto);
          } else {
            console.log("Producto no encontrado.");
          }
          menu();
        });
        break;

      case "7":
        if (fs.existsSync(salesFile)) {
          fs.unlinkSync(salesFile);
        }
        console.log("Archivo eliminado. Saliendo...");
        rl.close();
        break;

      default:
        console.log("Opción inválida.");
        menu();
    }
  });
}

// Iniciar menú
menu();
