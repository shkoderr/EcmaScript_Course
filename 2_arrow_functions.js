//Arrow functions:
//Как было раньше: 
//function sum(a, b) {
//  return a + b
//}

//function cube(a) {
//  return a ** 3
//}

//Теперь: 
//const sum = (a, b) => a + b
//const cube = a => a ** 3
//setTimeout(() => console.log('After 1 sec'), 1000) 

//============================================================
//Context:
function log() {
  console.log(this)
}

const arrowLog = () => console.log(this)

//const person = {
//  name: 'Timur',
//  age: 20,
//  log: log,
//  arrowLog: arrowLog,
//  delayLog: function () {
//    setTimeout(function() {
//      console.log(this.name + ' ' + this.age)
//    }, 1000);
//  }
//}

//person.log()  //outputs our object
//person.arrowLog() //outputs {} - global object 'global', в браузере будет 'window'
//Почему так произошло? 
//Ключевое слово 'function' создаёт собственный контекст и у него есть 'this', которая указывает на функцию, в контексте которой она была вызвана
//У стрелочной функции нет собственного контекста, таким образом ключевое слово 'this' указывает на вышележащий контекст, в нашем случае это 'global'

//person.delayLog() //'undefined undefined', т.к. function, внутри которого мы вызвали this, создал собственный контекст, принадлежащий к глобальному объекту 'global', а у него нет перменных 'name' и 'age'. 

//Как мы решали эту проблему раньше? Создавали доп-ую перменную и присваивали ей значение 'this' - переопределяли контекст
//const person = {
//  name: 'Timur',
//  age: 26,
//  log: log,
//  arrowLog: arrowLog,
//  delayLog: function () {
//    const self = this  //переопределили контекст
//    setTimeout(function() {
//      console.log(self.name + ' ' + self.age)
//    }, 1000);
//  }
//}

//person.delayLog() //'Timur 26'

//В ES6 мы используем стрелочные функции: 
const person = {
  name: 'Timur',
  age: 26,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    setTimeout(() => {   //данная функция не создаёт собственного контекста, поэтому this указывает на вышележащий контекст 'person'
      console.log(this.name + ' ' + this.age)
    }, 1000);
  }
}

person.delayLog() //'Timur 26'



