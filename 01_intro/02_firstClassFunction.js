/**
 * javascript 는 함수가 일급이라는 성질을 활용하여 함수를 자유롭게 다룰 수 있다. 다음의 조건을 충족한다.
 * - 변수에 함수 할당 가능
 * - 함수를 인자로 전달 가능
 * - 함수의 리턴값으로 함수 반환 가능
 */

/**
 * 변수에 함수 할당 가능
 * : 변수에 함수를 할당할 수 있다.
 */

const foo = function() {
  return 'foobar';
}
console.log(foo()); // 'foobar'

/**
 * 함수를 인자로 전달 가능
 * : 함수를 인자로 전달할 수 있다.
 */

function filter (list, predict) {
  const result = []
  for (const item of list) {
    if(predict(item)) result.push(item)
  }
  return result;
}


console.log(
  filter([1,2,3,4,5], num => num % 2 === 1) // [1, 3, 5]
)

/**
 * 함수의 리턴값으로 함수 반환 가능
 * : 함수를 리턴값으로 반환하는 함수를 만들 수 있다.
 */

function printPress (string) {
  return function () {
    console.log(string)
  }
}

const print = printPress('Hello, Javascript!')
print() // console : 'Hello, Javascript!'
print() // console : 'Hello, Javascript!'
print() // console : 'Hello, Javascript!'
