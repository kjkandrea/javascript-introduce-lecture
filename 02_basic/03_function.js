/**
 * 함수 선언
 * : 함수 선언식과 함수 표현식으로 함수를 선언할 수 있다.
 */

// 함수 선언식
function sum(a, b) {
  return a + b
}

console.log(
sum(2, 3) // 5
)

// 함수 표현식
const sum2 = function (a, b) {
  return a + b
}

console.log(
sum2(2, 3) // 5
)

/**
 * 호이스팅
 * :
 * "선언문이 마치 최상단에 끌어올려진 듯한 현상"
 * 함수 선언식으로 선언된 함수는 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.
 */

var num = sum3(2, 3) // 5
console.log(num)

function sum3(a, b) {
  return a + b
}

// 위 선언은 호이스팅에 따라 실제로는 아래와 같이 동작한다.

var num2 = undefined;

function sum4(a, b) {
  return a + b
}
num2 = sum4(2, 3)
console.log(num2)

// ES6 이후로는 let/const 변수 선언 키워드와 함수 표현식을 사용하여
// 선언 라인 이전에는 변수를 참조/함수를 호출 할 수 없도록 프로그래밍이 가능하다.

const sum5 = function (a, b) {
  return a + b
} // 호이스팅 X

const num3 = sum5(2, 3) // 5
console.log(num3)