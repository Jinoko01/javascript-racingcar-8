export default class WinnerDeterminer {
  static getWinners(scores) {
    const maxPosition = Math.max(...scores.map((score) => score[1]));
    return scores
      .filter(([_, position]) => position === maxPosition)
      .map(([carName]) => carName);
  }
}
