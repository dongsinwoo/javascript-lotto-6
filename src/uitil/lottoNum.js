import { Random } from '@woowacourse/mission-utils';

class LottoNumber {
    generateNumbers() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }
}

export {LottoNumber} 
