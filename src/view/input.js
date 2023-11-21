import { Console } from '@woowacourse/mission-utils';

class Input {

    async input(){
        const userInput = await Console.readLineAsync("")
        return userInput
    }

}

export {Input}