/**
 * 제네릭 인터페이스
 */
// 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터

interface KeyPair<K, V> {
  key: K;
  value: V;
}
// 반드시 타입 변수에 할당할 타입을 지정해주어야 한다. < >
let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  // 프로퍼티의 key와 value의 타입에 대한 규칙
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

/**
 * 인덱스 시그니처 + 제네릭
 */

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'value',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
// 위의 interface Map타입과 똑같다.
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 :  학생 유저 / 개발자 유저
 */

// Student과 Developer는 서로소 관계이다.

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 타입 좁히기는 필요 없다. (제네릭))
  //   if (user.profile.type !== 'student') {
  //     console.log('잘 못 오셨습니다.');
  //     return;
  //   }

  const school = user.profile.school;
  console.log(`${school}로 등교 환료`);
}

const developerUser: User<Developer> = {
  name: '이정환',
  profile: {
    type: 'developer',
    skill: 'TypeScript',
  },
};

const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '뫄뫄대학교',
  },
};
