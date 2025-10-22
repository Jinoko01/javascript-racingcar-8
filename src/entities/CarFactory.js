import Car from './Car.js';

export default class CarFactory {
  createCars(carNames) {
    this.#validateDuplicated(carNames);

    return carNames.map((carName) => new Car(carName));
  }

  #validateDuplicated(carNames) {
    const carNameSet = new Set(carNames);
    if (carNameSet.size !== carNames.length) {
      throw new Error('자동차 이름이 중복되었습니다.');
    }
  }
}
