/** Our First Interface */
interface ILabeledValue {
  label: string
}
function printLabel(labeledObj: ILabeledValue) {
  console.log(labeledObj.label)
}
printLabel({ label: 'label description' })


/** Optional Properties */
interface IAccount {
  name: string,
  permissionsLevel: number
}
interface IDataAccount {
  name: string,
  permissionsLevel?: number
}
function createAccount(data: IDataAccount): IAccount {
  let newAccount: IAccount = { name: data.name, permissionsLevel: 1 }
  if (data.permissionsLevel) {
    newAccount.permissionsLevel = data.permissionsLevel
  }
  return newAccount
}


/** Readonly - (Somente leitura) */
interface IPoint {
  readonly x: number
  readonly y: number
}
const point: IPoint = { x: 1, y: 2 }


/**
 * Excess Property Checks
 * Se por exemplo fosse informado permissionsLevels (com um S no fim)
 * O TS retornaria um erro:
 * 
 * "'permissionsLevels' does not exist in type 'IDataAccount'.
 * Did you mean to write 'permissionsLevel'?" */
createAccount({ name: 'Jefferson', permissionsLevel: 123 })


/** Function Types */
interface ISearchFunction {
  (source: string, subString: string): boolean
}
let mySearchFunction: ISearchFunction
mySearchFunction = function(src, sub) {
  const result = src.search(sub)
  return result > -1
}


/** Indexable Types */
// NÃO ENTENDI MUITO BEM ESSA PARTE, IREI PESQUISAR MELHOR SOBRE.


/** Class Type */
interface IClock {
  currentTime: Date
  setTime(date: Date): void
}
class Clock implements IClock {
  currentTime: Date
  constructor() {
    this.currentTime = new Date()
  }
  setTime(date: Date) {
    this.currentTime = date
  }
}


/** Extending Interfaces */
interface Animal {
  type: string
}
interface Dogs extends Animal {
  breed: string
}
const dog: Dogs = { type: 'mammal', breed: 'poodle' }
// multiple interfaces
interface DogWithOwner extends Animal, Dogs {
  owner: string
}
const Pong: DogWithOwner = { type: 'mammal', breed: 'poodle', owner: 'Claudia' }


/** Hybrid Types */
interface ICounter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): ICounter {
  let counter = (function (start: number) {}) as ICounter
  counter.interval = 123
  counter.reset = function () {}
  return counter
}


/** Interfaces Extending Classes */
class Control {
  private state: any
}
interface SelectableControl extends Control {
  select(): void
}
class Button extends Control implements SelectableControl {
  // Como esta classe extende Control, então ela consegue ser criada
  select() {}
}
class TextBox extends Control {
  // Como esta classe extende Control, então ela consegue ser criada mesmo sem
  // implementar a interface
  select() {}
}
/**
 * Mas uma classe que implementa a interface acima não consegue ser criada
 * se não extender a classe Control, resultando em erro
 * 
 *  class ImageClass implements SelectableControl {
 *    select() {}
 *  }
 */
