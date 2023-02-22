export const COLOR = '#bababa'

export function compute(a, b) {
  return a + b
}


//Default========================
const privateVariable = 42

export default {
  log() {
    console.log(privateVariable)
  }
}