import { Console } from "@woowacourse/mission-utils"
import { ERROR_MSG } from "./const.js"


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

    bonusErr:async(userInput)=>{
        try{
            throw Error(ERROR_MSG.bonusErr)
        }catch(err){
            Console.print(err.message);
            await userInput;
        }
    }

}

export default thr