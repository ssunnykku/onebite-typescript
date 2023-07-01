/**
 * 타입스크립트의 클래스
 */

import { log } from 'console';

const employee = {
  name: '이정환',
  age: 27,
  position: 'developer',
  work() {
    console.log('일함');
  },
};

// ts의 class는 타입으로도 활용된다.
class Employee {
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //   생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    // super 생략 불가능. 오류가 발생한다. super클래스의 생성자까지 반드시 호출해야 한다.
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee('이정환', 27, '개발자');
console.log(employeeB);

// class가 가진 필드, 메서드 모두를 가져야 함
const employeeC: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
};
