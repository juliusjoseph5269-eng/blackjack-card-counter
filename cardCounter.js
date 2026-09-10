let count = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break; // no change
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  const holdBet = count > 0 ? "Bet" : "Hold";
  return count + " " + holdBet;
}

module.exports = cardCounter;
