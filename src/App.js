import InputProcessor from './entities/InputProcessor.js';
import Parser from './entities/Parser.js';
import CarFactory from './CarFactory.js';
import RacingController from './entities/RacingController.js';

class App {
  async run() {
    const inputProcessor = new InputProcessor();
    const { carNames: carNamesInput, roundCount: roundCountInput } =
      await inputProcessor.input();

    const parser = new Parser();
    const { carNames, roundCount } = parser.parse(
      carNamesInput,
      roundCountInput
    );

    const carFactory = new CarFactory();
    const racingController = new RacingController(carFactory);
    racingController.start(carNames, roundCount);
  }
}

export default App;
