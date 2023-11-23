import { loadOptions } from '@babel/core';
import Lotto from '../model/Lotto.js';
import { User } from '../model/user.js';
import { LOTTO, LOTTO_MSG } from '../util/const.js';
import { Output } from '../view/output.js';
import { Console } from "@woowacourse/mission-utils"

class LottoMachine {
    #lottoList = [];
    #pay = 0
    async #lottoPay(){
        const user = new User();
        const lotto = new Lotto();
        const output = new Output();
        const userStack = await user.payInput();
        this.#pay = userStack;
        output.payMsg(userStack);

        this.#lottoList = [];
        for(let i = 0; i < userStack; i++){
           const lifeLotto = lotto.generateNumbers();
           Console.print(lifeLotto);
           this.#lottoList.push(lifeLotto);
        }

        return this.#lottoList;
    }

    async #winningInput(){
        const user = new User();
        return await user.winningInput();
    }

    async #bouns(winningNum){
        const user = new User();
        return await user.bounsInput(winningNum)
    }

    // 추후에 수정
    #comparison(winningNum,bonusNum){
        const lottos = this.#lottoList;
        let resultSet = []
        let winningList = {
            3:0,
            4:0,
            5:0,
            five_bonus : 0,
            6:0,
        }
        lottos.forEach((lotto) => {
            console.log(lotto);
            const sum = lotto.toString().includes(bonusNum) ? lotto + "," + winningNum + "," + bonusNum : lotto + "," + winningNum + "," + LOTTO_MSG.false;
            resultSet = [...resultSet, sum];
        });
        resultSet.forEach((score) => {
            const arrScore = score.split(",")
            const setScore = new Set(arrScore).size;
            const BONUS_LENG = 1
            const lottoScore = (2*(LOTTO.maxLength) - setScore)+ BONUS_LENG;

            if(lottoScore == LOTTO.maxLength && score.includes(bonusNum)){
                winningList.five_bonus += 1;
            }else {
                winningList[lottoScore] += 1;
            }
        })

        return winningList
    }

    async paly(){
        await this.#lottoPay();
        const winningNum = await this.#winningInput();
        const bonusNum = await this.#bouns(winningNum);
        const winningList = this.#comparison(winningNum, bonusNum);
        const output = new Output();
        output.winningOutput(winningList, this.#pay);


    }
}

const app = new LottoMachine()
app.paly()
export default LottoMachine