//Spread and Rest operators

//======================Rest=========================== 
//function average(arr) {
//  return arr.reduce((acc, i) => acc += i, 0) / arr.length   //находим среднее арифметическое 
//}

//console.log(average([10, 20, 30, 40]))  //25 

//Однако, если мы хотим в параметры нашей функции передавать не массив, а n-e кол-во параметров, то...
//1. раньше делали так: 
//function average() {
//  return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
//}

//console.log(average(10, 20, 30, 40))  //25 
//arguments - это псевдомассив, содержащий все аргументы функции, однако у него нет методов массива, поэтому его надо дополнительно оборачивать в массив с помощью Array.from()

//2. ES-6: 
//function average(...args) {
//  return args.reduce((acc, i) => acc += i, 0) / args.length
//}

//console.log(average(10, 20, 30, 40)) //25


//==============================Spread===============================разворачивает массив
//const array = [1, 2, 3, 5, 8, 13]
//console.log(array) //[ 1, 2, 3, 5, 8, 13 ]
//console.log(...array) //1 2 3 5 8 13
//console.log(Math.max(array)) //NaN
//console.log(Math.max(...array)) //13, т.к. мы развернули наш массив и нашли максимальное значение
//Раньше для этой цели применяли метод 'apply':
//console.log(Math.max.apply(null, array)) //13, метод 'apply' принимает 2 параметра: 1 - контекст, нам он не нужен сейчас, 2 - массив аргументов

//Теперь клонируем массив array с помощью spread:
//const fib = [1, ...array]
//console.log(fib) //[ 1, 1, 2, 3, 5, 8, 13 ]


//===============Destructuring==================
//Arrays======
const array = [1, 2, 3, 5, 8, 13]

//const [a, b = 42, ...c] = array
//console.log(a, b)  //1 2
//console.log(a, b, c)  //1 2 [ 3, 5, 8, 13 ]

//const [a,, c] = array
//console.log(a, c) //1 3

//Objects=======
//const address = {
//  country: 'Georgia',
//  city: 'Tbilisi',
//  street: 'Levan Asatiani',
//  concat: function () {
//    return `${this.country}, ${this.city}, ${this.street}`
//  }
//}

//console.log(address.concat()) //Georgia, Tbilisi, Levan Asatiani

//const {city, country, street, concat} = address
//console.log(city) //Tbilisi
//console.log(concat()) //undefined, undefined, undefined
//console.log(concat.call(address)) //Georgia, Tbilisi, Levan Asatiani

//Также мы можем присваивать новые переменные и задавать значения по умолчанию:
//const {city, country, street = 'Tsereteli', concat: addressConcat} = address
//console.log(addressConcat.call(address)) //Georgia, Tbilisi, Levan Asatiani

//===========
//Ещё пример дестрактаринга:
const address = {
  country: 'Georgia',
  city: 'Tbilisi',
  street: 'Levan Asatiani',
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`
  }
}

const {city, ...rest} = address

//console.log(city) //Tbilisi
//console.log(rest) 
                    /*{
                      country: 'Georgia',
                      street: 'Levan Asatiani',
                      concat: [Function: concat]
                    }*/

//Объекты тоже можно копировать, используя spread:
//const newAddress = {...address } //развернули наш объект и завернули его в новый
//console.log(newAddress) //копия объекта 'address'

//Мы можем изменять поля и добавлять новые в копиях наших объектов: 
const newAddress = {...address, street: 'Tsereteli', postCode: 0715 } //развернули наш объект, изменили значение поля 'street' и завернули его в новый
console.log(newAddress) //копия объекта 'address' с изменённой улицей и почтовым кодом


