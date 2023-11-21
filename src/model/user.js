import thr from "../util/throw.js"
import { Input } from "../view/input.js";
import { Output } from "../view/output.js";
import Lotto from "./Lotto.js";

class User {

    async payInput(){
        const input = new Input();
        const output = new Output();
        output.buyMsg();
        while (true) { 
            let userInput = await input.input();
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
        const output = new Output();
        const lotto = new Lotto();
        output.winningNum();
        while(true){
            let userInput = await input.input();
            if(userInput.includes(",")){
                lotto.winningNum(userInput);
                break;                
            }else if(!(userInput.includes(","))){
                thr.winningErr(userInput);
            }
        }

    }



}


export {User}