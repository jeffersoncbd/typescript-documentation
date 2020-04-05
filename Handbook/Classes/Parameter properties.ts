class Octopus {
  readonly numberOfLegs: number = 8
  constructor(readonly name: string) {}
}

const man = new Octopus('Man')
man.name = 'Test' // O campo 'name' foi declarado corretamente e como somente leitura
