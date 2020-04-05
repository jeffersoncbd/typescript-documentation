/** String Literal Types */
type TVariant = 'primary' | 'secondary'
function component(variant: TVariant) {
  const variants = {
    primary: 'CSS primary',
    secondary: 'CSS secondary'
  }
  return variants[variant]
}
const css = component('secondary')


/** Numeric Literal Types */
type TPossibleResults = 1 | 2 | 3 | 4 | 5 | 6
function rollDice(): TPossibleResults {
  return (Math.floor(Math.random() * 6) + 1) as TPossibleResults
}
