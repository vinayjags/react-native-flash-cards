import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { getImagePath } from "../utils/api"

const DeckItem = ({ deck, author, isEditable, navigation }) => {

  const { navigate } = navigation

  return (
    <View style={styles.container}>
      <View style={{ width: "30%" }}>
        <Image style={styles.authorImage} source={getImagePath(author.avatarURL)} />
        <Text style={styles.authorName}>{author.name}</Text>
      </View>
      <View style={{
        flex: 1
      }}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckCardCount}>{`No. Of Cards: ${deck.cards.length}`}</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigate("DeckDetails", {
          deckId: deck.id,
          title: deck.title
        })}>
          <Text style={styles.startBtnText}>{isEditable ? "Edit / Start" : "Start"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 10
  },
  authorImage: {
    width: 100,
    height: 100
  },
  authorName: {
    fontFamily: "Raleway",
    fontSize: 16,
    textAlign: "center",
    padding: 10
  },
  deckTitle: {
    fontFamily: "RalewayBold",
    fontSize: 18,
    marginTop: 20
  },
  deckCardCount: {
    fontFamily: "Raleway",
    fontSize: 16,
    paddingTop: 10
  },
  startBtn: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#e17055",
    padding: 10,
    borderRadius: 5,
    borderColor: "#d63031"
  },
  startBtnText: {
    fontFamily: "Raleway",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  }
})

function mapStateToProps({ decks, users, authedUser }, { deckId }) {
  return {
    deck: decks[deckId],
    author: users[decks[deckId].createdBy],
    isEditable: authedUser === decks[deckId].createdBy
  }
}

export default connect(mapStateToProps)(DeckItem)
