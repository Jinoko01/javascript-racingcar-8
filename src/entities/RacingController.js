import CarFactory from './CarFactory.js';
import OutputProcessor from './OutputProcessor.js';
import WinnerDeterminer from './WinnerDeterminer.js';

export default class RacingController {
  constructor() {
    this.carNames = [];
    this.roundCount = 0;
    this.carFactory = new CarFactory();
    this.carFactory = new CarFactory();
  }

  start(carNames, roundCount) {
    this.carNames = this.#createCars(carNames);
    this.roundCount = roundCount;
    this.#play();
  }

  #createCars(carNames) {
    return this.carFactory.createCars(carNames);
    return this.carFactory.createCars(carNames);
  }

  #play() {
    for (let i = 0; i < this.roundCount; i++) {
      this.carNames.forEach((car) => car.move());
      const current = this.#getCurrent();
      OutputProcessor.printStatus(current);
    }

    const winners = this.#getWinners();
    OutputProcessor.printWinners(winners);
  }

  #getCurrent() {
    return this.carNames.map((car) => [car.getName(), car.getPosition()]);
  }

  #getWinners() {
    const current = this.#getCurrent();
    return WinnerDeterminer.getWinners(current);
  }
}
