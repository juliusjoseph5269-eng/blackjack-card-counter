# Blackjack Card Counter

A JavaScript implementation of the Hi-Lo card counting strategy used in blackjack.

## How It Works

Each card dealt shifts a running `count`:

- **Low cards** `2, 3, 4, 5, 6` → `count++`
- **Neutral cards** `7, 8, 9` → no change
- **High cards** `10, "J", "Q", "K", "A"` → `count--`

After each card is processed, the function returns the current count along with a betting recommendation:

- If `count > 0` → `"Bet"`
- Otherwise → `"Hold"`

## Usage

```javascript
const cardCounter = require('./cardCounter');

cardCounter(2);  // "1 Bet"
cardCounter(3);  // "2 Bet"
cardCounter(4);  // "3 Bet"
cardCounter(5);  // "4 Bet"
cardCounter(6);  // "5 Bet"
cardCounter(7);  // "5 Bet"  (no change)
cardCounter("K"); // "4 Bet"
```

## Function

- **Name:** `cardCounter`
- **Parameter:** a single card value (number `2`–`10`, or string `"J"`, `"Q"`, `"K"`, `"A"`)
- **Returns:** a string combining the running count and `"Bet"` or `"Hold"`, separated by a space