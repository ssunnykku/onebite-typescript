// 같은 스코프 내에 중복은 안됨
// type User = {}
function func() {
}
let user = {
    id: 1,
    name: "김선희",
    nickname: "winterlooad",
    birth: "06.28",
    bio: "안녕하세요",
    location: "부천시",
};
let user2 = {
    id: 2,
    name: "김선희",
    nickname: "winterlooad",
    birth: "06.28",
    bio: "안녕하세요",
    location: "부천시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: "ko",
};
export {};
