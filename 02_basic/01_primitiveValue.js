// 원시값과 데이터타입에 대해 살펴보자

/**
 * 리터럴
 * : 리터럴을 이용하여 값을 선언할 수 있다.
 */

'nhn' // String
3 // Number
true // Boolean
null // null
undefined // undefined
Symbol() // Symbol

/**
 * 변수와 할당
 * :
 * 블록레벨 범위를 지니는 let, const 를 통해 변수를 선언 할 수 있다.
 * const 는 값의 재할당이 불가하다. let 은 값의 재할당의 가능하다.
 */

const name = 'andrea'
let age = 30
// name = 'nhn' // Uncaught TypeError: Assignment to constant variable.
age = 31 // 31

/**
 * 원시 값의 불변성
 * :
 * 원시 값은 불변하며, 값 자체를 변경하는것이 불가하다.
 * 원시 값을 지니는 변수에 값을 변경하기 위해서는 재할당 하는 방법만이 가능하다.
 */

let cat = 'cat'
cat[0] // 'c'
cat[0] = 'h' // 'h'
console.log(cat) // 'cat'

cat = 'hat'
console.log(cat) // 'hat'