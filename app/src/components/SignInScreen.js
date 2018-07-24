import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import CustomStatusBar from "./StatusBar"

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar barStyle="light-content" />
        <Text style={styles.text}>SignIn</Text>
      </View>
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

export default SignInScreen
