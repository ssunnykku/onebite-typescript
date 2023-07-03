/**
 * 제네릭 클래스
 */

// 제네릭 클래스
class List<T> {
  // 필드는 접근자를 쓰면 생략할 수 있다.
  //   T가 number로 추론됨(인수)
  //   string list class로 사용할 수도 있다. (중복된 클래스 선언하지 않아도 된다.)
  constructor(private list: T[]) {
    // this.list = list;
  }

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}
// 생성자의 인수로 number타입의 배열을 전달
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(['1', '2']);
stringList.push('hello');
stringList.print();
