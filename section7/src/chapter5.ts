/**
 * 프로미스
 */

// 비동기 수행 후 결과값의 타입을 자동으로 추론하지 않는다. response의 타입은 unknown임
// 제네릭을 이용하면 된다! 비동기 타입 결과값 타입을 정해줄 수 있음
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject :  any 타입임
    reject('실패!');
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

// cacth 메서드를 사용할 때엔 매개변수의 타입을 정확히 알 수 없다. (any)
promise.catch((err) => {
  // 프로젝트에 맞게 타입 좁히기
  if (typeof err === 'string') {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
//  서버에서 게시글 정보 가져와 뿌려주기
interface Post {
  id: number;
  title: string;
  content: string;
}

//         방법2.함수의 반환값 타입 직접 명시 (더 추천) : 가독성이 더 좋다.
function fetchPost(): Promise<Post> {
  // promise가 클래스이기 때문에 타입으로 활용할 수 있다. function fetchPost(): Promise<Post>

  // 방법1. Promise 뒤에 타입 변수 정해주기
  //   return new Promise<Post>((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 컨텐츠',
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
