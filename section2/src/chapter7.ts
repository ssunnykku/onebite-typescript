// void
// void -> 공허 : 아무것도 없다

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};

a = undefined;
// a = null;

function fun3(): null {
  console.log("hello");
  // return문 꼭 써줘야 함
  //   return문 반환하고싶지 않을 때 void를 써줌
  return null;
}

function fun4(): undefined {
  console.log("hello");
  return;
}

// never
// 존재하지 않는, 불가능한 타입

function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error();
}

let anyVar: any;

let b: never;

// 어떤 값도 들어갈 수 없다.
// b = 1;
// b = {};
// b = undefined;
// b = null;
// b = anyVar;
