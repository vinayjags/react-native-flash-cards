export const RECEIVE_DECKS = "RECEIVE_DECKS"

export function receiveCards(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}