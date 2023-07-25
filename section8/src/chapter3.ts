/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //... 기능
  return {
    id: 1,
    name: '이정환',
    age: 27,
  };
}
