import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../data/messages.js';

export default class OutputProcessor {
  static printStatus(scores) {
    scores.forEach(([carName, position]) => {
      Console.print(SYSTEM_MESSAGE.OUTPUT_CURRENT_STATUS(carName, position));
    });
    Console.print('');
  }

  static printWinners(winners) {
    Console.print(SYSTEM_MESSAGE.OUTPUT_WINNERS(winners));
  }
}
