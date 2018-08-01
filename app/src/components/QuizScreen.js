import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import CardItem from "./CardItem"

class QuizScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('title')} Deck - Quiz`
        }
    }

    constructor(props) {
        super(props)
        const { deck } = props
        this.state = {
            currentQuestion: 0,
            correctAnswer: 0,
            totalQuestions: deck.cards.length
        }
    }

    submitAnswer(isCorrect) {
        this.setState(currentState => {
            return {
                correctAnswer: currentState.correctAnswer + (isCorrect === true ? 1 : 0),
                currentQuestion: currentState.currentQuestion + 1
            }
        })
    }

    render() {

        const { currentQuestion, totalQuestions } = this.state
        const { deck } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.hdr}>
                    <Text style={styles.hdrTitle}>{currentQuestion + 1} / {totalQuestions}</Text>
                </View>
                <View style={styles.quizItem}>
                    <CardItem
                        question={deck.cards[currentQuestion].question}
                        answer={deck.cards[currentQuestion].answer}
                        onSubmitAnswer={(answerIsCorrect) => this.submitAnswer(answerIsCorrect)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd34e",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    hdr: {
        height: 50,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        paddingTop: 10,
        width: "100%"
    },
    hdrTitle: {
        fontFamily: "RalewayBold",
        fontSize: 18
    },
    quizItem: {
        width: "100%"
    }
})

function mapStateToProps({ decks }, { navigation }) {
    return {
        deck: decks[navigation.getParam('deckId')]
    }
}

export default connect(mapStateToProps)(QuizScreen)