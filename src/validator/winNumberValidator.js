//@ts-check

import { _pipe } from '../utils/util.js';

/**@param {number[]} input */
const checkEmpty = (input) => {
  if (input.length === 0) throw new Error('[ERROR] 빈 값입니다.');

  return input;
};

/**@param {number[]} input */
const checkNumberType = (input) => {
  if (input.some((number) => isNaN(number)))
    throw new Error('[ERROR] 당첨번호는 숫자로 입력해주세요.');
  return input;
};

/**@param {number[]} input */
const checkRange = (input) => {
  if (input.some((number) => number < 1 || number > 45))
    throw new Error('[ERROR] 1~45 사이로 입력해주세요.');

  return input;
};

/**@param {number[]} input */
const checkNumberFormat = (input) => {
  if (input.length > 6 || input.length !== 6)
    throw new Error('[ERROR] 당첨번호는 6개로 입력해주세요.');

  return input;
};

/**@param {number[]} input */
const checkDuplicate = (input) => {
  if (input.length !== new Set(input).size)
    throw new Error('[ERROR} 중복된 숫자는 입력할 수 없습니다.');

  return input;
};

export const winNumberValidator = _pipe(
  checkEmpty,
  checkNumberType,
  checkRange,
  checkNumberFormat,
  checkDuplicate
);
