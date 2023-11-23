const LOTTO_MSG = {
    buy : "구입금액을 입력해 주세요.\n",
    winningNumber : "당첨 번호를 입력해주세요.\n",
    bonusNumber : "보너스 번호를 입력해 주세요.\n",

    pay : "개를 구매했습니다.",
    winningStatus : "당첨 통계",
    threeWin : "3개 일치 (5,000원) - ",
    fourWin : "4개 일치 (50,000원) - ",
    fiveWin : "5개 일치 (1,500,000원) - ",
    fiveBonusWin : "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    sixWin : "6개 일치 (2,000,000,000원) - ",
    insent : "수익률",
    success: 1,
    false : 0,
}

const ERROR_MSG = {
    buyErr : "[ERROR] 구매 금액을 다시 입력해주세요",
    winningErr : "[ERROR] 당첨 번호를 올바르게 입력해주세요 (예: 1,2,3,4,5,6) (쓰면 안되는 것 : '.', 'str', 1이하 46이상의수)",
    bonusErr : "[ERROR] 보너스 번호를 올바르게 입력해주세요 (예: 숫자하나만 문자x, 중복 x)",
    lengthErr : "[ERROR] 로또 번호는 6개여야 합니다.",
    overlapErr : "[ERROR] 당첨 번호는 중복되면 안됩니다."
}

const LOTTO = {
    maxLength : 6,
}

export {LOTTO_MSG, ERROR_MSG,LOTTO}
