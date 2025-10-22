import { MissionUtils } from '@woowacourse/mission-utils';
import RacingController from '../src/entities/RacingController.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('RacingController 테스트', () => {
  let racingController;

  beforeEach(() => {
    racingController = new RacingController();
  });

  it('자동차 경주를 시작한다.', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const input = [['pobi', 'woni'], 3];
    const logs = ['pobi : ---', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
    ]);

    racingController.start(...input);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
