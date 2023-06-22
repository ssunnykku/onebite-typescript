// 배열 : 요소의 타입과 대괄호 작성
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
// <제네릭 문법>
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니언타입
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플 : 타입스크립트에서만 제공하는 배열
// 길이와 타입이 고정된 배열
// (자바스크립트의 배열과 차이점)길이까지 고정해줌!
// 두 개의 요소를 담는다
let tub1 = [1, 2];
// tub1 = [1, 2, 3]; //안됨
// tub1 = ["1", "2"]; //안됨
tub1 = [2, 3];
let tub2 = [1, "2", true];
export {};
// tub2 = ["2", 1, true]; 오류
