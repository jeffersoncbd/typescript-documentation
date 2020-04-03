/** Boolean */
const isDone: boolean = true


/** Number */
const decimal: number = 7
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744


/** String */
let color: string = 'blue'
color = 'red'
const myName: string = 'Jefferson Carlos'
const myAge: number = new Date().getFullYear() - 1995
const message: string = `
  Olá, meu nome é ${myName} e tenho ${myAge}.
`


/** Array */
const list: number[] = [1, 2, 3]
const anotherList: Array<number> = [1, 2, 3]


/** Tuple (Arrays que devem ser preenchidos exatamente como são definidos)*/
let predefinedArray: [string, number]
predefinedArray = ['Jefferson', new Date().getFullYear() - 1995]


/** Enum */
enum Colors {red, green, blue}
const colorEnum: number = Colors.green
enum AnotherColors {red = 2, green = 3, blue = 5}
const anotherColorEnum: string = AnotherColors[3]


/** Any */
let anything: any = 4
anything = 'hello word'
anything = true


/** Void */
function sayHi(): void {
  console.log('Hi!')
}


/** Null */
const nothing: null = null


/** Undefined */
const onlyDeclarad: undefined = undefined


/** Never */
function error(message: string): never {
  throw new Error(message)
}
function fail() {
  return error('Something failed')
}


/** Object */
declare function create(obj: object): void
create({ prop: 0 })


/** Type assertions - uma forma de dizer: "TS, confie em mim, este é o tipo correto!" */
let textLength: number
const anyValue: any = "I'm a text"
textLength = (<string>anyValue).length
textLength = (anyValue as string).length
