export const RECEIVE_USERS = "RECEIVE_USERS"
export const ADD_DECK_TO_USER = "ADD_DECK_TO_USER"
export const SAVE_QUIZ_SCORE = "SAVE_QUIZ_SCORE"

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

export function saveScoreForUser(info) {
  return {
    type: SAVE_QUIZ_SCORE,
    info
  }
}
