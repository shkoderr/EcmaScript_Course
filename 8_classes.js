class Person {
  type = 'human'

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(this.name + ' says Hello!')
  }
}

//const max = new Person('Max')

//console.log(max)  //Person { name: 'Max' }
//max.greet()  //Max says Hello!
//console.log(max.type) //human
//console.log(max.__proto__ === Person.prototype)  //true

//============Классы позволяют работать с наследованием===============
class Programmer extends Person {
  constructor(name, job) {
    super(name)              //сначала необходимо вызвать конструктор родительского класса Person
    this._job = job
  }

  get job() {
    return this._job.toUpperCase()   //с помощью гетера приводим профессию к верхнему регистру
  }

  set job(job) {
    if (job.length < 7) {            //простая валидация, выдающая ошибку, если в сэттере меньше 7 символов
      throw new Error('Validation failed')
    } else {
      this._job = job
    }
    
  }
  greet() {
    super.greet()           //добавили родительский метод
    console.log('And merged request!')          //записали ещё один свой
  }
}

const frontend = new Programmer('Max', 'FrontEnd')

//console.log(frontend)  //Programmer { type: 'human', name: 'Max', _job: 'FrontEnd' }
//Можем вызвать метод родительского класса greet():
//console.log(frontend.greet()) //Max says Hello! And merged request!
//Getter
//console.log(frontend.job) //FRONTEND
//Setter
//frontend.job = 'Mobile'   //присвоили новое значение, в котором меньше 7 символов
//console.log(frontend.job) //Error: Validation failed, т.к. ввели меньше 7 символов

frontend.job = 'BackEnd' //присвоили валидное значение
//console.log(frontend.job) //BACKEND



//=============Static methods================
//class Util {
//  average(...args) {
//    return args.reduce((acc, i) => acc += i, 0) / args.length
//  }
//}

//const util = new Util()  //чтобы использовать метод 'average' необходимо создать новую переменную
//console.log(util.average(1, 1, 2, 3, 5, 8, 13)) //4.714285714285714

//Чтобы сразу вызывать этот метод без создания инстанса класса, используем статические метод: 

class Util {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}

console.log(Util.average(1, 1, 2, 3, 5, 8, 13)) //4.714285714285714

//Таким образом, мы можем напрямую обращаться к статическим методам класса
 
