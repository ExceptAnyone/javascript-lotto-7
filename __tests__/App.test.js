import App from '../src/App';
import { pickRandomNumber } from '../src/utils/random.js';

describe('matchCount', () => {
  let app;
  test('3개이상 로또 번호가 똑같을 때 matchCount를 하나 올린다', async () => {
    app = new App();
    const mockLottos = [[1, 2, 3, 7, 8, 9]];
    const mockWinNumber = [1, 2, 3, 4, 5, 6];
    const mockBonusNumber = 7;

    jest.spyOn(app, 'printLottoNumbers').mockReturnValue(mockLottos);
    jest.spyOn(app, 'totalLottoNumber').mockResolvedValue({
      winNumber: mockWinNumber,
      bonusNumber: mockBonusNumber,
    });

    await app.matchCount(1);

    expect(app.winningStats[3]).toBe(1);
  });
});
