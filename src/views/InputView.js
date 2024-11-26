//@ts-check

import { Console } from '@woowacourse/mission-utils';

class InputView {
  async readUserInput(message) {
    return await Console.readLineAsync(message);
  }
}

export default InputView;
