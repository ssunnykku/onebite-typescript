// enum 타입
//  여러가지 갑슬에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 enum
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
// 숫자 할당하지 않아도 자동으로 순서대로 들어간다.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN,
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
export {};
