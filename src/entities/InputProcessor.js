import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, SYSTEM_MESSAGE } from '../data/messages.js';

export default class InputProcessor {
  async input() {
    const carNames = await this.carsInput();
    const roundCount = await this.roundInput();

    return { carNames, roundCount };
  }

  async carsInput() {
    const input = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_CARS);
    this.#validateCarNamesInput(input);

    return input;
  }

  async roundInput() {
    const input = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_ROUND);
    this.#validateRoundCountInput(input);

    return input;
  }

  #validateCarNamesInput(carNames) {
    if (carNames === '') {
      throw new Error(ERROR_MESSAGE.CAR_NAMES_EMPTY);
    }
  }

  #validateRoundCountInput(roundCount) {
    if (roundCount === '') {
      throw new Error(ERROR_MESSAGE.ROUND_COUNT_EMPTY);
    }
  }
}
