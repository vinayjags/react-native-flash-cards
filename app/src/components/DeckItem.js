import React from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

const DeckItem = deck => {
  return (
    <View>
      <Text>This is test</Text>
    </View>
  )
}

function mapStateToProps({ decks }, { deckId }) {
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps)(DeckItem)
