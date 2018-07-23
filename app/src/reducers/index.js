import { combineReducers } from "redux"
import authedUser from "./authUser"
import users from "./users"

export default combineReducers({
  authedUser,
  users
})
