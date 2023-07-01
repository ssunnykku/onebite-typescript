/**
 * 클래스
 */

import { log } from 'console';

let studentA = {
  name: '이정환',
  grade: 'A+',
  age: 27,
  study() {
    console.log('열심히 공부 함');
  },
  introduce() {
    console.log('안녕하세요!');
  },
};

class Student {
  //  필드
  name;
  grade;
  age;

  // 생성자 : 클래스를 호출하면 실제로 객체를 생성하는 역할을 한다. (메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부 함');
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

class studentDeveloper extends Student {
  // 필드

  favoritSkill;

  //생성자
  constructor(name, grade, age, favoritSkill) {
    super(name, grade, age); // 부모틀래스의 생성자가 호출된다.
    this.favoritSkill = favoritSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함`);
  }
}

const studentDeveloperA = new studentDeveloper('김선희', 'B', 30, 'TypeScript');
console.log(studentDeveloperA);
studentDeveloperA.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던스 인스턴스
let studentB = new Student('김선희', 'A+', 30);
console.log(studentB);
studentB.study();
studentB.introduce();
