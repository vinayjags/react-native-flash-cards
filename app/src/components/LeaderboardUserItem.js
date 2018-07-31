import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { connect } from "react-redux"
import { getImagePath } from "../utils/api"

const LeaderboardUserItem = ({ user, score, decks }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={getImagePath(user.avatarURL)} />
      <View style={styles.details}>
        <Text style={[styles.text, { fontFamily: "RalewayBold" }]}>{user.name}</Text>
        <Text style={styles.text}>Score: {score}</Text>
        <Text style={styles.text}>Decks Created: {decks}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    flexDirection: "row"
  },
  details: {
    flex: 1
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "Raleway",
    color: "black"
  },
  userImage: {
    width: 100,
    height: 100
  }
})

function mapStateToProps({ users }, { userId, deckCount, index }) {
  let userScore = 0
  Object.keys(users[userId].answeredDecks).map(deck => {
    userScore = userAScore + users[userId].answeredDecks[deck]
  })

  return {
    user: users[userId],
    score: (userScore / deckCount) * 100,
    decks: Object.keys(users[userId].decks).length
  }
}

export default connect(mapStateToProps)(LeaderboardUserItem)
