/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character클래스는 CharacterInterface를 구현한다.
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
