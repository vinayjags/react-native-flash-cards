import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { AppLoading, Font } from "expo"
import { Provider } from "react-redux"
import configureStore from "./src/utils/store"

let store = null

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAppReady: false,
      state: null
    }
  }

  async _loadAppAsync() {
    const fontPromise = Font.loadAsync({
      Raleway: require("./src/assets/fonts/Raleway.ttf")
    })

    const storePromise = new Promise((resolve, reject) => {
      configureStore().then(devicestore => {
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

    console.log("App Loaded")

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Open up App.js to start working on your app!
          </Text>
          <Text style={styles.text}>
            Changes you make will automatically reload.
          </Text>
          <Text style={styles.text}>
            Shake your phone to open the developer menu.
          </Text>
        </View>
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
