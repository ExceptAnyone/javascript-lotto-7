import { LOTTO } from '../constants/gameMessages.js';
import { outputView } from '../views/outputView.js';

const _reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const _pipe =
  (...fns) =>
  (x) =>
    _reduce((v, f) => f(v), x, fns);

const profitRate = (winningStats, lottoAmounts) => {
  const totalPrize =
    winningStats[3] * 5000 +
    winningStats[4] * 50000 +
    winningStats[5] * 1500000 +
    winningStats[5.5] * 30000000 +
    winningStats[6] * 2000000000;

  const profitRate = (totalPrize / (LOTTO.PRIZE * lottoAmounts)) * 100;
  outputView(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
};

export { _reduce, _pipe, profitRate };
