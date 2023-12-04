
// 메세지를 분류하여 상수로 넣어주자.

import { LOTTO_DATA, PRICE_TICET, PRIZE_KEY, RANK } from "./consts"

// input 관련 메세지
const INPUT_MESSAGES = Object.freeze({
    purchaseAmount: "구입 금액을 입력해주세요.\n",
    winningNumbers: "당첨 번호를 입력해주세요.\n",
    bonusNumber: "보너스 번호를 입력해주세요.\n"
})

// output관련 메세지
const OUTPUT_MESSAEGS = Object.freeze({
    // 메서드를 이용해서 구매 개수 동적으로 입력 받음.
    purchaseAmount: (amount) => `\n${amount}개를 구매했습니다.`,
    winsStatistic: "\n당첨통계\n---",
    totalWinsStatistic: (label, count) => `${label - count}개`,
    totalProfitRatio: (profitRatio) => `총 수익률은 ${profitRatio}%입니다.`
})

// 당첨 동계 메세지 객체로 만들어 놓기
const STATISTIC_LABEL = Object.freeze({
    [PRIZE_KEY.fifthPrize]: `${RANK.fifth}개 일치 (5,000원)`,
    [PRIZE_KEY.fourthPrize]: `${RANK.fourth}개 일치 (50,000원)`,
    [PRIZE_KEY.thirdPrize]: `${RANK.third}개 일치 (1,500,000원)`,
    [PRIZE_KEY.secondPrize]: `${RANK.second}개 일치 (30,000,000원)`,
    [PRIZE_KEY.firstPrize]: `${RANK.first}개 일치 (2,000,000,000원)`,
})

// 전체 에러메세지에 들어가는 문구
// object.freeze()안한 이유는 외부 파일에서 사용되지 않기 때문.
const PREFIX_ERROR = "[ERROR]";

// 예측되거나 필요한 예외메세지 객체
const ERROR_MESSAGE = Object.freeze({
    invalidLength: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_DATA.length}개여야 합니다.`,
    invalidNumberic: `${PREFIX_ERROR} 숫자가 잘못된 형식입니다.`,
    invalidRange: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_DATA.start_num}부터 ${LOTTO_DATA.end_num}사이의 숫자여야 합니다.`,
    invalidUnique: `${PREFIX_ERROR} 로또 번호는 중복되지 않아야 합니다.`,
    invalidAmount: `${PREFIX_ERROR} 구매 금액은 ${PRICE_TICET}원으로 나누어 떨어져야 합니다.`,
    invalidBonus: `${PREFIX_ERROR} 보너스 번호는 하나의 숫자만 가능합니다.`,
    invalidUniqueBonusNumber: `${PREFIX_ERROR} 보너스 번호는 로또 번호와 중복되지 않아야 합니다.`
})

export {ERROR_MESSAGE, STATISTIC_LABEL, OUTPUT_MESSAEGS, INPUT_MESSAGES}