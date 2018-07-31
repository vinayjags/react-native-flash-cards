import { getInitialData } from "../utils/api"
import { receiveUsers } from "./users"
import { setAuthUser } from "./authUser"
import { showLoader, hideLoader } from "./loader"

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
    dispatch(showLoader("Please wait..."))
    setTimeout(() => {
      dispatch(setAuthUser(authId))
      dispatch(hideLoader())
    }, 3000)
  }
}
