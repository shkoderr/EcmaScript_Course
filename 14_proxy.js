//Proxy - это класс, позволяющий добавлять ловушки на любые объекты
const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Field ${prop} isn't found in the object`
  },

  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value)
    } else {
      console.log('Too short. Now is ' + value.length)
    }
  }
}

const form = {
  login: 'tester',
  password: '12345'
}

//Теперь запроксим объект form, 1 параметр - это цель, то есть наш объект, 2 параметр - набор ловушек, т.е. валидатор
const formProxy = new Proxy(form, validator) 

console.log(formProxy)  //{ login: 'tester', password: '12345' }
console.log(formProxy.login)  // tester
console.log(formProxy.password)  // 12345
console.log(formProxy['username'])  // Field username isn't found in the object - вызвался метод get из нашего валидатора

formProxy.password = '12' // Too short. Now is 2
console.log(formProxy.password) // 12345


//==================Function===============

function log(message) {
  console.log('[Log]: ', message)
}

//target - та функция, которую хотим вызвать. thisArg - контекст, argArray - массив параметров
const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {  //этот метод будет вызван в случае вызова функции 'log'
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray)
    } else {
      console.log('Кол-во аргументов не совпадает')
    }
  }
})

proxy('Custom message') //[Log]:  Custom message
proxy() //Кол-во аргументов не совпадает
proxy('Message', 2) //Кол-во аргументов не совпадает