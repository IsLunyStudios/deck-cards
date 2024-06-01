export enum CardSuit {
    Hearts = 'Hearts',
    Diamonds = 'Diamonds',
    Clubs = 'Clubs',
    Spades = 'Spades'
}

export enum CardValue {
	Two = 'Two',
    Three = 'Three',
    Four = 'Four',
    Five = 'Five',
    Six = 'Six',
    Seven = 'Seven',
	Eight = 'Eight',
	Nine = 'Nine',
	Ten = 'Ten',
	Jack = 'Jack',
    Queen = 'Queen',
    King = 'King',
    Ace = 'Ace',
}

export enum CardValueCode {
	Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
	Eight = '8',
	Nine = '9',
	Ten = '10',
	Jack = 'J',
    Queen = 'Q',
    King = 'K',
    Ace = 'A',
}

export enum CardSuitCode {
    Hearts = 'H',
    Diamonds = 'D',
    Clubs = 'C',
    Spades = 'S'
}

export class Card {
	readonly suit: CardSuit
	readonly value: CardValue
	readonly id: `${CardValue}:${CardSuit}`
	readonly code: string

	constructor(value: CardValue, suit: CardSuit) {
		this.suit = suit
		this.value = value

		this.id = `${this.value}:${this.suit}`
		this.code = `${CardValueCode[this.value]}${CardSuitCode[this.suit]}`
	}
}