//@ts-check

import { _pipe } from '../utils/util.js';
import { checkEmpty } from './common.js';

/**@param {string} input */
const checkNumberType = (input) => {
  if (isNaN(Number(input))) throw new Error('[ERROR] 숫자로 입력해주세요.');

  return input;
};

/**@param {string} input */
const checkFormat = (input) => {
  if (input.length > 2)
    throw new Error('[ERROR] 보너스 번호는 한 개만 입력해주세요.');
  return input;
};

/**@param {string} input */
const checkRange = (input) => {
  if (Number(input) < 1 || Number(input) > 45)
    throw new Error('[ERROR] 1~45 사이 숫자로 입력해주세요.');
  return input;
};

/**
 * \@param {string} input
 * @param {number[]} winNumber
 * */
const checkDuplicate = (input, winNumber) => {
  const bonusNumber = Number(input);
  if (winNumber.includes(bonusNumber))
    throw new Error('[ERROR] 당첨 번호와 중복된 숫자는 입력할 수 없습니다.');

  return input;
};

export const bonusNumberValidator = (input, winNumber) =>
  _pipe(checkEmpty, checkNumberType, checkFormat, checkRange, (input) =>
    checkDuplicate(input, winNumber)
  )(input);
