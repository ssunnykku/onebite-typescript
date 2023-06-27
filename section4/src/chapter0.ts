/**
 * 함수 타입 정의
 */

// javaScript: 어떤 매개변수를 받고. 어떤 결과값을 반환하는지 이야기
// typeScript: 어떤 "타입의" 매개변수를 받고, 어떤 "타입의" 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number /**-> 반환값의 타입 */ => a + b;

/**
 * 함수의 매개변수
 */

function introduce(
  name = "이정환",
  age: number,
  tall?: number /** 선택적 매개변수 */
) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    // tall 이 undefined일 수 있기 때문에 타입을 좁혀준다.
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이정환", 175);
introduce("이정환", 27);

// function getSum(...rest: number[]) {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));

//   return sum;
// }

function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
// 에러!
// getSum(1, 2, 3, 4, 5); //15
