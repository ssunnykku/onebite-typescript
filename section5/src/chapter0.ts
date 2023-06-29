/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 상호간에 약속된 규칙
 * 객체의 구조를 정의하는데 특화된 문법 (상속, 합침 등의 특수한 기능을 제공)
 */

interface Person {
  readonly name: string;
  age?: number;
  // 오버로딩을 구현하려면 호출 시그니처를 사용
  sayHi(): void;
  sayHi(a: number, b: number): void; // 호출 시그니처
}

// 인터섹션이나 유니온 이용하기
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: '이정환',
  sayHi: function () {
    console.log('Hi');
  },
};
// 읽기 전용이라 안됨
// person.name = "홍길동"

person.sayHi();
person.sayHi(1, 2);
