import {
  RECEIVE_USERS,
  ADD_DECK_TO_USER,
  SAVE_QUIZ_SCORE
} from "../actions/users"
import decks from "./decks"

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_DECK_TO_USER:
      const { createdBy, id } = action.deck
      return {
        ...state,
        [createdBy]: {
          ...state[createdBy],
          decks: state[createdBy].decks.concat(id)
        }
      }
    case SAVE_QUIZ_SCORE:
      return {
        ...state,
        [action.info.userId]: {
          ...state[action.info.userId],
          answeredDecks: {
            ...state[action.info.userId].answeredDecks,
            [action.info.deckId]: action.info.scoreInfo
          }
        }
      }
    default:
      return state
  }
}
