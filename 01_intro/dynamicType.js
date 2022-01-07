/**
 * 자바스크립트는 느슨한 타입 (loosely typed) 언어, 혹은 동적 (dynamic) 언어이다.
 * 같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻이다.
 **/

let foo = 42;    // foo 는 이제 Number 임
foo = "bar"; // foo 는 이제 String 임
foo = true;  // foo 는 이제 Boolean 임

console.log(typeof foo === 'boolean')