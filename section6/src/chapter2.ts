/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // public : 아무 제약이 없다. (초기 설정값)
  // private : 클래스 외부에서는 접근을 막는다. 파생 클래스의 메서드에서도 접근할 수 없다.
  // protected: 파생클래스까지는 허용이 된다

  //필드 정의

  //   private name: string;
  //   protected age: number;
  //   public position: string;

  //생성자
  //  접근제어자는 생성자의 매개변수 앞에 달려면 필드 정의는 생략해야 한다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 자동으로 값도 할당된다.
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
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
  func() {
    // this.name; // 접근 불가
    this.age;
    this.position;
  }
}

const employee = new Employee('김선희', 30, 'developer');
// employee.name = '홍길동';
// employee.age = 30;
employee.position = '디자이너';

console.log(employee);
