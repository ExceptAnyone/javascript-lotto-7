export const checkEmpty = (input) => {
  if (!input.trim()) throw new Error('[ERROR] 빈 값입니다.');

  return input;
};
