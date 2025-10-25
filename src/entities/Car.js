import { Random } from '@woowacourse/mission-utils';

const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 9;
const MOVE_FORWARD_CONDITION = 4;
const MOVE_STEP = 1;

export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const random = Random.pickNumberInRange(
      MIN_RANDOM_NUMBER,
      MAX_RANDOM_NUMBER
    );

    if (random >= MOVE_FORWARD_CONDITION) {
      this.#position += MOVE_STEP;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
