/**
 * 타입 변수 응용하기

 *
 * 첫번째 사례
 */
// a에는 string, b에는 number 타입이 들어감
// 타입 변수를 여러가지 선언할 수 있다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

/**
 * 두번째 사례
 */

// function returnFirstValue<T>(data: T) {
//   return data[0]; // 아직 타입이 뭔지 모르기때문에 에러가 난다. unknown으로 추론하기 때문에..
// }
// T[] 이렇게 배열로 선언할 수 있음
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, 'hello', 'mynameis']);
// 1

/**
 * 세번째 사례
 */

interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

// 위 interface 예와 같은 경우
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

// length 프로퍼티가 있으면 허용됨
let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength(['1,2,3,4,5']); // 5

let var3 = getLength({ length: 10 }); // 10

// length 프로퍼티가 없어서 안됨
// let var4 = getLength(10);
