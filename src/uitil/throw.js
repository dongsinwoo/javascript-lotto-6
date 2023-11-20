import { ERROR_MSG } from "./const"
class Throw{
    buyErr(){
        throw Error(ERROR_MSG.buyErr)
    }

    winningErr(){
        throw Error(ERROR_MSG.winningErr)
    }

    bonusErrErr(){
        throw Error(ERROR_MSG.bonusErr)
    }

}

export { Throw }