import { Console } from '@woowacourse/mission-utils'
import { LOTTO_MSG } from "../util/const.js"

class Output {

    payMsg (num){
        Console.print(num + LOTTO_MSG.pay);
    }

    #winningStatus (){
        Console.print(LOTTO_MSG.winningStatus);
    }

    #insent(winningList, pay){
    
        const three = winningList[3] * 5000
        const four = winningList[4] * 50000
        const five = winningList[5] * 1500000
        const fiveBonus = winningList.five_bonus * 30000000
        const six = winningList[6] * 200000000
        const insent = ((((three + four + five + fiveBonus + six - pay) / pay ) * 100) + 100).toFixed(1);
        Console.print(`${LOTTO_MSG.insent}${insent}%입니다.`)
    }

    winningOutput(winningList, pay){
        const winningPrintMap = [
            `${LOTTO_MSG.threeWin} ${winningList[3]}개`,
            `${LOTTO_MSG.fourWin} ${winningList[4]}개`,
            `${LOTTO_MSG.fiveWin} ${winningList[5]}개`,
            `${LOTTO_MSG.fiveBonusWin} ${winningList.five_bonus}개`,
            `${LOTTO_MSG.sixWin} ${winningList[6]}개`,
        ]
        this.#winningStatus();
        for (const msg of winningPrintMap) {
            Console.print(msg)
        }

        this.#insent(winningList,pay)
    }
}

export {Output}