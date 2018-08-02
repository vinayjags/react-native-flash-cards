import { AsyncStorage } from "react-native"
import { createStore } from "redux"
import reducers from "../reducers"
import middleware from "../middleware"
import { STORAGE_KEY } from "./settings"
import { hideLoader } from "../actions/loader";

const configureStore = ({ users, decks }) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(data => {
    let store = null
    if (!data) {
      store = createStore(reducers, { users, decks }, middleware)
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()))
    } else {
      store = createStore(reducers, JSON.parse(data), middleware)
    }
    store.dispatch(hideLoader())
    store.subscribe(() => {
      const newState = JSON.stringify(store.getState())
      AsyncStorage.mergeItem(STORAGE_KEY, newState)
    })
    return store
  })
}

export default configureStore
