/** Typing the function */
function add(x: number, y: number): number {
  return x + y
}


/** Writing the function type */
const functionAdd: (x: number, y: number) => number = function(
  x: number, y: number
): number {
  return x + y
}


/** Inferring the types */
const functionSubtract: (x: number, y: number) => number = function(x, y) {
  return x - y
}


/** Optional and Default Parameters */
function buildName(firstName: string, lastName?: string) {
  if (lastName) return `${firstName} ${lastName}`;
  else return firstName;
}


/** Rest Parameters */
function buildFullName(firstName: string, ...restOfName: string[]){
  return `${firstName} ${restOfName.join(' ')}`
}


/** this and arrow functions */
const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: 52,
  createCardPicker: function() {
    return () => {
      const pickedCard = Math.floor(Math.random() * this.cards)
      const pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}
const cardPicker = deck.createCardPicker()
const pickedCard = cardPicker()


/** this parameters */
interface Card {
  suit: string,
  card: number
}
interface Deck {
  suits: string[]
  cards: number
  createCardPicker(this: Deck): () => Card
}
const newDeck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: 52,
  createCardPicker: function() {
    return () => {
      const pickedCard = Math.floor(Math.random() * this.cards)
      const pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}
const newCardPicker = newDeck.createCardPicker()
const newPickedCard = newCardPicker()


/** this parameters e Overloads são densos demais vou deixar pra depois... */
