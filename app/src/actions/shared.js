import { getInitialData } from "../utils/api"
import { receiveUsers } from "./users"
import { setAuthUser } from "../actions/authUser"

const AUTH_ID = null

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users }) => {
      dispatch(receiveUsers(users))
      dispatch(setAuthUser(AUTH_ID))
    })
  }
}

export function setLoggedInUser(authId) {
  if (typeof authId === "undefined") {
    authId = AUTH_ID
  }

  return dispatch => {
    dispatch(setAuthUser(authId))
  }
}
