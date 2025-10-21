import InputProcessor from '../src/entities/InputProcessor.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('InputProcessor 테스트', () => {
  let inputProcessor;

  beforeEach(() => {
    inputProcessor = new InputProcessor();
  });

  test('자동차 목록과 라운드 수를 입력 받는다.', async () => {
    const inputs = ['pobi,woni', '1'];
    mockQuestions([...inputs]);

    const cars = await inputProcessor.carsInput();
    const round = await inputProcessor.roundInput();

    expect(cars).toBe('pobi,woni');
    expect(round).toBe('1');
  });
});

describe('InputProcessor 에러 테스트', () => {
  let inputProcessor;

  beforeEach(() => {
    inputProcessor = new InputProcessor();
  });

  test('자동차 목록이 공백이면 에러가 발생한다.', async () => {
    mockQuestions(['']);
    await expect(inputProcessor.carsInput()).rejects.toThrow();
  });

  test('라운드 수 입력이 공백이면 에러가 발생한다.', async () => {
    mockQuestions(['']);
    await expect(inputProcessor.roundInput()).rejects.toThrow();
  });
});
