import { LOTTO_MSG } from "../util/const.js";
import thr from "../util/throw.js"
import { Input } from "../view/input.js";
import Lotto from "./Lotto.js";

class User {

    async payInput(){
        const input = new Input();
        while (true) { 
            let userInput = await input.input(LOTTO_MSG.buy);
            if (userInput % 1000 === 0 && userInput != 0) {
                return userInput/1000
                break;
            } 
            else if(isNaN(userInput) || userInput == 0 || userInput % 1000 != 0){
                thr.buyErr(userInput);
            }
        }
    }

    async winningInput(){
        const input = new Input();
        const lotto = new Lotto();
        while(true){
            let userInput = await input.input(LOTTO_MSG.winningNumber);
            if(userInput.includes(",") && !(userInput.includes("."))){
                const result = await lotto.winningNum(userInput);
                if(result == 0){
                    continue
                }else if(result !== 0){
                    return result;
                }
            }else if(!(userInput.includes(",")) || (userInput.includes("."))){
                thr.winningErr(userInput);
            }
        }
    }

    async bounsInput(winningNum){
        const input = new Input();
        while(true){
            let userInput = await input.input(LOTTO_MSG.bonusNumber);
            let validate = !isNaN(userInput) && !(userInput > 45 || userInput < 1) && !(userInput.includes(".")) && !(winningNum.includes(userInput));
            if(validate){
                return userInput;
            }else{
                thr.bonusErr(userInput);
            }
        }
    }

}


export {User}