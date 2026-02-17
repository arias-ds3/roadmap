// Ejemplo basico de clase 
class Persona {
  // Inicializador
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método
  imprimir() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

// Crear instancia
const persona1 = new Persona("Facundo", 26);

// Imprimir valores
persona1.imprimir();

// Modificar atributos
persona1.nombre = "Juan";
persona1.edad = 25;

// Volver a imprimir
persona1.imprimir();

// Clase Stack (Pila -LIFO)
class Stack {
  constructor() {
    this.items = [];
  }

  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  imprimir() {
    console.log("Stack:", this.items);
  }
}

// Uso
const pila = new Stack();

pila.push(1);
pila.push(2);
pila.push(3);

pila.imprimir(); // [1,2,3]
console.log("Eliminado:", pila.pop());
pila.imprimir();
console.log("Cantidad:", pila.size());
console.log("¿Está vacía?", pila.isEmpty());

// Clase Queue (Cola - FIFO)
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elemento) {
    this.items.push(elemento);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  imprimir() {
    console.log("Queue:", this.items);
  }
}

// Uso
const cola = new Queue();

cola.enqueue("A");
cola.enqueue("B");
cola.enqueue("C");

cola.imprimir();
console.log("Eliminado:", cola.dequeue());
cola.imprimir();
console.log("Cantidad:", cola.size());
console.log("¿Está vacía?", cola.isEmpty());