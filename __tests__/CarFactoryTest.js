import Car from '../src/entities/Car.js';
import CarFactory from '../src/entities/CarFactory.js';

describe('CarFactory 테스트', () => {
  let carFactory;

  beforeEach(() => {
    carFactory = new CarFactory();
  });

  it('자동차를 생성한다.', () => {
    const carNames = ['pobi', 'woni'];

    const cars = carFactory.createCars(carNames);
    expect(cars).toEqual([new Car('pobi'), new Car('woni')]);
  });
});

describe('CarFactory 에러 테스트', () => {
  let carFactory;

  beforeEach(() => {
    carFactory = new CarFactory();
  });

  it('자동차 이름이 중복되면 에러가 발생한다.', () => {
    const carNames = ['pobi', 'woni', 'pobi'];

    expect(() => carFactory.createCars(carNames)).toThrow();
  });
});
