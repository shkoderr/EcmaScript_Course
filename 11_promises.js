//setTimeout(() => {
//  console.log('after delay')
//}, 2000);

//Чтобы избежать callback hell, используем промисы

//const promise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve('Success')
//  }, 2000)
//})

//promise.then(data => console.log(data)) //через 2 сек выведет 'Success'. Метод then вызовется, когда закончится асинхронный код

//===============

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), ms)
  })

//delay(1000).then(data => console.log(data))  //done! через 1 секунду

//Можем вызвать у промиса снова промис, таким образом не появляется дополнительная вложенность, это чейнинг
//delay(1000)
//  .then(data => delay(500))
//  .then(data => console.log(data))
//  .catch(err => console.log(err))   //вызовется в случае ошибки
//  .finally(() => console.log('Final'))  //вызовется в любом случае в конце программы

//============Async/await===============
//async function asyncDelay() {
//  try {
//    const data = await delay(2000) //то же самое, что = delay(2000).then(data => ...)
//    console.log(data)
//  } catch {                        //сработает в случае ошибки
//    console.error(e)
//  }
//}

//asyncDelay() //done! через 2 секунды


//====================
//Promise.all([
//  delay(1000),
//  delay(500),
//  delay(2000)
//]).then(data => console.log(data))  //[ 'done!', 'done!', 'done!' ] - дождётся когда выполнится последний промис и выведет массив со всеми промисами


Promise.race([
  delay(1000),
  delay(500),
  delay(2000)
]).then(data => console.log(data))  // 'done!' выполнит самый быстрый промис
