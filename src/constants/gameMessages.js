const GAME_MESSAGES = Object.freeze({
  AMOUNT: '구입금액을 입력해 주세요.\n',
  WIN_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBERS: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계',
  DIVIDER: '---\n',
});

const LOTTO = Object.freeze({
  PRIZE: 1000,
});

// const statistics = (input, count, bonus) => {
//   switch (input) {
//     case input.length === 3:
//       `3개 일치 (5,000원) - ${count}개`;
//       break;
//     case input.length === 4:
//       `4개 일치 (50,000원) - ${count}개`;
//       break;
//     case input.length === 5:
//       `5개 일치 (1,500,000원) - ${count}개`;
//       break;
//     case input.length === 4 && bonus:
//       `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
//       break;
//     case input.length === 6:
//       `6개 일치 (2,000,000,000원) - ${count}개`;
//   }
// };

const statistics = (count, hasBonus = false) => {
  if (count === 3) return '3개 일치 (5,000원)';
  if (count === 4) return '4개 일치 (50,000원)';
  if (count === 5) return '5개 일치 (1,500,000원)';
  if (count === 5.5 && hasBonus)
    return '5개 일치, 보너스 볼 일치 (30,000,000원)';
  if (count === 6) return '6개 일치 (2,000,000,000원)';
};

export { GAME_MESSAGES, LOTTO, statistics };
