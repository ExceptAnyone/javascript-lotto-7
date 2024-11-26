//@ts-check

class Lotto {
  #numbers;
  /**@notice 유저가 입력한 번호가 numbers구나 */

  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumber() {
    return [...this.#numbers];
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
