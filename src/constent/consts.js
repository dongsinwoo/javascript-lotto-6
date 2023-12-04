// 상수에 관한 데이터 모든 것.
// 상수 데이터 정리
// object.freeze() 사용해서 못바꾸도록함.

// 로또의 기본 정보
const LOTTO_DATA = Object.freeze({
    start_num : 1,
    end_num : 45,
    length : 6
})

// 로또 가격 상수값
const PRICE_TICET = Object.freeze(1000)

// 로또 당첨된 갯수에 따른 등수
const RANK = Object.freeze({
    first: 6,
    second: 5,
    third : 5,
    fourth : 4,
    fifth : 3,
})

// 로또 당첨 순위 표현 1~6등까지
const PRIZE_KEY = Object.freeze({
    firstPrize: "firstPrize",
    secondPrize: "secondPrize",
    thirdPrize: "thirdPrize",
    fourthPrize: "fourthPrize",
    fifthPrize: "fifthPrize"
})

// 로또 순위마다 당첨금액 상수
// 위의 사용한 키를 이용해 키의 값을 동적으로 입력함.
const PRIZE_AMOUNT = Object.freeze({
    [PRIZE_KEY.fifthPrize]: 2_000_000_000,
    [PRIZE_KEY.secondPrize]: 30_000_000,
    [PRIZE_KEY.thirdPrize]: 1_500_000,
    [PRIZE_KEY.fourthPrize]: 50_000,
    [PRIZE_KEY.fifthPrize]: 5_000
})

// 초기 당첨 통계값
// 나중에는 해당 객체를 복사해서 사용할 거임
const INITIAL_STATISTICS = Object.freeze({
    [PRIZE_KEY.firstPrize]: 0,
    [PRIZE_KEY.secondPrize]: 0,
    [PRIZE_KEY.thirdPrize]: 0,
    [PRIZE_KEY.fourthPrize]: 0,
    [PRIZE_KEY.fifthPrize]: 0
})

export {LOTTO_DATA, PRICE_TICET, RANK, PRIZE_KEY, PRIZE_AMOUNT, INITIAL_STATISTICS}