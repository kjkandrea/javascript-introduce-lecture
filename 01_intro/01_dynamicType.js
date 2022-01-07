/**
 * 자바스크립트는 느슨한 타입 (loosely typed) 언어, 혹은 동적 (dynamic) 언어이다.
 * 같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻이다.
 **/

let foo = 42;    // foo 는 이제 Number 임
foo = "bar"; // foo 는 이제 String 임
foo = true;  // foo 는 이제 Boolean 임

console.log(typeof foo === 'boolean')

/**
 * 이는 하나의 변수에 할당 된 값의 유형이 언제든 변할 수 있다는 의미이며 런타임에서 다음과 같은 오류에 주의하며 작업하여야 한다.
 */

let bar = 42 // bar 는 이제 Number 임
bar.toString() // '42'
bar = null
bar.toString() // Uncaught TypeError: Cannot read properties of null (reading 'toString')