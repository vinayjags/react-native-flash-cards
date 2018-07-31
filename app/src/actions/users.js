export const RECEIVE_USERS = "RECEIVE_USERS"
export const ADD_DECK_TO_USER = "ADD_DECK_TO_USER"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addDeckToUser(deck) {
  return {
    type: ADD_DECK_TO_USER,
    deck
  }
}
