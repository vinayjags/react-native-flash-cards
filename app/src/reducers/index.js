import { combineReducers } from "redux"
import authedUser from "./authUser"
import users from "./users"
import decks from "./decks"
import loader from "./loader"

export default combineReducers({
  authedUser,
  users,
  decks,
  loader
})
