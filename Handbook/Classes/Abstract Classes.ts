abstract class Departament {
  constructor(public name: string) {}

  printName() {
    console.log('Departament name: '+this.name)
  }

  abstract printMeeting(): void
}

class AccountingDepartament extends Departament {
  constructor() {
    super('Accounting and Auditing')
  }

  printMeeting() {
    console.log('The Accounting Departament meets each Monday at 10am.')
  }

  generateReports() {
    console.log('Generating accounting reports...')
  }
}

let departament: Departament
departament = new Departament() // Erro ao criar novo Departamento, pois esta classe é abstrata
departament = new AccountingDepartament()
departament.printName()
departament.printMeeting()
departament.generateReports() // Erro pois na linha 25 declaramos que essa variável é uma referencia a classe Departament
