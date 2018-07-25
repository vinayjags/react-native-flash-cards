import { combineReducers } from "redux"
import authedUser from "./authUser"
import users from "./users"
import decks from "./decks"

export default combineReducers({
  authedUser,
  users,
  decks
})
