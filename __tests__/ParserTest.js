import Parser from '../src/entities/Parser.js';

describe('Parser 테스트', () => {
  let parser;

  beforeEach(() => {
    parser = new Parser();
  });

  it('자동차 목록과 라운드 수를 입력 받는다.', () => {
    const inputs = [
      ['pobi,woni', '1'],
      ['pobi', '99999999'],
    ];
    const outputs = [
      {
        carNames: ['pobi', 'woni'],
        roundCount: 1,
      },
      {
        carNames: ['pobi'],
        roundCount: 99999999,
      },
    ];

    inputs.forEach((input, index) => {
      const result = parser.parse(input[0], input[1]);
      expect(result).toEqual(outputs[index]);
    });
  });
});

describe('Parser 에러 테스트', () => {
  let parser;

  beforeEach(() => {
    parser = new Parser();
  });

  it('참가하는 자동차 이름 길이가 1~5가 아니면 에러가 발생한다.', () => {
    const inputs = [
      [['pobibi', 'woni'], 1],
      [['pobi.woni', 'jun'], 1],
      [['pobi', '', 'woni'], 1],
    ];

    inputs.forEach((input) => {
      expect(() => parser.parse(input)).toThrow();
    });
  });

  it('라운드 수가 1 이상의 양수가 아니면 에러가 발생한다.', () => {
    const inputs = [
      ['pobi, woni', ''],
      ['pobi, woni', 'a'],
      ['pobi, woni', true],
      ['pobi, woni', [2]],
      ['pobi, woni', { round: 2 }],
      ['pobi, woni', () => 2],
      ['pobi, woni', 1.2],
      ['pobi, woni', 0],
      ['pobi, woni', -1],
      ['pobi, woni', 1e2],
      ['pobi, woni', NaN],
      ['pobi, woni', null],
      ['pobi, woni', undefined],
    ];

    inputs.forEach((input) => {
      expect(() => parser.parse(input)).toThrow();
    });
  });
});
