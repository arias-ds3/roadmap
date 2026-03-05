// ======================================
// EJERCICIO PRINCIPAL
// En JavaScript no existen los Enum nativos,
// pero podemos simularlos con Object.freeze()
// ======================================

// Enum para los días de la semana
const DiaSemana = Object.freeze({
  LUNES: 1,
  MARTES: 2,
  MIERCOLES: 3,
  JUEVES: 4,
  VIERNES: 5,
  SABADO: 6,
  DOMINGO: 7
});

// Función que recibe un número (1-7)
// y devuelve el nombre del día
function obtenerDia(numero) {
  const dias = Object.keys(DiaSemana);
  const dia = dias.find(key => DiaSemana[key] === numero);

  return dia || "Número inválido (debe ser del 1 al 7)";
}

// Pruebas
console.log(obtenerDia(1)); // LUNES
console.log(obtenerDia(5)); // VIERNES
console.log(obtenerDia(7)); // DOMINGO
console.log(obtenerDia(10)); // Número inválido


// ======================================
// DIFICULTAD EXTRA
// Sistema de gestión de pedidos
// ======================================

// Enum para estado del pedido
const EstadoPedido = Object.freeze({
  PENDIENTE: "PENDIENTE",
  ENVIADO: "ENVIADO",
  ENTREGADO: "ENTREGADO",
  CANCELADO: "CANCELADO"
});

class Pedido {
  constructor(id) {
    this.id = id;
    this.estado = EstadoPedido.PENDIENTE;
  }

  enviar() {
    if (this.estado === EstadoPedido.PENDIENTE) {
      this.estado = EstadoPedido.ENVIADO;
      console.log(`Pedido ${this.id} ha sido enviado.`);
    } else {
      console.log(`No se puede enviar el pedido ${this.id} en estado ${this.estado}.`);
    }
  }

  entregar() {
    if (this.estado === EstadoPedido.ENVIADO) {
      this.estado = EstadoPedido.ENTREGADO;
      console.log(`Pedido ${this.id} ha sido entregado.`);
    } else {
      console.log(`No se puede entregar el pedido ${this.id} en estado ${this.estado}.`);
    }
  }

  cancelar() {
    if (this.estado === EstadoPedido.PENDIENTE) {
      this.estado = EstadoPedido.CANCELADO;
      console.log(`Pedido ${this.id} ha sido cancelado.`);
    } else {
      console.log(`No se puede cancelar el pedido ${this.id} en estado ${this.estado}.`);
    }
  }

  mostrarEstado() {
    let descripcion = "";

    switch (this.estado) {
      case EstadoPedido.PENDIENTE:
        descripcion = "El pedido está pendiente de procesamiento.";
        break;
      case EstadoPedido.ENVIADO:
        descripcion = "El pedido ha sido enviado y está en camino.";
        break;
      case EstadoPedido.ENTREGADO:
        descripcion = "El pedido fue entregado correctamente.";
        break;
      case EstadoPedido.CANCELADO:
        descripcion = "El pedido fue cancelado.";
        break;
    }

    console.log(`Pedido ${this.id} → ${descripcion}`);
  }
}


// ======================================
// Uso del sistema
// ======================================

const pedido1 = new Pedido(101);
pedido1.mostrarEstado();
pedido1.enviar();
pedido1.entregar();
pedido1.mostrarEstado();

console.log("---------------");

const pedido2 = new Pedido(102);
pedido2.mostrarEstado();
pedido2.cancelar();
pedido2.entregar(); // No permitido
pedido2.mostrarEstado();

console.log("---------------");

const pedido3 = new Pedido(103);
pedido3.enviar();
pedido3.cancelar(); // No permitido
pedido3.mostrarEstado();
