import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native"
import { connect } from "react-redux"
import { FontAwesome } from "@expo/vector-icons"
import DeckItem from "./DeckItem"
import { setLocalNotification } from "../utils/helper"

class DashboardScreen extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const { decks, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.hdr}>
          <Text style={styles.hdrTitle}>Decks</Text>
          <TouchableOpacity
            style={styles.createDeckBtn}
            onPress={() => navigation.navigate("AddDeck")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <FontAwesome name="plus" size={16} color="black" />
              <Text style={styles.createDeckBtnText}>Add Deck</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.listView}>
          {Object.keys(decks).length === 0 && (
            <View style={{ flex: 1 }}>
              <FontAwesome
                style={[
                  styles.createDeckBtnText,
                  { textAlign: "center", fontSize: 30, marginBottom: 10 }
                ]}
                name="warning"
                color="black"
              />
              <Text style={[styles.createDeckBtnText, { textAlign: "center" }]}>
                No Decks Found
              </Text>
            </View>
          )}
          {Object.keys(decks).length !== 0 &&
            Object.keys(decks).map(deckId => {
              return <DeckItem key={deckId} deckId={deckId} navigation={navigation} />
            })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  hdr: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingTop: 10
  },
  hdrTitle: {
    fontFamily: "RalewayBold",
    fontSize: 18
  },
  createDeckBtn: {
    width: 100
  },
  createDeckBtnText: {
    fontFamily: "RalewayBold",
    textAlign: "right",
    fontSize: 16
  },
  listView: {
    padding: 10
  }
})

function mapStateToProps({ decks, users }) {
  return {
    decks,
    users
  }
}

export default connect(mapStateToProps)(DashboardScreen)
