//https://www.youtube.com/watch?v=Ti2Q4sQkNdU&list=PLqKQF2ojwm3llpxoP1rzoz7TE2Fpo4Zhp&index=1
//Const/let
let a = 24

if (true) {
  let a = 42

  console.log('a:', a)  //outputs a: 42
}

console.log(a)  //outputs 24
//Переменные, объявленные через 'let' видны только внутри фигурных скобок, в которых они заключены


//Hoisting - это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.

//Переменные, созданные через var хойстятся, т.е. мы можем с ними работать до их объявления
//b = 20
//console.log(b) //20
//var b = 10

//Мы не можем обращаться к переменным, объявленным через let/const до того как мы их объявим
//b = 20
//console.log(b) //ReferenceError
//let b = 10


//Если мы обращаемся к переменной, до того как она была объявлена, но при этом это происходит в функции, то всё сработает:
//function hoisted() {
//  age = 26
//}

//let age
//hoisted()
//console.log(age) //26


//CONST: hoisting схож с let
const COLOR = '#ffeebb'
//COLOR = '#333'

//console.log(COLOR) //assignment to cocnstant variable (error)

//Однако, мы можем изменять внутреннее состояние массива, заданного через const:
//const array = [1, 2, 3, 5, 8]
//console.log(array) //[ 1, 2, 3, 5, 8 ]
//array.push(13)
//console.log(array) //[ 1, 2, 3, 5, 8, 13 ]
//Таким образом const запрещает нам делать reassign, однако проводить манипуляции мы можем

//Пример с объектами: 
const obj = {a: 42}
obj.name = 'Igor'

console.log(obj) //{ a: 42, name: 'Igor' }