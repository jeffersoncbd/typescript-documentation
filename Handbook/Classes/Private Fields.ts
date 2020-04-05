class Animal {
  private name: string 

  constructor(theName: string) {
    this.name = theName
  }
}

const animal = new Animal('cat')
animal.name // erro, pois o campo 'name' é privado
