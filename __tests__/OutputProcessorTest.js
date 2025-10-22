import { MissionUtils } from '@woowacourse/mission-utils';
import OutputProcessor from '../src/entities/OutputProcessor.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('OutputProcessor 테스트', () => {
  it('자동차 경주 현황판을 출력한다.', () => {
    const cars = [
      ['pobi', 3],
      ['woni', 2],
      ['jun', 1],
    ];
    const logs = ['pobi : ---', 'woni : --', 'jun : -'];
    const logSpy = getLogSpy();

    OutputProcessor.printStatus(cars);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  it('우승자를 출력한다.', () => {
    const winners = ['pobi', 'woni'];
    const logSpy = getLogSpy();

    OutputProcessor.printWinners(winners);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('pobi'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('woni'));
  });
});
