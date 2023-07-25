/**
 * 타입 조작하기 : interface 등
 * 원래 존재하던 타입들을 상황에 따라 다른 타입으로 변환하는 기능
 */
// ex) 제네릭
// 1. 인덱스드 엑세스 타입
// 2. Keyof 연산자
// 3. Mapped(맵드) 타입
// 4. 템플릿 리터럴 타입

/**
 * 인덱스드 엑세스 타입 : 인덱스 타입을 이용하여
 *  다른 타입 내에 특정 프로퍼티 타입을 추출하는 타입
 */

// 객체, 배열, 튜플에 사용할 수 있음

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 원본타입이 변경되어도 자동으로 적용된다.
// ['author'] :  인덱스임, 오직 타입만 들어갈 수 있다. 변수, 값은 들어갈 수 없다.
// const key = 'author'; 이런애 못들어감
// ['author']['id'] 중첩으로 사용 가능

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

// 배열 타입으로부터 하나의 특정 요소 타입을 가져오기
// [0](number 리터럴 타입) 숫자를 넣어도 됨
const post: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tub = [number, string, boolean];

type Tub0 = Tub[0];

type Tub1 = Tub[1];

type Tub2 = Tub[2];

// 존재 X , 오류
// type Tub3 = Tub[3];

// 최적의 공통 타입을 뽑아옴
type TubNum = Tub[number];
