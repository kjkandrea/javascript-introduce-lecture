/**
 * 실행 컨텍스트
 * : javascript 의 함수는 다음 코드와 같이 외부 렉시컬 환경(유효범위)을 참조할 수 있다.
 */

const left2 = 2;

function sum4(right) {
  return left2 + right;
}

console.log(
sum4(3) // 5
)

/**
 * sum 함수의 전역 렉시컬 환경 을 outer sum 함수의 내부 렉시컬 환경 을 inner 라고 정의해보자.
 *
 * outer
 * function sum() {
 *   inner
 * }
 *
 * javascript 는 해당 렉시컬 환경에 식별자가 없을 때에 inner => outer 까지 탐색하며 해당 선언의 값을 찾아낸다.
 * 이러한 탐색 행위를 스코프 체이닝이라 일컫는다. 아래의 예시를 보며 중첩 실행 컨텍스트 탐색에 대하여 이해하여 보자.
 */

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
console.log(
sum(3) // 5
)


/**
 * 1. sum() 이 호출되면 sum() => sum2() => sum3() 를 거쳐 sum3() 가 호출된다.
 * 2. sum3() 는 left, right 를 탐색한다.
 * 3. sum3 inner 에서 left, right 를 찾지 못했으므로 sum2 inner 를 탐색한다.
 * 4. sum2 inner 에서 left, right 를 찾지 못했으므로 sum inner 를 탐색한다.
 * 5. sum inner 의 arguments 에서 right 를 찾아낸다. left 를 찾지 못했으므로 outer 를 탐색한다.
 * 6. outer 에서 left 를 찾아낸다.
 * 7. 2 + 3 을 연산하여 5 를 반환한다.
 *
 * 값을 찾지 못했을 경우 레퍼런스 에러가 출력된다.
 */