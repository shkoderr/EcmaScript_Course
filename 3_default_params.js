//Default Parametres: 
const defaultB = 6
const getDefault = c => c * 2

function compute(a = 10, b = getDefault(a)) {
  return a + b
}

console.log(compute()) //30
console.log(compute(10, 2)) //12

//That's it!