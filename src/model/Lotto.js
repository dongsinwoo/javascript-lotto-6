import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR_MSG,LOTTO_MSG } from '../util/const.js';

class Lotto {
  

  async winningNum(userInput){
    const winningNumList =  userInput.split(",");
    const pass = this.#validateLength(winningNumList);
    // console.log(pass)
    if(pass==LOTTO_MSG.success)
    {
      return winningNumList;
    }else if (pass == LOTTO_MSG.false ){
      return pass;
    }
  }

  #validateLength(winningNumbers) {
    if (winningNumbers.length !== 6) {
      try{
        throw new Error(ERROR_MSG.lengthErr);
      }catch(err){
        Console.print(err.message);
        return LOTTO_MSG.false
      }
    }else if(winningNumbers.length == 6){
      return this.#validateNum(winningNumbers)
    }
  }

  #validateNum(winningNumbers){
    for(let index = 0; index < winningNumbers.length; index++){
      if(isNaN(winningNumbers[index])|| winningNumbers[index] > 45 || winningNumbers[index] < 1){
        try{
          throw new Error(ERROR_MSG.winningErr);
        } catch(err){
          Console.print(err.message);
          return LOTTO_MSG.false;
        }
      }
    }
    return this.#validateDuplicate(winningNumbers);
  }
  

  #validateDuplicate(winningNumbers){
    const set = new Set(winningNumbers);
    if(set.size !== winningNumbers.length){
      try{
        throw new Error(ERROR_MSG.overlapErr);
      } catch(err){
        Console.print(err.message);
        return LOTTO_MSG.false;
      }
    }
    return LOTTO_MSG.success;
  }
  
  

  generateNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a - b )
  }
  
  // TODO: 추가 기능 구현
}
let oll = new Lotto();
oll.winningNum("1,2,3,4,5,6");
export default Lotto;
