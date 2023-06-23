// 타입 추론

/**
 * 타입 추론 : 타입 정의 안되어있으면 초기값을 기준으로 추론
 */

// 타입 넓히기를 통해 추론해준다 (let)
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "하이",
  profile: {
    nickname: "winterload",
  },
  urls: "https://www.naver.com",
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any타입 진화
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

// number리터럴 타입으로 추론된다.(const)
const num = 10;
const str = "hello";

let arr = [1, "string"];
