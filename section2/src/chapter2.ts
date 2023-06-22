// 배열 : 요소의 타입과 대괄호 작성
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

// <제네릭 문법>
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니언타입
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 타입스크립트에서만 제공하는 배열
// 길이와 타입이 고정된 배열
// (자바스크립트의 배열과 차이점)길이까지 고정해줌!
// 배열로 변환된다. push, pop 사용 가능

// 두 개의 요소를 담는다
let tub1: [number, number] = [1, 2];
// tub1 = [1, 2, 3]; //안됨
// tub1 = ["1", "2"]; //안됨

tub1 = [2, 3];

let tub2: [number, string, boolean] = [1, "2", true];
// tub2 = ["2", 1, true]; 오류

// 오류가 발생하지 않는다. 자바스크립트의 배열이라고 생각함 사용시 유의하기!
// tub1.push(1);
// tub1.pop();
// tub1.pop();
// tub1.pop();

const users: [string, number][] = [
  ["이정환", 1],
  ["김누구", 1],
  ["박누구", 1],
  // [5,"최누구"]  이런 에러를 방지할 수 있다.
];
