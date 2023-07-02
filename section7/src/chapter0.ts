/**
 * 제네릭 : 일반적인, 포괄적인
 * 제네릭 함수 : 모든 타입에 두루두루 쓸 수 있는 함수
 */
// 반환값을 기준으로 타입을 추론
function func(value: unknown) {
  return value;
}

let num = func(10);
// num.toUpperCase();
// num.toFixed();

if (typeof num === 'number') {
  num.toFixed();
}
let bool = func(true);

let str = func('string');

// 인수에 따라 타입을 다르게 하고 싶은데? -> 제네릭 함수
// 호출할 때 마다 타입이 결정됨
// <T> : 타입 변수
function func2<T>(value: T): T {
  return value;
}

let num2 = func2(10);

let bool2 = func2(true);

let str2 = func2('string');

let arr = func2<[number, number, string]>([1, 2, '?']);
