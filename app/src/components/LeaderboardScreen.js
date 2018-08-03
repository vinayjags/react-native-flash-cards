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

  const usersKeys = Object.keys(users).sort((a, b) => {
    let userAScore = 0
    Object.keys(users[a].answeredDecks).map(deck => {
      userAScore = userAScore + users[a].answeredDecks[deck].score
    })

    let userBScore = 0
    Object.keys(users[b].answeredDecks).map(deck => {
      userBScore = userBScore + users[b].answeredDecks[deck].score
    })

    userBScore = userBScore / deckCount
    userAScore = userAScore / deckCount

    if (userAScore > userBScore) {
      return -1
    } else if (userAScore < userBScore) {
      return 1
    }

    return 0
  })

  return {
    usersKeys,
    deckCount
  }
}

export default connect(mapStateToProps)(LeaderboardScreen)
