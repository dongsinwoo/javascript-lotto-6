import { Console } from '@woowacourse/mission-utils';

class Input {

    async input(msg){
        const userInput = await Console.readLineAsync(msg)
        return userInput
    }

}

export {Input}