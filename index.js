
function superbowlWin(records) {
    const winningGame = records.find(gameRecord => gameRecord.result === 'W')
    return winningGame && winningGame.year
}