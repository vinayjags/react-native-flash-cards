import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import CustomStatusBar from "./StatusBar"
import { connect } from "react-redux"
import { setLoggedInUser } from "../actions/shared"

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }

  getImagePath(image) {
    switch (image) {
      case "one.png":
        return require("../assets/images/avatars/one.png")
      case "two.png":
        return require("../assets/images/avatars/two.png")
      case "three.png":
        return require("../assets/images/avatars/three.png")
      case "four.png":
        return require("../assets/images/avatars/four.png")
      case "five.png":
        return require("../assets/images/avatars/five.png")
      case "six.png":
        return require("../assets/images/avatars/six.png")
    }
  }

  onUserItemPress = (userId) => {
    const { dispatch } = this.props
    dispatch(setLoggedInUser(userId))
  }

  render() {

    const { users } = this.props

    return (
      <View style={styles.container}>
        <CustomStatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <Image style={styles.iconImage} source={require("../assets/images/icon.png")} />
          <Text style={styles.heading}>Please Sign-In to continue</Text>
        </View>
        <View style={styles.list}>
          {Object.keys(users).map(userId => (
            <TouchableOpacity
              key={userId}
              style={styles.userItem}
              onPress={() => this.onUserItemPress(userId)}>
              <Image style={styles.userImage} source={this.getImagePath(users[userId].avatarURL)} />
              <Text style={styles.userName}>{users[userId].name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd34e",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  iconImage: {
    width: 150,
    height: 150
  },
  heading: {
    color: "white",
    fontFamily: "Raleway",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold"
  },
  list: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },
  userItem: {
    width: "30%",
    borderColor: "black",
    borderWidth: 1,
    margin: "2%",
    padding: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  userImage: {
    width: 100,
    height: 100
  },
  userName: {
    fontFamily: "Raleway",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5
  }
})

function mapStateToPros({ users }) {
  return {
    users
  }
}

export default connect(mapStateToPros)(SignInScreen)
