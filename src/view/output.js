import { Console } from '@woowacourse/mission-utils'
import { LOTTO_MSG } from "../util/const.js"

class Output {

    buyMsg (){
        Console.print(LOTTO_MSG.buy);
    }

    payMsg (num){
        Console.print(num + LOTTO_MSG.pay);
    }

    winningNum (){
        Console.print(LOTTO_MSG.winningNumber);
    }

    bonusNum (){
        Console.print(LOTTO_MSG.bonusNumber);
    }

    winningStatus (){
        Console.print(LOTTO_MSG.winningStatus);
    }

    threeWin (num){
        Console.print(LOTTO_MSG.threeWin + num + "개");
    }

    fourWin (num){
        Console.print(LOTTO_MSG.fourWin + num + "개");
    }

    fiveWin (num){
        Console.print(LOTTO_MSG.fiveWin + num + "개");
    }

    fiveBonusWin (num){
        Console.print(LOTTO_MSG.fiveBonusWin + num + "개");
    }

    sixWin (num){
        Console.print(LOTTO_MSG.sixWin + num + "개");
    }

    lottoNumbers(numbers){
        Console.print(numbers);
    }
}

export {Output}