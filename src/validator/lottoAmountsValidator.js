//@ts-check

import { LOTTO } from '../constants/gameMessages.js';
import { _pipe } from '../utils/util.js';
import { checkEmpty } from './common.js';

const checkPriceUnit = (input) => {
  if (Number(input) % LOTTO.PRIZE !== 0)
    throw new Error('[ERROR] 1000원 단위로 입력해주세요');
  return input;
};

const checkNumberType = (input) => {
  if (isNaN(Number(input))) throw new Error('[ERROR] 숫자로 입력해주세요.');
  return input;
};

const checkNegative = (input) => {
  if (Number(input) < 0) throw new Error('[ERROR] 음수는 입력할 수 없습니다');
  return input;
};

export const lottoAmountsValidator = _pipe(
  checkEmpty,
  checkNumberType,
  checkPriceUnit,
  checkNegative
);
