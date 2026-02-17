// PILA (STACK - LIFO)
class Stack {
  constructor() {
    this.items = [];
  }

  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.isEmpty()) return "La pila está vacía";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Uso
const pila = new Stack();
pila.push(10);
pila.push(20);
pila.push(30);

console.log(pila.pop()); // 30
console.log(pila.peek()); // 20
console.log(pila.size()); // 2
console.log(pila.isEmpty()); // false

// COLA (QUEUE - FIFO)
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elemento) {
    this.items.push(elemento);
  }

  dequeue() {
    if (this.isEmpty()) return "La cola está vacía";
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Uso
const cola = new Queue();
cola.enqueue("A");
cola.enqueue("B");
cola.enqueue("C");

console.log(cola.dequeue()); // A
console.log(cola.front()); // B
console.log(cola.size()); // 2
console.log(cola.isEmpty()); // false

// DIFICULTAD EXTRA: Simulacion navegador (atras / adelante)

class Navegador {
  constructor() {
    this.atras = new Stack();
    this.adelante = new Stack();
    this.actual = null;
  }

  navegar(pagina) {
    if (this.actual) {
      this.atras.push(this.actual);
    }
    this.actual = pagina;
    this.adelante = new Stack(); // limpiar historial adelante
    console.log("Visitando:", this.actual);
  }

  irAtras() {
    if (this.atras.isEmpty()) {
      console.log("No hay páginas atrás");
      return;
    }
    this.adelante.push(this.actual);
    this.actual = this.atras.pop();
    console.log("Atrás a:", this.actual);
  }

  irAdelante() {
    if (this.adelante.isEmpty()) {
      console.log("No hay páginas adelante");
      return;
    }
    this.atras.push(this.actual);
    this.actual = this.adelante.pop();
    console.log("Adelante a:", this.actual);
  }
}

// Uso
const browser = new Navegador();

browser.navegar("google.com");
browser.navegar("youtube.com");
browser.navegar("github.com");

browser.irAtras();
browser.irAtras();
browser.irAdelante();

// Simulacion impresora compartida
class Impresora {
  constructor() {
    this.cola = new Queue();
  }

  agregarDocumento(doc) {
    this.cola.enqueue(doc);
    console.log("Documento agregado:", doc);
  }

  imprimir() {
    if (this.cola.isEmpty()) {
      console.log("No hay documentos para imprimir");
      return;
    }
    console.log("Imprimiendo:", this.cola.dequeue());
  }
}

// Uso
const impresora = new Impresora();

impresora.agregarDocumento("Contrato.pdf");
impresora.agregarDocumento("Reporte.xlsx");
impresora.agregarDocumento("Factura.docx");

impresora.imprimir();
impresora.imprimir();
