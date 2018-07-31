import React, { Component } from "react"
import { StyleSheet, View, Modal, ActivityIndicator, Text } from "react-native"

const Loader = props => {
  const { loading, message, ...attributes } = props
  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={loading}
      onRequestClose={() => {
        console.log("close modal")
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} />
          <Text style={styles.message}>
            {message === "" ? "Loading. Please wait..." : message}
          </Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 150,
    width: 150,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  message: {
    fontFamily: "Raleway",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5
  }
})

export default Loader
