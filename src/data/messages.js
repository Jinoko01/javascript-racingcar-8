export const SYSTEM_MESSAGE = Object.freeze({
  INPUT_CARS: '경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_ROUND: '시도할 횟수\n',
  OUTPUT_CURRENT_STATUS: (carName, position) =>
    `${carName} : ${'-'.repeat(position)}`,
  OUTPUT_WINNERS: (winners) => `최종 우승자 : ${winners.join(', ')}`,
});

const ERROR_PREFIX = '[ERROR] ';
export const ERROR_MESSAGE = Object.freeze({
  CAR_NAMES_EMPTY: `${ERROR_PREFIX}자동차 이름이 입력되지 않았습니다.`,
  ROUND_COUNT_EMPTY: `${ERROR_PREFIX}시도 횟수가 입력되지 않았습니다.`,
  INVALID_CAR_NAMES_LENGTH: `${ERROR_PREFIX}자동차 이름은 1자 이상 5자 이하의 문자열로 구성되어야 합니다.`,
  INVALID_ROUND_COUNT: `${ERROR_PREFIX}시도 횟수는 1 이상의 양수여야 합니다.`,
});
