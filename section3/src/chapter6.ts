/**
 * 타입 단언, assertion : 바꾸는게 아닌 타입스크립트 컴파일러를 믿도록 만드는 것. 확실할 때에만 사용하기
 */

type Person = {
  name: string;
  age: number;
};

// let person: Person = {};
let person = {} as Person;
person.name = "김선희";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  //   초과 프로퍼티 검사, 타입에 정의 안된 프로퍼티 허용 안됨
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

//  * A(number)가 B(never)의 슈퍼타입
let num1 = 10 as never;
// A가 B(전체)의 서브타입
let num2 = 10 as unknown;

// 오류발생 number와 string은 교집합이 없다
// let num3 = 10 as string;

// 다중 단언, 좋은 방법이 아니다.
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// const로 간주해 재할당 불가능
// cat.name = "";

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김선희",
};

//  값 자체가 null이 될 수 있는데 number만 올 수 있으므로 에러남
// const len: number = post.author?.length;
// 실제로 있어!.
const len: number = post.author!.length;
