import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, LOTTO, statistics } from '../constants/gameMessages.js';

const outputView = (message) => {
  Console.print(message);
};

const printLottoAmounts = (userAmount) => {
  const lottoAmounts = Number(userAmount) / LOTTO.PRIZE;
  outputView(`${lottoAmounts}개를 구매했습니다.`);
  return lottoAmounts;
};

const printMatchLotto = (winningStats) => {
  outputView(GAME_MESSAGES.WINNING_STATISTICS);
  outputView(GAME_MESSAGES.DIVIDER);

  const matchCount = [
    { count: 3, hasBonus: false },
    { count: 4, hasBonus: false },
    { count: 5, hasBonus: false },
    { count: 5.5, hasBonus: true },
    { count: 6, hasBonus: false },
  ];
  matchCount.forEach(({ count, hasBonus }) => {
    const key = hasBonus ? (count = 5.5) : count;
    outputView(`${statistics(count, hasBonus)} - ${winningStats[key]}개`);
  });
};

export { outputView, printLottoAmounts, printMatchLotto };
