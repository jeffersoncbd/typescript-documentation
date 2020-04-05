class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8

  constructor(name: string) {
    this.name = name
  }
}

let dad = new Octopus('Man with the 8 strong legs')
dad.name = 'Man with the 3-piece suit' // Erro, pois 'name' é somente leitura