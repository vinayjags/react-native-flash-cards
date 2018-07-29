import React from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import LeaderboardUserItem from "./LeaderboardUserItem"

const LeaderboardScreen = ({ usersKeys, deckCount }) => {
  return (
    <View>
      {usersKeys.map((userId, index) => {
        return (
          <LeaderboardUserItem
            key={userId}
            index={index}
            deckCount={deckCount}
            userId={userId}
          />
        )
      })}
    </View>
  )
}

function mapStateToProps({ users, decks }) {
  const deckCount =
    Object.keys(decks).length === 0 ? 1 : Object.keys(decks).length

  const usersKeys = Object.keys(users)
    .sort((a, b) => {
      return users[b].name < users[a].name
    })
    .sort((a, b) => {
      let userAScore = 0
      Object.keys(users[a].answeredDecks).map(deck => {
        userAScore = userAScore + users[a].answeredDecks[deck]
      })

      let userBScore = 0
      Object.keys(users[b].answeredDecks).map(deck => {
        userAScore = userAScore + users[b].answeredDecks[deck]
      })

      return userBScore / deckCount <= userAScore / deckCount
    })

  return {
    usersKeys,
    deckCount
  }
}

export default connect(mapStateToProps)(LeaderboardScreen)
