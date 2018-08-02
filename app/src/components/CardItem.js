import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

class CardItem extends Component {
  render() {
    const { question, answer, onSubmitAnswer } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.questionView}>
          <Text style={styles.question}>{question}?</Text>
          <TouchableOpacity>
            <Text>See Answer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={[styles.quizBtn, styles.correctBtn]}>
            <Text style={styles.quizBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.quizBtn, styles.inCorrectBtn]}>
            <Text style={styles.quizBtnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "95%"
  },
  questionView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  question: {
    fontFamily: "RalewayBold",
    fontSize: 22,
    textAlign: "center"
  },
  btnView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  quizBtn: {
    marginBottom: 10,
    width: "80%",
    padding: 10
  },
  quizBtnText: {
    fontFamily: "RalewayBold",
    textAlign: "center",
    color: "white"
  },
  correctBtn: {
    backgroundColor: "#55efc4",
    borderColor: "#00b894",
    borderWidth: 1,
    borderRadius: 5
  },
  inCorrectBtn: {
    backgroundColor: "#ff7675",
    borderColor: "#d63031",
    borderWidth: 1,
    borderRadius: 5
  }
})

export default CardItem
