//Strings: 
//const title = 'Hello'
//const isVisible = () => Math.random() > 0.5 //если число больше 0.5, вернёт 'true'

//const template = `
//  ${isVisible() ? `<p>Visible</p>` : ''}
//  <h1 id='demo'>${title}</h1>
//`

//console.log(template) /*'   <p>Visible</p>
                           // <h1 id='demo'>Hello</h1>'*/

//================================
//Methods: 
const str = 'Hello'

console.log(str.startsWith('h')) //false
console.log(str.endsWith('lo')) //true
console.log(str.includes('ello')) //true
console.log(str.repeat(3)) //HelloHelloHello
console.log(str.trimEnd())  //удаляет пробелы с конца строки
console.log(str.trimStart())  //удаляет пробелы с начала строки
console.log(str.padStart(10, '1234')) //12341Hello
console.log(str.padEnd(8, 'lol')) //Hellolol

