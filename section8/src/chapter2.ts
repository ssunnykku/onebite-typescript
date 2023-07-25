/**
 * keyof 연산자
 */

//1

// interface Person {
//   name: string;
//   age: number;
// }
// // key의 타입을 유니온으로 쓰면 문제가 생길 수 있다.('name' | 'age')
// // keyof 연산자 + 타입: 프로퍼티가 변경되면 자동으로 변경해준다.
// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }

// const person: Person = {
//   name: '이정환',
//   age: 27,
// };

// getPropertyKey(person, 'name');

// 2

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '이정환',
  age: 27,
};

getPropertyKey(person, 'name');
