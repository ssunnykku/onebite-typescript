// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

anyVar = {};
// anyVar = true;
// anyVar = () => {};

// 타입 에러가 런타임에 나게 된다
// TypeError: anyVar.toUpperCase is not a function
// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// 아무 타입이나 쓸 수 있다.
// any와 차이점 : 모든 값을 저장할 수 있지만 반대는 안된다. (다른 변수에 할당할 수 없다)
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// 연산도 안됨

// 변수의 타입을 확실히 밝혀줘야 가능(타입 정제)
if (typeof unknownVar === "number") {
  num = unknownVar;
}
