/**
 * javascript 에서 모든 객체들은 프로토타입 객체를 지닌다. 간단한 객체 생성자를 만들어보자.
 */

function Person(name) {
  this.name = name
  this.sayHello = function () {
    console.log('Hello, %s', this.name)
  }
}

/**
 * Person 생성자를 사용하여 객체를 생성한 후 메서드를 호출해보자.
 */

const andrea = new Person('andrea')
andrea.sayHello() // console : 'Hello, andrea'

console.log(
  andrea.toString() // [object Object]
)

/**
 * 생성된 객체내에 toString() 메서드를 선언하지 않았음에도 호출이 가능하다.
 * 이는 javascript 가 프로토타입 체인을 통해 상위 프로토타입 객체에서 메소드와 속성을 상속 받을 수 있는 특성 때문이다.
 *
 * Person 의 상위 속성인 Object 에서 toString 메서드를 제공하고,
 * 프로토타입 체인을 통해 해당 메서드를 탐색하기때문에 toString 과 같은 상위 메서드를 호출 할 수 있는것이다.
 *
 * prototype 선언을 활용하여 이와같은 prototype 을 사용할 수 있다.
 */

Person.prototype.sayBye = function() {
  console.log('Bye, %s', this.name)
}

andrea.sayBye() // console : 'Bye, andrea'