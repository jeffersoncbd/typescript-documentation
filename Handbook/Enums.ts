/** Numeric enums */
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right // 4
}
enum Direction2 {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}
enum ResponseEnum {
  No = 0,
  Yes
}
function respond(recipient: string, message: ResponseEnum) {}
respond('Jefferson Carlos', ResponseEnum.Yes)
enum E {
  A = Math.random(),
  B // B não consegue gerar um valor automáticamente baseado em A
}


/** String enums */
enum Direction3 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}


/** Heterogeneous enums */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}


/** Computed and constant members */
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = '123'.length
}


/** Union enums and enum member types */
enum ShapeKind {
  Circle,
  Square
}
interface Circle {
  kind: ShapeKind.Circle
  radius: number
}
interface Square {
  kind: ShapeKind.Square
  sideLength: number
}
const c: Circle = {
  kind: ShapeKind.Square, // Mesmo Circle e Square sendo 'number' o typescript obra ser do type .Circle
  radius: 100
}


/** Enums at runtime */
enum E {
  X,
  Y,
  Z
}
function f(obj: { X: number }) {
  return obj.X
}
f(E)


/** Enums at compile time */
enum Enum {
  A
}
const a: number = Enum.A // 0
const nameOfA: string = Enum[a] // A