/**
 Unknown 타입
 * 
 */

import { log } from "console";

function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //  다운캐스팅 언노운 타입의 변수는 어떤 타입의 변수에도 들어갈 수 없다
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입 => 공집합
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  //   업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   다운캐스팅
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never1: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // return undefined;
  }
  //   업캐스팅
  let voidVar: void = undefined;
}

/**
 * any 타입 (치트키, 타입 계층 무시)
 */

function anyExam() {
  let unkownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  // 다운캐스팅이지만 가능함
  anyVar = unkownVar;
  //   본인이 다운캐스팅 하는 거도 됨
  undefinedVar = anyVar;

  //   naver타입까지 다운캐스팅 할 수는 없다.
  //   neverVar = anyVar;
}
