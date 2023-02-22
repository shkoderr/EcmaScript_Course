class Student { 
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hello! My name is ${this.name}`)
  }
}

class ProtoStudent {
  university = 'Oxford'
}


const student = Reflect.construct(Student, ['Timur'], ProtoStudent)

console.log(student)  //ProtoStudent { name: 'Timur' }
console.log(student.__proto__ === Student.prototype)  //false
console.log(student.__proto__ === ProtoStudent.prototype)  //true


//==============Методы==============
Reflect.apply(student.greet, {name: 'Tester'}, [])  //вызывает методы с нужным контектстом и параметрами
console.log(Reflect.ownKeys(student))

Reflect.preventExtensions(student)  //блокирует модификацию объекта
console.log(Reflect.isExtensible(student))  //false