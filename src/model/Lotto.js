import { Console, Random } from '@woowacourse/mission-utils';

class Lotto {
  

  winningNum(winningNumbers){
    const winningNumList =  winningNumbers.split(",")
    return this.#validate(winningNumList);
    

  }

  #validate(winningNumbers) {
    if (winningNumbers.length !== 6) {
      try{
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }catch(err){
        Console.print(err.message);
      }
    }else if(winningNumbers.length == 6){
      return winningNumbers
    }
  }

  

  generateNumbers() {
    return Console.print(Random.pickUniqueNumbersInRange(1, 45, 6).sort(function(a, b)  {
      return a - b;
    }));
  }
  
  // TODO: 추가 기능 구현
}

export default Lotto;
