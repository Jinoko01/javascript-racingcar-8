import WinnerDeterminer from '../src/entities/WinnerDeterminer.js';

describe('WinnerDeterminer 테스트', () => {
  it('우승자를 선별한다.', () => {
    const cars = [
      ['pobi', 4],
      ['woni', 3],
      ['jun', 4],
      ['lee', 2],
      ['park', 3],
      ['choi', 4],
      ['cho', 1],
      ['kim', 2],
      ['jung', 0],
    ];
    const winners = ['pobi', 'jun', 'choi'];

    const result = WinnerDeterminer.getWinners(cars);

    expect(result).toEqual(winners);
  });
});
