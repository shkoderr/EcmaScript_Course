//В JS основными структурами данных являются массивы и объекты.
//Map and set являются более продвинутой репрезентацией как массивов, так и объектов

const map = new Map(
  [ ['a', 1] ]
)

//console.log(map)  //Map(1) { 'a' => 1 }
//console.log(map.get('a'))  //1

map.set('b', 2).set(NaN, 'Number')
//console.log(map) //Map(3) { 'a' => 1, 'b' => 2, NaN => 'Number' }

//console.log(map.keys())  //[Map Iterator] { 'a', 'b', NaN } - ключи
//console.log(map.entries())  //[Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ NaN, 'Number' ] } - массив из массивов, где э-ты ключ и значение
//console.log(map.values())  //[Map Iterator] { 1, 2, 'Number' } - значения

//keys() and values() - итераторы, так что мы можем с ними взаимодействовать циклом 'for of'


//===============Set==================
const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 8, 5])
console.log(set)   //{ 1, 2, 3, 5, 8, 13 } - не содержит дубликаты

