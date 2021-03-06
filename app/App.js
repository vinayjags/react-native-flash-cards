import React from "react"
import { StyleSheet, View } from "react-native"
import { AppLoading, Font } from "expo"
import { Provider } from "react-redux"
import configureStore from "./src/utils/store"
import { getInitialUsers, getInitialDecks } from "./src/utils/api"
import Root from "./src/components/Root"

let store = null

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAppReady: false
    }
  }

  async _loadAppAsync() {
    const fontPromise = Font.loadAsync({
      Raleway: require("./src/assets/fonts/Raleway.ttf"),
      RalewayBold: require("./src/assets/fonts/Raleway-Bold.ttf")
    })

    const users = await getInitialUsers()
    const decks = await getInitialDecks()

    const storePromise = new Promise((resolve, reject) => {
      configureStore({ users, decks }).then(devicestore => {
        store = devicestore
        resolve()
      })
    })

    return Promise.all([fontPromise, storePromise])
  }

  render() {
    if (!this.state.isAppReady) {
      return (
        <AppLoading
          startAsync={this._loadAppAsync}
          onFinish={() => this.setState({ isAppReady: true })}
        />
      )
    }

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd34e",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontFamily: "Raleway",
    fontSize: 14
  }
})
