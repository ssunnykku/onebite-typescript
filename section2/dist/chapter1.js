// number , 타입 주석(annotation)
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1 =123; // 오류 발생
// str1.tofixed  //숫자만 가능한..
//boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
//undefined
let unde1 = undefined;
// 본래 허용 안됨
// "strictNullChecks": false,
// let numA: number = null;
// 리터럴 타입
// 리터럴 -> 값
// 타입을 값 그 자체로 정의. 이 값 외의 다른 값 허용 안됨
let numA = 10;
// numA = 12; // 에러남
let strA = "hello";
let boolA = true;
export {};
