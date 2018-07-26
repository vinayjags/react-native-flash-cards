import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import TabNavigator from "../navigations/HomeTabNavigator"
import CustomStatusBar from "./StatusBar"

class HomeScreen extends Component {
  static router = TabNavigator.router

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar barStyle="light-content" />
        <TabNavigator navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd34e"
  }
})

export default HomeScreen
