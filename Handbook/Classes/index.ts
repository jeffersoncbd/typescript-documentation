/** Classes */
class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return `Hello ${this.greeting}`
  }
}
const greeter = new Greeter('world')
greeter.greet()


/** Inheritance */
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
class Snack extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}
const typ = new Snack('Type')
const scr = new Horse('Script')
typ.move()
scr.move()


/** Public by default */
class Veihicle {
  public model: string

  public constructor(model: string) {
    this.model = model
  }
}


/** ECMAScript Private Fields */
class User {
  public name: string
  private password: string

  constructor(name: string, password: string) {
    this.name = name
    this.password = password
  }
}
const user = new User('Jefferson', 'secret')
user.name
