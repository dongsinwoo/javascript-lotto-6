import thr from "../util/throw.js"
import { Input } from "../view/input.js";
import { Output } from "../view/output.js";

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
            else{
                thr.buyErr(userInput);
            }
        }
    }

    async winningInput(){
        const input = new Input();
        const output = new Output();
        


    }



}


export {User}