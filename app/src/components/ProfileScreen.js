import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { getImagePath } from "../utils/api"
import { setLoggedInUser } from "../actions/shared"
import { clearLocalNotification } from "../utils/helper"

const ProfileScreen = ({ user, dispatch }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={getImagePath(user.avatarURL)} />
      <Text style={styles.userLog}>Logged in as {user.name}</Text>
      <TouchableOpacity
        style={styles.logOutBtn}
        onPress={() => {
          clearLocalNotification()
          dispatch(setLoggedInUser(null))
        }}
      >
        <Text style={styles.logOutBtnText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  userLog: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: "Raleway"
  },
  logOutBtn: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white"
  },
  logOutBtnText: {
    fontFamily: "Raleway"
  },
  userImage: {
    width: 150,
    height: 150
  }
})

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(ProfileScreen)
