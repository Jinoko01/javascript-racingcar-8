import { ERROR_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 5;
const MIN_ROUND_COUNT = 1;
const DELIMITER = ',';

export default class Parser {
  parse(carNames, roundCount) {
    const carNamesArray = this.#getCarNames(carNames);
    const roundCountNumber = this.#getRoundCount(roundCount);

    return { carNames: carNamesArray, roundCount: roundCountNumber };
  }

  #getCarNames(carNames) {
    const result = carNames.split(DELIMITER).map((carName) => carName.trim());
    this.#validateCarNames(result);

    return result;
  }

  #getRoundCount(roundCount) {
    return this.#validateRoundCount(roundCount);
  }

  #validateCarNames(carNames) {
    const invalidMinLength = carNames.some((carName) => carName.length < MIN_NAME_LENGTH);
    const invalidMaxLength = carNames.some((carName) => carName.length > MAX_NAME_LENGTH);
    const invalidCarNames = invalidMinLength || invalidMaxLength;

    if (invalidCarNames) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAMES_LENGTH);
    }
  }

  #validateRoundCount(roundCount) {
    if (!REGEX.ONLY_NUMBER.test(roundCount)) {
      throw new Error(ERROR_MESSAGE.INVALID_ROUND_COUNT);
    }

    const roundCountNumber = Number(roundCount);

    if (roundCountNumber < MIN_ROUND_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_ROUND_COUNT);
    }

    return roundCountNumber;
  }
}
