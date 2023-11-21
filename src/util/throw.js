import { Console } from "@woowacourse/mission-utils"
import { ERROR_MSG } from "./const.js"
import { Input } from "../view/input.js"

const thr = {
    buyErr: async (userInput)=>{
        try{
            throw Error(ERROR_MSG.buyErr)   
        }catch(err){
            Console.print(err.message);
            await userInput;
        }
    },

    winningErr: async (userInput)=>{
        try{
            throw Error(ERROR_MSG.winningErr)
        }catch(err){
            Console.print(err.message);
            await userInput;
        }
    },

    bonusErrErr:()=>{
        throw Error(ERROR_MSG.bonusErr)
    }

}

export default thr