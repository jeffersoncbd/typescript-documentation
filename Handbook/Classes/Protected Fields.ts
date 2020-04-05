class Person {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private departament: string
  constructor(name: string, departament: string) {
    super(name)
    this.departament = departament
  }
  getElevatorPitch() {
    return `Olá, meu nome é ${this.name} e trabalho no departamento de ${this.departament}`
  }
}

let howard = new Employee('Howard', 'vendas')
console.log(howard.getElevatorPitch())
howard.name // Campo 'protected'
howard.departament // Campo 'private'
let john = new Person('John') // Construtor da classe person é 'protected'
