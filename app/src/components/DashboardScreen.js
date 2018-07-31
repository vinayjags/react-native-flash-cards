import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { FontAwesome } from "@expo/vector-icons"

const DashboardScreen = ({ decks, users, navigation }) => {
  return (
    <View>
      <View style={styles.hdr}>
        <Text style={styles.hdrTitle}>Decks</Text>
        <TouchableOpacity
          style={styles.createDeckBtn}
          onPress={() => navigation.navigate('AddDeck')}
        >
          <Text style={styles.createDeckBtnText}>
            <FontAwesome name="plus" style={{ marginRight: 10 }} size={16} color="black" />Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hdr: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingTop: 20
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
    textAlign: "center",
    fontSize: 16
  }
})

function mapStateToProps({ decks, users }) {
  return {
    decks,
    users
  }
}

export default connect(mapStateToProps)(DashboardScreen)
