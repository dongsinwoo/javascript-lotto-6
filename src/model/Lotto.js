import { Random } from '@woowacourse/mission-utils';

class Lotto {
 #winningNumbers;

  constructor(winningNumbers) {
    this.#validate(numbers);
    this.#winningNumbers = winningNumbers;
  }
  
  #winningNum(winningNumbers){
    return winningNumbers.split(",")
  }

  #validate(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  generateNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
  
  // TODO: 추가 기능 구현
}

export default Lotto;
