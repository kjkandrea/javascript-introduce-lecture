/**
 * 객체
 * :
 * 객체 리터럴을 사용하여 객체를 선언할 수 있다.
 * 객체의 키는 String 과 Symbol 타입만을 허용한다.
 * 객체의 값은 모든 타입을 허용하기 때문에 아래와 같은 중첩 객체 구성이 가능하다.
 */

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

console.log(
typeof andrea // 'object'
)

// 속성 접근자를 이용하여 다음과 같이 객체의 속성에 접근할 수 있다.

console.log(
andrea.name // 'andrea'
,andrea.careers[0] // {company: 'nhn commerce', job: 'fe developer'}
)