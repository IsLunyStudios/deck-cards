import { Card, CardSuit, CardValue } from './card'

const CardValues = [...new Set(Object.keys(CardValue))] as CardValue[]
const CardSuits = [...new Set(Object.keys(CardSuit))] as CardSuit[]

export interface DeckOptions {
	numberOfFullDecks?: number
	allowedValues?: CardValue[]
	autoShuffle?: boolean
}

export class Deck {
	cards: Card[] = []
	usedCards: Card[] = []

	private allowedValues?: CardValue[] = []
	private numberOfFullDecks: number
	private autoShuffle: boolean

	constructor({ numberOfFullDecks = 1, allowedValues, autoShuffle = true }: DeckOptions = {}) {
		this.numberOfFullDecks = numberOfFullDecks
		this.allowedValues = allowedValues?.length ? allowedValues : undefined
		this.autoShuffle = autoShuffle

		this.cards = this.build()
		if(this.autoShuffle) this.shuffle()
	}

	private build(numberOfFullDecks: number = 1) {
		const cards: Card[] = []

		for(const value of CardValues) {
			if(this.allowedValues && !this.allowedValues.includes(value)) {
				continue;
			}

			for(const suit of CardSuits) {
				for(let i = 0; i < numberOfFullDecks; i++) {
					const card = new Card(value, suit)

					cards.push(card)
				}
			}
		}

		return cards
	}

	reset() {
		this.usedCards = []

		this.cards = this.build(this.numberOfFullDecks)

		if(this.allowedValues) this.shuffle()

		return this
	}

	shuffle() {
		for(let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
		}

		return this
	}

	draw() {
		const card = this.cards.pop() ?? null

		if(card) this.usedCards.push(card)

		return card
	}

	drawMany(count: number) {
		const cards = this.cards.slice(0, count)
		const notUsedcards = this.cards.slice(count)
		
		this.cards = notUsedcards
		this.usedCards.push(...cards)
		return cards
	}

	disableCard(card: Card | Card['id']) {
		const id = typeof card === 'string' ? card : card.id

		const indexUsed = this.cards.findIndex(
		  	(cardInDeck) => cardInDeck.id == id
		)
	
		if(indexUsed > -1) {
			const _card = this.cards[indexUsed]

			this.cards.splice(indexUsed, 1);
			this.usedCards.push(_card);
		} else {
		  	throw Error('Card not found in the deck');
		}
	}

	len() {
		return this.cards.length
	}

	used() {
		return this.usedCards.length
	}
}

export default Deck