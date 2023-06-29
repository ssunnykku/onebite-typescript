/**
 * 인터페이스 선언 합치기
 */

// 동일한 이름으로 중복 선언 가능, 합쳐진다. 에러 X
interface Person {
  name: string;
}

interface Person {
  //   name: number; // 충돌 허용되지 않는다. 같은 프로퍼티 다른 타입으로 증복적용
  //   name: 'hello'; // 서브타입도 안됨
  name: string;
  age: number;
}

interface Developer extends Person {
  name: 'hello';
}

const person: Person = {
  name: '',
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
