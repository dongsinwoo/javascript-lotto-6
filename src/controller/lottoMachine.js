import Lotto from '../model/Lotto.js';
import { User } from '../model/user.js';
import { Output } from '../view/output.js';

class lottoMachine {
    async lottoPay(){
        const user = new User();
        const lotto = new Lotto();
        const output = new Output();
        const userStack = await user.payInput();
        output.payMsg(userStack);
        for(let i = 0; i < userStack; i++){
            lotto.generateNumbers();
        }
    }
}

const lottoM = new lottoMachine()
lottoM.lottoPay()
