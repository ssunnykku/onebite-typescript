/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가.
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

a = b;
// b = a; // 허용 안됨, 반환값끼리 다운캐스팅이기 때문임, number 리터럴 <= number

// 기준 2. 매개변수가 호환되는가

// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; D타입(number 리터럴)을 C타입(number)을 취급 : 업캐스팅일 때 호환이 안된다.
d = c; // 다운캐스팅, (넘버타입을 넘버 리터럴타입에 넣는 것) 허용된다.

type Animal = {
  // 슈퍼타입, 더 큰 타입
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

dogFunc = animalFunc;
//다운캐스팅 되는 이유
// dogFunc는 animalFunc가 가지고 있는 값을 모두 가지고 있다.
// dogFunc에 animalFunc를 대입해도 가능함
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// animalFunc = dogFunc; // 업캐스팅인데 안 됨
// // 이유
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color); // animal 타입엔 color가 없어서 에러난다

// // 2-2. 매개변수의 개수가 다를 때 (전제 : 매개변수의 타입은 같다!)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

//func1 <- func2 ok
func1 = func2;

//func2 (매개변수 1개) <- func1 (매개변수 2개) // 안됨!!
// func2 = func1;
