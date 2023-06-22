// object을 사용하면 객체라는 정보만 주어서 요소를 사용할 때 에러가 날 수 있음
// 프로퍼티의 타입까지 정의해주어야 함
// 구조적 타입 시스템
let user: { id?: number; name: string } = {
  id: 1,
  name: "김선희",
};

// ? : 선택적 프로퍼티, 옵셔널 프로퍼티
user = {
  name: "홍길동",
};

// 읽기 전용 속성
let config: {
  readonly apiKey: string;
} = { apiKey: "MY API KEY" };
