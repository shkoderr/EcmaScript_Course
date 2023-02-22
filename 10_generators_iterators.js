const array = [1, 2, 3, 4]

const str = 'Hello'

//По умолчанию для массивов и строк определён символьный итератор: 
//console.log(array[Symbol.iterator]) //[Function: values]
//console.log(str[Symbol.iterator]) //[Function: [Symbol.iterator]]

//const iter = array[Symbol.iterator]()

//console.log(iter) //Object [Array Iterator] {}

//console.log(iter.next()) //{ value: 1, done: false }
//console.log(iter.next()) //{ value: 2, done: false }
//console.log(iter.next()) //{ value: 3, done: false }
//console.log(iter.next()) //{ value: 4, done: false }
//console.log(iter.next()) //{ value: undefined, done: true } - итератор закончился 

//for (let item of array) {
//  console.log(item)     //1 2 3 4 
//}

//for (let item of str) { 
//  console.log(item)    //H e l l o
//}


//const country = {
//  values: ['ru', 'kz', 'ua', 'by'],
//  [Symbol.iterator]() {             //создадим свой уникальный итератор
//    let i = 0
//    return {                       //возвращаем объект,у которого есть свой метод next()
//      next: () => {
//        const value = this.values[i]  //
//        i++ 
//        return {                     //возвращаем объекту которого есть булеан и значение
//          done: i > this.values.length,   //если индекс больше длины массива, done = true
//          value
//        }
//      }
//    }
//  }
//}

//for (const item of country) {
//  console.log(item)      //ru kz ua by
//}



//================Generators=================
function* gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i                                //ключевое слово yield порционно выдаёт нам значения
    } catch (e) {
      console.log('Error', e)
    }
    
    
  }
}

const iter = gen(3) 
console.log(iter.next())    //{ value: 0, done: false }
console.log(iter.throw('My error'))    //Error My error
console.log(iter.next())    //{ value: 2, done: false }
console.log(iter.next())    //{ value: undefined, done: true }

//for (let i of gen(4)) {
//  console.log(i)            //0 1 2 3 
//}
 