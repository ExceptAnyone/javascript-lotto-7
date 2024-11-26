//@ts-check

import InputView from './views/inputView.js';
import { GAME_MESSAGES } from './constants/gameMessages.js';
import {
  outputView,
  printLottoAmounts,
  printMatchLotto,
} from './views/outputView.js';
import { pickRandomNumber } from './utils/random.js';
import Lotto from './services/Lotto.js';
import { lottoAmountsValidator } from './validator/lottoAmountsValidator.js';
import { winNumberValidator } from './validator/winNumberValidator.js';
import { bonusNumberValidator } from './validator/bonusNumberValidator.js';
import { profitRate } from './utils/util.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.lottos = [];
    this.winningStats = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0, // 보너스
      6: 0,
    };
  }
  async run() {
    const userAmount = await this.lottoAmount();
    const lottoAmounts = printLottoAmounts(userAmount);
    await this.matchCount(lottoAmounts);
    printMatchLotto(this.winningStats);
    profitRate(this.winningStats, lottoAmounts);
  }

  async lottoAmount() {
    while (true) {
      try {
        const userAmount = await this.inputView.readUserInput(
          GAME_MESSAGES.AMOUNT
        );
        lottoAmountsValidator(userAmount);
        return userAmount;
      } catch (error) {
        outputView(error.message);
      }
    }
  }

  async matchCount(lottoAmounts) {
    const lottos = this.printLottoNumbers(lottoAmounts); //진짜 로또 번호
    const { winNumber, bonusNumber } = await this.totalLottoNumber(); //유저가 입력한 로또숫자 6개
    const winningStats = this.winningStats;

    lottos.forEach((lotto) => {
      const matchCount = lotto.filter((number) =>
        winNumber?.includes(number)
      ).length;

      if (matchCount === 5 && lotto.includes(bonusNumber)) {
        winningStats[5.5]++;
      } else if (matchCount >= 3) {
        winningStats[matchCount]++;
      }
    });
  }

  async userLottoNumber() {
    while (true) {
      try {
        const userLottoNumber = await this.inputView.readUserInput(
          GAME_MESSAGES.WIN_NUMBERS
        );
        const winNumbers = userLottoNumber.split(',').map(Number);
        winNumberValidator(winNumbers);
        return new Lotto(winNumbers);
      } catch (error) {
        outputView(error.message);
      }
    }
  }

  async userBonusNumber(winNumber) {
    while (true) {
      try {
        const userBonusNumber = await this.inputView.readUserInput(
          GAME_MESSAGES.BONUS_NUMBERS
        );
        bonusNumberValidator(userBonusNumber, winNumber);
        return Number(userBonusNumber);
      } catch (error) {
        outputView(error.message);
      }
    }
  }

  async totalLottoNumber() {
    const winNumber = (await this.userLottoNumber())?.getNumber();
    const bonusNumber = await this.userBonusNumber(winNumber);

    return { winNumber, bonusNumber };
  }

  pickLotto(lottoAmounts) {
    for (let i = 0; i < lottoAmounts; i++) {
      this.lottos.push(pickRandomNumber());
    }

    return this.lottos;
  }

  printLottoNumbers(lottoAmounts) {
    const lottos = this.pickLotto(lottoAmounts);
    lottos.map((lotto) => outputView(`[${lotto.join(', ')}]`));
    return lottos;
  }
}

export default App;
