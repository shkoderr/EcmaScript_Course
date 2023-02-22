//Symbols - новый (7-й) тип данный в JS, появившийся в ES 6, необходим для создания уникальных ключей
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
const symbol = Symbol('demo')
const other = Symbol('demo')

//console.log(symbol) //Symbol(demo)
//console.log(other) //Symbol(demo)

//console.log(symbol === other) //false, т.к. символы абсолютно уникальные

const obj = {
  name: 'Timur',
  [symbol]: 'meta'
}

console.log(obj) //{ name: 'Timur', [Symbol(demo)]: 'meta' }
console.log(obj[symbol]) //meta
console.log(obj[other]) //undefined

//For in loop не видит символы в объекте
for (let key in obj) {
  console.log(key) //name
}

