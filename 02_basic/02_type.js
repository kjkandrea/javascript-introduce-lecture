/**
 * 타입 검사
 * typeof 연산자를 이용하여 자료형을 나타내는 문자열을 반환받을 수 있다.
 */

const name = 'andrea'
const age = 31
const isHappy = true
const money = null

console.log(
  typeof name // string
  ,typeof age // number
  ,typeof isHappy // boolean
  ,typeof money // object
)

/**
 * 타입 변환
 * :
 * javascript 는 타입 변환에 있어 유연하다.
 * 가령 다음과 같이 산술연산자를 이용하여 string 을 number 로 타입 변환하는것이 가능하다.
 */

let age2 = '31'
typeof age2 // string
age2 = +age2 // 31
typeof age2 // number

/**
 * 위처럼 javascript 는 유연하게 형변환을 수행하게 할 수 있으나,
 * 변환함수 String, Number, Age 를 사용하여 보다 명시적으로 타입을 변환 할 수 있다.
 */

const name3 = 'andrea'
const age3 = 31

const stringAge = String(age3) // String : '31'
const numberAge = Number(stringAge) // Number : 31
const hasName = Boolean(name3) // Boolean : true

console.log(
  typeof stringAge // string
  ,typeof numberAge // number
  ,typeof hasName // boolean
)

/**
 * 타입과 동치 연산
 * :
 * 두 종류의 동치 연산이 존재한다.
 * - == : 동치 연산
 * - === : 엄격한 동치 연산
 */

console.log(
31 == '31' // true
,0 == false // true
,1 == true // true
,null == undefined // true
)

/**
 * 이처럼 == 연산은 유연하게 동작한다.
 * 이와 같은 비교는 강제 형변환 규칙을 이해해야하고, 타입 비교에 불안정성을 갖는 문제가 있다.
 * 따라서 엄격한 동치 비교는 === 연산을 이용한다.
 */

console.log(
31 === '31' // false
,31 === Number('31') // true
,0 === false // false
,Boolean(0) === false // true
,null === undefined // false
)