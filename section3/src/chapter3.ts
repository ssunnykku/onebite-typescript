/**
 * 기본 타입 간의 호환성
 */

import { type } from "os";

let num1: number = 10;
let num2: 10 = 10;

// 업캐스팅
num1 = num2;

/**
 * 객체 타입간의 호환성 : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yello",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// animal <- dog 업캐스팅
animal = dog;

// animal <- dog 다운캐스팅
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "책",
  price: 33000,
  skill: "reactjs",
};
// OK
book = programmingBook;

// 불가능 다운캐스팅
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "책",
  price: 33000,
  //   실제 타입에 정의  X 이걸 막는게 초과 프로퍼티 검사
  //   skill: "reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {
  func({
    name: "책",
    price: 33000,
    // skill: "reactjs",
  });
}
func(programmingBook);
