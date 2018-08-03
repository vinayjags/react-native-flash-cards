import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const FRONT_SIDE = "FRONT_SIDE"
const BACK_SIDE = "BACK_SIDE"

class CardItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      side: FRONT_SIDE
    }
  }

  flip() {
    this.setState(currentState => {
      return {
        side: currentState.side === FRONT_SIDE ? BACK_SIDE : FRONT_SIDE
      }
    })
  }

  render() {
    const { question, answer, onSubmitAnswer } = this.props
    const { side } = this.state

    return (
      <View style={styles.container}>
        {side === FRONT_SIDE && (
          <View style={styles.questionView}>
            <Text style={styles.question}>{question}?</Text>
            <TouchableOpacity
              onPress={() => this.flip()}
              style={styles.cardBtn}
            >
              <Text style={styles.cardBtnText}>See Answer</Text>
            </TouchableOpacity>
          </View>
        )}
        {side === BACK_SIDE && (
          <View style={styles.questionView}>
            <Text style={styles.answer}>Answer:</Text>
            <Text style={styles.question}>{answer}</Text>
            <TouchableOpacity
              onPress={() => this.flip()}
              style={styles.cardBtn}
            >
              <Text style={styles.cardBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.btnView}>
          <TouchableOpacity
            style={[styles.quizBtn, styles.correctBtn]}
            onPress={() => onSubmitAnswer(true)}
          >
            <Text style={styles.quizBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.quizBtn, styles.inCorrectBtn]}
            onPress={() => onSubmitAnswer(false)}
          >
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
  answer: {
    fontFamily: "RalewayBold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
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
  },
  cardBtn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#b2bec3",
    borderColor: "#b2bec3",
    borderWidth: 1,
    borderRadius: 5
  },
  cardBtnText: {
    fontFamily: "Raleway",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  }
})

export default CardItem
