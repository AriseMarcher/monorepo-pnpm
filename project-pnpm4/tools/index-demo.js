import { trimStart, cloneDeep } from 'lodash-es'
console.log(trimStart)
console.log(cloneDeep)

export function isUndef (v) {
  return v === undefined || v === null
}

export function isDef (v) {
  return v !== undefined && v !== null
}

export function isTrue (v) {
  return v === true
}

export function isFalse (v) {
  return v === false
}

export const increment = x => x + 10
export const decrement = x => x - 100
export const sayHelloWorld = () => console.log('hello world')

// export function increment (x) {
//   return x + 10
// }

// export function decrement (x) {
//   return x - 100
// }
