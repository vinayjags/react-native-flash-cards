import {
  getInitialData,
  addDeck as addDeckApi,
  addCardToDeck,
  saveScoreToUser as saveScoreAPI
} from "../utils/api"
import { receiveUsers, addDeckToUser, saveScoreForUser } from "./users"
import { addDeck, addCard } from "./decks"
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
    }, 2000)
  }
}

export function handleAddDeck(deckInfo) {
  return dispatch => {
    dispatch(showLoader("Creating Deck. Please wait!"))
    return addDeckApi(deckInfo)
      .then(deck => {
        dispatch(addDeck(deck))
        dispatch(addDeckToUser(deck))
        dispatch(hideLoader())
        return deck
      })
      .catch(error => {
        dispatch(hideLoader())
      })
  }
}

export function handleAddCard(cardInfo) {
  return dispatch => {
    dispatch(showLoader("Adding Card. Please wait!"))
    return addCardToDeck(cardInfo)
      .then(card => {
        dispatch(addCard(card))
        dispatch(hideLoader())
        return card
      })
      .catch(error => {
        dispatch(hideLoader())
      })
  }
}

export function handleSaveUserScore(data) {
  console.log(data)
  return dispatch => {
    dispatch(showLoader("Saving Score. Please wait"))
    return saveScoreAPI(data.score)
      .then(scoreInfo => {
        const info = {
          userId: data.userId,
          deckId: data.deckId,
          scoreInfo
        }
        dispatch(saveScoreForUser(info))
        dispatch(hideLoader())
        return info
      })
      .catch(error => {
        console.log(error)
        dispatch(hideLoader())
      })
  }
}
