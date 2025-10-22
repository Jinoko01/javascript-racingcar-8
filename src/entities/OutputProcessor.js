import { Console } from '@woowacourse/mission-utils';

export default class OutputProcessor {
  static printStatus(scores) {
    scores.forEach((score) => {
      const [carName, position] = score;

      Console.print(`${carName} : ${'-'.repeat(position)}`);
    });
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
