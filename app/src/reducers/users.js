import { RECEIVE_USERS, ADD_DECK_TO_USER } from "../actions/users"
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
    default:
      return state
  }
}
