## 소개

프로그래밍 경험이 있는 javascript 입문자를 대상으로
언어의 특징점과 사용방법, ES6 문법에 대해 설명합니다.

## 목차

1. javascript 소개
    * 언어적 특성
        * 동적 타입
        * 일급 함수
        * 프로토타입 기반
2. javascript 기초
    * 원시 값 다루기
        * 리터럴
        * 변수와 할당
        * 원시 값의 불변성
        * 타입 검사
        * 타입 변환
        * 타입과 동치 연산
    * 함수
        * 함수 선언
        * 호이스팅
        * 실행 컨텍스트
    * 참조 값
        * 객체
        * 배열
            * 고차함수 (map, filter)
3. 실무에서의 javascript
    * Document Object Model
    * ESModule
    * MVC 로 카운터 어플리케이션 만들기

# javascript 소개

## 언어적 특성

javascript 의 언어적 특성에 대해 살펴보자

### 동적 타입

자바스크립트는 느슨한 타입 (loosely typed) 언어, 혹은 동적 (dynamic) 언어이다.
같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻이다.

``` javascript
let foo = 42;    // foo 는 이제 Number 임
foo = "bar"; // foo 는 이제 String 임
foo = true;  // foo 는 이제 Boolean 임

typeof foo === 'boolean' // true
```

이는 하나의 변수에 할당 된 값의 유형이 언제든 변할 수 있다는 의미이며
런타임에서 다음과 같은 오류에 주의하며 작업하여야 한다.

``` javascript
let foo = 42 // foo 는 이제 Number 임
foo.toString() // '42'
foo = null
foo.toString() // Uncaught TypeError: Cannot read properties of null (reading 'toString')
```

### 일급 함수

javascript 는 함수가 일급이라는 성질을 활용하여 함수를 자유롭게 다룰 수 있다.
다음의 조건을 충족한다.

* 변수에 함수 할당 가능
* 함수를 인자로 전달 가능
* 함수의 리턴값으로 함수 반환 가능

#### 변수에 함수 할당 가능

변수에 함수를 할당할 수 있다.

``` javascript
const foo = function() {
  return 'foobar';
} 
foo(); // 'foobar'
```

#### 함수를 인자로 전달 가능

함수를 인자로 전달할 수 있다.

``` javascript
function filter (list, predict) {
  const result = []
  for (const item of list) {
    if(predict(item)) result.push(item)
  }
  return result;
}


filter([1,2,3,4,5], num => num % 2 === 1) // [1, 3, 5]
```

#### 함수의 리턴값으로 함수 반환 가능

함수를 리턴값으로 반환하는 함수를 만들 수 있다.

``` javascript
function printPress (string) {
  return function () {
     console.log(string)
  }
}

const print = printPress('Hello, Javascript!')
print() // console : 'Hello, Javascript!'
print() // console : 'Hello, Javascript!'
print() // console : 'Hello, Javascript!'
```

[같이보면 좋은 자료 : 함수형 프로그래밍과 ES6+](https://www.youtube.com/watch?v=4sO0aWTd3yc)

### 프로토타입 기반

javascript 에서 모든 객체들은 프로토타입 객체를 지닌다.
간단한 객체 생성자를 만들어보자.

``` javascript
function Person(name) {
  this.name = name
  this.sayHello = function () {
     console.log('Hello, %s', this.name)
  }
}
```

Person 생성자를 사용하여 객체를 생성한 후 메서드를 호출해보자.

``` javascript
const andrea = new Person('andrea')
andrea.sayhello() // console : 'Hello, andrea'

andrea.toString() // [object Object]
```

생성된 객체내에 `toString()` 메서드를 선언하지 않았음에도 호출이 가능하다.
이는 javascript 가 프로토타입 체인을 통해 상위 프로토타입 객체에서 메소드와 속성을 상속 받을 수 있는 특성 때문이다.

Person 의 상위 속성인 Object 에서 `toString` 메서드를 제공하고, 프로토타입 체인을 통해 해당 메서드를 탐색하기때문에 `toString` 과 같은 상위 메서드를 호출 할 수 있는것이다.

prototype 선언을 활용하여 이와같은 prototype 을 사용할 수 있다.

``` javascript
Person.prototype.sayBye = function() {
  console.log('Bye, %s', this.name)
}

andrea.sayBye() // console : 'Bye, andrea'
```

[같이보면 좋은 자료 : 프로토타입 기반 언어, 자바스크립트](https://ui.toast.com/weekly-pick/ko_20160603)

# javascript 기초

## 원시 값 다루기

원시값과 데이터타입에 대해 살펴보자

### 리터럴

리터럴을 이용하여 값을 선언할 수 있다.

``` javascript
'nhn' // String
3 // Number
true // Boolean
null // null
undefined // undefined
Symbol() // Symbol
```

### 변수와 할당

블록레벨 범위를 지니는 let, const 를 통해 변수를 선언 할 수 있다.

``` javascript
const name = 'andrea' 
let age = 30
```

const 는 값의 재할당이 불가하다.
let 은 값의 재할당의 가능하다.

``` javascript
name = 'nhn' // Uncaught TypeError: Assignment to constant variable.
age = 31 // 31
```

### 원시 값의 불변성

원시 값은 불변하며, 값 자체를 변경하는것이 불가하다.
원시 값을 지니는 변수에 값을 변경하기 위해서는 재할당 하는 방법만이 가능하다.

``` javascript
let cat = 'cat'
cat[0] // 'c'
cat[0] = 'h' // 'h'
console.log(cat) // 'cat'

cat = 'hat'
console.log(cat) // 'hat'
```

### 타입 검사

typeof 연산자를 이용하여 자료형을 나타내는 문자열을 반환받을 수 있다.

``` javascript
const name = 'andrea'
const age = 31
const isHappy = true
const money = null

typeof name // string
typeof age // number
typeof isHappy // boolean
typeof money // object
```

### 타입 변환

javascript 는 타입 변환에 있어 유연하다.
가령 다음과 같이 산술연산자를 이용하여 string 을 number 로 타입 변환하는것이 가능하다.

``` javascript
let age = '31'
typeof age // string
age = +age // 31 
typeof age // number
```

위처럼 javascript 는 유연하게 형변환을 수행하게 할 수 있으나,
변환함수 `String`, `Number`, `Age` 를 사용하여 보다 명시적으로 타입을 변환 할 수 있다.

``` javascript
const name = 'andrea'
const age = 31

const stringAge = String(age) // String : '31'
const numberAge = Number(stringAge) // Number : 31
const hasName = Boolean(name) // Boolean : true
```

### 타입과 동치 연산

두 종류의 동치 연산이 존재한다.

* `==` : 동치 연산
* `===` : 엄격한 동치 연산

``` javascript
31 == '31' // true
0 == false // true
1 == true // true
null == undefined // true
```

이처럼 `==` 연산은 유연하게 동작한다.
이와 같은 비교는 강제 형변환 규칙을 이해해야하고, 타입 비교에 불안정성을 갖는 문제가 있다.

따라서 엄격한 동치 비교는 `===` 연산을 이용한다.

``` javascript
31 === '31' // false
31 === Number('31') // true
0 === false // false
Boolean(0) === false // true
null === undefined // false
```

## 함수

### 함수 선언

함수 선언식과 함수 표현식으로 함수를 선언할 수 있다.

``` javascript
// 함수 선언식
function sum(a, b) {
  return a + b
}

sum(2, 3) // 5
```

``` javascript
// 함수 표현식
const sum = function (a, b) {
  return a + b
}

sum(2, 3) // 5
```

### 호이스팅

> 선언문이 마치 최상단에 끌어올려진 듯한 현상

함수 선언식으로 선언된 함수는 호이스팅에 따라
브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

``` javascript
var num = sum(2, 3) // 5

function sum(a, b) {
  return a + b
}
```

위 선언은 호이스팅에 따라 실제로는 아래와 같이 동작한다.

``` javascript
var num = undefined;

function sum(a, b) {
  return a + b
}
num = sum(2, 3)
```

ES6 이후로는 let/const 변수 선언 키워드와 함수 표현식을 사용하여
선언 라인 이전에는 변수를 참조/함수를 호출 할 수 없도록 프로그래밍이 가능하다.

``` javascript
console.log(sum) // ReferenceError
console.log(num) // ReferenceError

const sum = function (a, b) {
  return a + b 
} // 호이스팅 X

const num = sum(2, 3) // 5
```

[호이스팅의 활용 : 코드를 어떻게 나눠야 할까요? (feat. 호이스팅)](https://www.youtube.com/watch?v=k9uEtsDAuvY)

### 실행 컨텍스트

javascript 의 함수는 다음 코드와 같이 외부 렉시컬 환경(유효범위)을 참조할 수 있다.

``` javascript
const left = 2;

function sum(right) {
  return left + right;
}

sum(3) // 5
```

sum 함수의 전역 렉시컬 환경 을 `outer`
sum 함수의 내부 렉시컬 환경 을 `inner` 라고 정의해보자.

``` javascript
// outer

function sum() {
  // inner
}
```

javascript 는 해당 렉시컬 환경에 식별자가 없을 때에 inner => outer 까지
탐색하며 해당 선언의 값을 찾아낸다.

이러한 탐색 행위를 스코프 체이닝이라 일컫는다.
아래의 예시를 보며 중첩 실행 컨텍스트 탐색에 대하여 이해하여 보자.

``` javascript
// outer
const left = 2

function sum(right) {
   // sum inner
   function sum2() {
     // sum2 inner
     function sum3 () {
       // sum3 inner
       return left + right;
     }
     return sum3()
   }

   return sum2()
}
sum(3) // 5
```

1. sum() 이 호출되면 sum() => sum2() => sum3() 를 거쳐 `sum3()` 가 호출된다.
2. `sum3()` 는 left, right 를 탐색한다.
3. `sum3 inner` 에서 left, right 를 찾지 못했으므로 `sum2 inner` 를 탐색한다.
4. `sum2 inner` 에서 left, right 를 찾지 못했으므로 `sum inner` 를 탐색한다.
5. `sum inner` 의 arguments 에서 right 를 찾아낸다. left 를 찾지 못했으므로 `outer` 를 탐색한다.
6. `outer` 에서 left 를 찾아낸다.
7. `2 + 3` 을 연산하여 `5` 를 반환한다.

값을 찾지 못했을 경우 레퍼런스 에러가 출력된다.

[같이보면 좋은 자료 : &#91;10분 테코톡&#93; 💙 하루의 실행 컨텍스트](https://www.youtube.com/watch?v=EWfujNzSUmw)

## 객체

객체 리터럴을 사용하여 객체를 선언할 수 있다.

객체의 키는 String 과 Symbol 타입만을 허용한다.
객체의 값은 모든 타입을 허용하기 때문에 아래와 같은 중첩 객체 구성이 가능하다.

``` javascript
const andrea = {
  name: 'andrea',
  age: 31,
  careers: [
    {
      company: 'nhn commerce',
      job: 'fe developer'
    }
    // ...
  ]
}

typeof andrea // 'object'
```

속성 접근자를 이용하여 다음과 같이 객체의 속성에 접근할 수 있다.

``` javascript
andrea.name // 'andrea'
andrea.careers[0] // {company: 'nhn commerce', job: 'fe developer'}
```

## 배열

배열 리터럴을 사용하여 배열을 선언할 수 있다.

javascript 의 배열은 object 의 하위타입이다.
특정 타입이 배열인지 아닌지를 검사하고자 한다면 typeof 가 아닌 `Array.isArray()` 를 사용한다.

``` javascript
const array = [1, 'foo', {}, [], null, undefined]

array.length // 6
typeof array // 'object'
Array.isArray(array) // true
```

javascript 의 배열은 선언 시 크기를 미리 지정할 필요가 없다.
마지막 요소를 추가하고 제거하고자 한다면 다음과 같은 메서드를 사용할 수 있다.

* `Array.prototype.push`
* `Array.prototype.pop`

``` javascript
const stack = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack) // console : [1, 2, 3]

stack.pop() // 3
stack.pop() // 2
stack.pop() // 1
stack.pop() // undefined
```

### 고차함수 (map, filter)

활용도가 높은 ES6 버전에서 제공하는 고차함수 메서드 중 대표적인 메서드인 `map`, `filter` 를 살펴보자.

인자로 넘기는 고차함수에 '무엇을 나타내야하는가' 를 제공함으로서 사용할 수 있다.

* `Array.prototype.map`
* `Array.prototype.filter`

#### Array.prototype.map

map 은 첫번째 인자로 받은 함수를 실행하며 값을 맵핑한 결과를 반환한다.

``` javascript
const ages = [26, 29, 30, 28, 35]

ages.map(age => age + 1)// [27, 30, 31, 29, 36]
```

#### Array.prototype.filter

filter 는 첫번째 인자로 받은 함수를 실행하여 각 값을 평가하며, true 가 리턴된 결과를 반환한다.

``` javascript
const ages = [26, 29, 30, 28, 35]

ages.filter(age => age >= 30)// [30, 35]
```

# 실무에서의 javascript

DOM 과 ESModule 에 대해 학습해보고
학습한 내용을 토대로 간단한 어플리케이션을 작성해보자.

## Document Object Model

HTML 로 구성된 웹 페이지는 일종의 문서(document)이다.

DOM(문서 객체 모델) 은 HTML 문서의 구조화된 표현으로 javascript 와 같은 스크립팅 언어로 문서를 변경할 수 있게 돕는다.
문서의 children 을 얻기 위해 document 로 접근할 수 있다.
브라우저 콘솔에 `document` 를 입력하여보자.

``` javascript
document // DOM
document.body // <body>..</body>
document.body.innerText = 'Hello, document'
```

document 는 하위 메서드로 Element 객체를 검색 할 수 있는 여러 종류의 메서드를 제공한다.
그 중 `Document.getElementById` 는 문서내에 선언된 단 하나의 ID 를 지닌 Element 를 리턴한다.

id 는 유니크한 값이기에 id와 Element 는 1:1 로 맵핑되어있다.
따라서 Document Object Model 에서의 id를 통한 검색은 O(1) 으로 Element 를 선택 할 수 있기에 Element 선택에 있어 가장 유리하다.

``` html
<html>
  <body>
  count : <span id="count">0</span>
  </body>
</html>
```

``` javascript
document.getElementById('count') // <span id="count">0</span>
document.getElementById('count').textContent // '0'

const countElement = document.getElementById('count')
const count = Number(countElement.textContent)
countElement.innerText = String(count + 1) // 문서내에 count : 1 이 표기됨
```

## ESModule

개발하는 어플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는 시점이 온다.
lodash 와 같은 외부 종속성의 모듈을 사용하고자 할때도 import, export 키워드의 사용은 필수적이다.

모듈을 추가하고, 추가된 모듈을 사용하는 방법에 대해 간단히 알아보자.

### module 생성하기

별도의 javascript 파일을 구성하고 `export` 키워드를 이용하여 파일시스템에 모듈을 공개할 수 있다.

``` javascript
// modules.js
export function sum(a, b) {
  return a + b
}

export function pow(a, b) {
  return a * b
}
```

### module 사용하기

파일시스템에 공개된 모듈은 `import` 키워드를 통해 원하는 곳에서 사용할 수 있다.

``` javascript
import { sum, pow } from './modules.js'

sum(2, 3) // 5
pow(3, 4) // 12
``` 

lodash 와 같은 외부 모듈은 설치 후 다음과 같이 사용할 수 있다.

``` javascript
const andrea = {
  name: 'andrea',
  age: 31,
  job: 'fe developer'
}

import omit from 'lodash.omit'

omit(andrea, ['age']) // { name: 'andrea', job: 'fe developer' }
```
 

[같이보면 좋은 자료 : JavaScript modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)

## MVC 패턴으로 카운터 어플리케이션 만들기

여태까지 학습했던 내용을 바탕으로 간단한 카운터 어플리케이션을 만들어보자.

요구사항은 다음과 같다.

```
[+] 0 [-]
```

* 카운터는 0 부터 시작한다.
* [+] 버튼을 동작 하면 카운트는 1 이 증가한다.
* [-] 버튼을 동작 하면 카운트는 1 이 감소한다.
* 카운트는 0 이하로는 떨어지지 않는다.

### MVC

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGRpcmVjdGlvbiBCVFxuICBjbGFzcyBDb250cm9sbGVyXG4gIGNsYXNzIFZpZXdcbiAgY2xhc3MgTW9kZWxcbiAgTW9kZWwgLS1vIENvbnRyb2xsZXIgOiBkYXRhXG4gIENvbnRyb2xsZXIgLS1vIE1vZGVsIDogdXBkYXRlXG4gIFZpZXcgLS1vIENvbnRyb2xsZXIgOiBldmVudFxuICBDb250cm9sbGVyIC0tbyBWaWV3IDogdXBkYXRlXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid.live/edit#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGRpcmVjdGlvbiBCVFxuICBjbGFzcyBDb250cm9sbGVyXG4gIGNsYXNzIFZpZXdcbiAgY2xhc3MgTW9kZWxcbiAgTW9kZWwgLS1vIENvbnRyb2xsZXIgOiBkYXRhXG4gIENvbnRyb2xsZXIgLS1vIE1vZGVsIDogdXBkYXRlXG4gIFZpZXcgLS1vIENvbnRyb2xsZXIgOiBldmVudFxuICBDb250cm9sbGVyIC0tbyBWaWV3IDogdXBkYXRlXG4iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

## 참고 문서

위 내용을 구성할때 참고한 자료 입니다.

* [MDN : 모질라 재단 javascript docs](https://developer.mozilla.org/ko/docs/Web/JavaScript)
* [자바스크립트 완벽가이드 : 데이비트 플레너건 지음](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966261796)