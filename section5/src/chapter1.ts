/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  color: string;
}

// type이 와도 확장할 수 있다.
interface Dog extends Animal {
  // name: 'hello'; // 재정의 가능, but 원본 프로퍼티 타입의 서브 타입으로만 정의해야한다.
  isBark: boolean;
}

const dog: Dog = {
  // name: 'hello',
  name: '',
  color: '',
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {} // 다중확장 가능

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: true,
  isScratch: true,
};
