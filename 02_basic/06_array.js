/**
 * 배열
 * :
 * 배열 리터럴을 사용하여 배열을 선언할 수 있다.
 *
 * javascript 의 배열은 object 의 하위타입이다.
 * 특정 타입이 배열인지 아닌지를 검사하고자 한다면 typeof 가 아닌 Array.isArray() 를 사용한다.
 */

const array = [1, 'foo', {}, [], null, undefined]

console.log(
array.length // 6
,typeof array // 'object'
,Array.isArray(array) // true
)

/**
 * javascript 의 배열은 선언 시 크기를 미리 지정할 필요가 없다.
 * 마지막 요소를 추가하고 제거하고자 한다면 다음과 같은 메서드를 사용할 수 있다.
 *
 * - Array.prototype.push
 * - Array.prototype.pop
 */

const stack = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack) // console : [1, 2, 3]

console.log(
stack.pop() // 3
,stack.pop() // 2
,stack.pop() // 1
,stack.pop() // undefined
)

/**
 * 고차함수 (map, filter)
 * :
 * 활용도가 높은 ES6 버전에서 제공하는 고차함수 메서드 중 대표적인 메서드인 map, filter 를 살펴보자.
 * 인자로 넘기는 고차함수에 '무엇을 나타내야하는가' 를 제공함으로서 사용할 수 있다.
 * - Array.prototype.map
 * - Array.prototype.filter
 */

// map 은 첫번째 인자로 받은 함수를 실행하며 값을 맵핑한 결과를 반환한다.
const ages = [26, 29, 30, 28, 35]

console.log(
ages.map(age => age + 1)// [27, 30, 31, 29, 36]
)

// map 은 첫번째 인자로 받은 함수를 실행하며 값을 맵핑한 결과를 반환한다.
const ages2 = [26, 29, 30, 28, 35]

console.log(
ages2.filter(age => age >= 30)// [30, 35]
)
