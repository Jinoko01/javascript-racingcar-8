import Car from '../src/entities/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Car 테스트', () => {
  it('자동차를 생성한다.', () => {
    const name = 'pobi';

    const car = new Car(name);

    expect(car.getName()).toBe(name);
    expect(car.getPosition()).toBe(0);
  });

  it('자동차를 움직인다.', () => {
    const name = 'pobi';
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    mockRandoms(numbers);

    const car = new Car(name);

    numbers.forEach(() => car.move());

    const expectedPosition = numbers.filter((n) => n >= 4).length;
    expect(car.getName()).toBe(name);
    expect(car.getPosition()).toBe(expectedPosition);
  });
});
