export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function receiveCards(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
