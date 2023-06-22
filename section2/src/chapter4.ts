// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// 같은 스코프 내에 중복은 안됨
// type User = {}

function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "김선희",
  nickname: "winterlooad",
  birth: "06.28",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "김선희",
  nickname: "winterlooad",
  birth: "06.28",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
// 이 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입이다.
type countryNumberCodes = {
  [key: string]: number;
  //    일치하거나 호환해야한다. 에러난다.
  //   Korea: string;
  Korea: number;
};

let countryNumberCodes = {
  Korea: "ko",
};
