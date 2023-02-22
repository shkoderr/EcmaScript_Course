const cityField = 'city'

const job = 'FrontEnd'

const person = {
  age: 26, 
  name: 'Timur',
  job,             //можем в значения заносить переменные и, если они совпадают, оставить просто ключ (console - job: 'FrontEnd')
  [cityField]: 'Tbilisi',   //можем создавать динамические ключи в [] скобках и изменять их
  'country-live': 'Georgia',
  print: () => 'Person',  //напомним, что стрелочные ф-ии не создают своего контекста
  toString() {     //переопределим метод toString
    return Object.keys(this)  //данный метод пробегается по ключам объекта и возвращает массив
      .filter(key => key !== 'toString') //отфильтровали и убрали метод 'toString'
      .map(key => this[key])  //пробегаемся по всем ключам и возвращаем их значения
      .join(' ')              //соединяем через пробел значения ключей
  }  
}

//console.log(person.toString()) //26 Timur Georgia () => 'Person'
//console.log(person.print()) //Person


//=============МЕТОДЫ===============
const first = {a: 1}
const second = {b: 2}

//console.log(Object.is(20, 10)) //false - данные метод сравнивает аргументы на эквивалентность
//console.log(Object.assign(first, second)) //{ a: 1, b: 2 }
//console.log(first) //{ a: 1, b: 2 }
//=============
//Получается мы изменили наш первоначальный объект, чтобы этого не было, внесём в первый параметр наш target - новый объект, теперь будет создан новый объект, а наш first не изменится: 
//console.log(Object.assign({}, first, second, {   //также в кач-ве источника можем указывать свои объекты
//  c: 3, 
//  d: 4
//})) //{ a: 1, b: 2, c: 3, d: 4 }
//console.log(first) //{ a: 1 }

//================
const obj = Object.assign({}, first, second, {
  c: 3, 
  d: 4
})

//console.log(obj) //{ a: 1, b: 2, c: 3, d: 4 }

console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]-возвращает массив, состоящий из пар ключ-значение
console.log(Object.keys(obj)) //[ 'a', 'b', 'c', 'd' ] - возвращает массив, состоящий из ключей объекта
console.log(Object.values(obj)) // [ 1, 2, 3, 4 ] - возвращает массив, состоящий из значений объекта




