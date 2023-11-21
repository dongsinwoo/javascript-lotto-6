import { Console, Random } from '@woowacourse/mission-utils';

class Lotto {

  #winningNum(winningNumbers){
    return winningNumbers.split(",")
  }

  #validate(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  generateNumbers() {
    return Console.print(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  
  // TODO: 추가 기능 구현
}

export default Lotto;
