import { AsyncStorage } from "react-native"
import { createStore } from "redux"
import reducers from "../reducers"
import middleware from "../middleware"
import { handleInitialData } from "../actions/shared"
import { STORAGE_KEY } from "./settings"

const configureStore = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(data => {
    let store = null
    if (data) {
      store = createStore(reducers, middleware)
      store.dispatch(handleInitialData())
    } else {
      store = createStore(reducers, JSON.parse(data), middleware)
    }
    store.subscribe(() => {
      console.log(store.getState())
      const newState = JSON.stringify(store.getState())
      AsyncStorage.mergeItem(STORAGE_KEY, newState)
    })
    return store
  })
}

export default configureStore