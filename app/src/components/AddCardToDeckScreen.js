import React, { Component } from "react"
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native"
import { handleAddCard } from "../actions/shared"
import { connect } from "react-redux"

class AddCardToDeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("title")} Deck - Add Card`
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: ""
    }
  }

  addCard() {
    this.refs["question"].blur()
    this.refs["answer"].blur()
    const { question, answer } = this.state
    const { dispatch, navigation } = this.props
    const deckId = navigation.getParam("deckId")
    const title = navigation.getParam("title")

    const addCardPromise = dispatch(
      handleAddCard({
        question,
        answer,
        deckId
      })
    )

    addCardPromise.then(card => {
      if (typeof card != "undefined") {
        setTimeout(() => {
          Alert.alert(
            "Success",
            "Card Added Successfully",
            [
              {
                text: "OK",
                onPress: () =>
                  navigation.navigate("DeckDetails", {
                    deckId: deckId,
                    title: title
                  })
              }
            ],
            { cancelable: false }
          )
        }, 200)
      } else {
        setTimeout(() => {
          Alert.alert(
            "Error",
            "We are currently facing some problem. Please try again",
            [{ text: "OK", onPress: () => console.log("Ok Pressed") }],
            { cancelable: false }
          )
        }, 200)
      }
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.hdrTitle}>Please enter the card details</Text>
        <TextInput
          autoCapitalize="words"
          style={styles.titleInput}
          placeholder="Question"
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
          ref="question"
        />
        <TextInput
          autoCapitalize="words"
          style={styles.titleInput}
          placeholder="Answer"
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
          ref="answer"
        />
        <TouchableOpacity
          disabled={this.state.question === "" || this.state.answer === ""}
          style={styles.submitBtn}
          onPress={() => this.addCard()}
        >
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd34e",
    justifyContent: "center",
    alignItems: "center"
  },
  hdrTitle: {
    fontSize: 20,
    fontFamily: "RalewayBold",
    textAlign: "center"
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginTop: 10,
    backgroundColor: "white"
  },
  submitBtn: {
    width: 150,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10
  },
  submitBtnText: {
    fontFamily: "RalewayBold",
    textAlign: "center",
    color: "black"
  }
})

export default connect()(AddCardToDeckScreen)
