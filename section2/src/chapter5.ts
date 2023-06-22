// enum 타입
//  여러가지 갑슬에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 enum
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// 숫자 할당하지 않아도 자동으로 순서대로 들어간다.
enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0 <- 관리자
  Language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
