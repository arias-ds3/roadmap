// HERENCIA 

// Superclase Animal
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("El animal hace un sonido.");
  }
}

// Subclase Perro que hereda de Animal
class Perro extends Animal {
  constructor(nombre) {
    super(nombre); // Llama al constructor de Animal
  }

  hacerSonido() {
    console.log(`${this.nombre} dice: Guau 🐶`);
  }
}

// Subclase Gato 
class Gato extends Animal {
  constructor(nombre) {
    super(nombre);
  }

  hacerSonido() {
    console.log(`${this.nombre} dice: Miau 🐱`);
  }
}

// Uso
const perro = new Perro("Firulais");
const gato = new Gato("Michi");

perro.hacerSonido();
gato.hacerSonido();


// Superclase Empleado
class Empleado {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.empleadosACargo = [];
  }

  agregarEmpleado(empleado) {
    this.empleadosACargo.push(empleado);
  }

  mostrarInfo() {
    console.log(`ID: ${this.id} - Nombre: ${this.nombre}`);
  }

  listarEmpleados() {
    console.log(`Empleados a cargo de ${this.nombre}:`);
    this.empleadosACargo.forEach(e => {
      console.log(`- ${e.nombre}`);
    });
  }
}

// Gerente
class Gerente extends Empleado {
  constructor(id, nombre, departamento) {
    super(id, nombre);
    this.departamento = departamento;
  }

  planificar() {
    console.log(`${this.nombre} está planificando el departamento ${this.departamento}.`);
  }
}

// Gerente de proyecto
class GerenteProyecto extends Empleado {
  constructor(id, nombre, proyecto) {
    super(id, nombre);
    this.proyecto = proyecto;
  }

  coordinarProyecto() {
    console.log(`${this.nombre} coordina el proyecto ${this.proyecto}.`);
  }
}

// Programador 
class Programador extends Empleado {
  constructor(id, nombre, lenguaje) {
    super(id, nombre);
    this.lenguaje = lenguaje;
  }

  programar() {
    console.log(`${this.nombre} está programando en ${this.lenguaje}.`);
  }
}

// Uso completo
const gerente = new Gerente(1, "Ana", "Tecnología");
const jefeProyecto = new GerenteProyecto(2, "Carlos", "App Web");
const dev1 = new Programador(3, "Lucía", "JavaScript");
const dev2 = new Programador(4, "Mario", "Java");

gerente.agregarEmpleado(jefeProyecto);
jefeProyecto.agregarEmpleado(dev1);
jefeProyecto.agregarEmpleado(dev2);

gerente.mostrarInfo();
gerente.planificar();
gerente.listarEmpleados();

jefeProyecto.coordinarProyecto();
jefeProyecto.listarEmpleados();

dev1.programar();
dev2.programar();