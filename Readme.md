# 🃏 Deck Cards

A basic package for generating card decks and managing basic usage logic.

## Installation
```
npm i @isluny/deck-cards
```

## Creating & Using a Deck

### Starting
Create a basic deck
```js
const { Deck } = require('@isluny/deck-cards')

const deck = new Deck()
```

| Parameter                 | Type                                                                                    | Optional? | Default | Descrirption                                                                         |
|---------------------------|-----------------------------------------------------------------------------------------|-----------|---------|--------------------------------------------------------------------------------------|
| options.numberOfFullDecks | `number`                                                                                | `true`    | `1`     | Number of full decks                                                                 |
| options.allowedValues     | [`CardValue`](https://github.com/IsLunyStudios/deck-cards/blob/main/src/card.ts#L8)`[]` | `true`    | ---     | If defined, there will only be cards with the specified values ​​in the deck         |
| options.autoShuffle       | `boolean`                                                                               | `true`    | `true`  | If true, when the deck is created or reset, the cards will be shuffled automatically |

### Methods
#### Draw
Get the first card on top
```js
const card = deck.draw()
```

### Draw Many
Returns a array with top cards from the deck.
```js
const cards = deck.drawMany(3)
```

### Shuffle
We can shuffle the deck and randomize the positions
```js
deck.shuffle()
```

### Disable a Card
You can disable the use of a card in the deck
```
deck.disableCard(`${CardValue.Ace}:${CardSuit.Spades}`);
```

[CardValue Enum](https://github.com/IsLunyStudios/deck-cards/blob/main/src/card.ts#L8) | [CardSuit Enum](https://github.com/IsLunyStudios/deck-cards/blob/main/src/card.ts#L1)

### Get number of card available
```js
const deckAvailable = deck.len()
```

### Get number of card used
```js
const deckUsed = deck.used()
```