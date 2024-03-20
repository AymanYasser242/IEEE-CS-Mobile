function points(games) {
  let totalScore = 0;
  games.forEach((game) => {
    let [x, y] = game.split(":");
    if (x > y) {
      totalScore += 3;
    } else if (x == y) {
      totalScore++;
    }
  });
  return totalScore;
}
