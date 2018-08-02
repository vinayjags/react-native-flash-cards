import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { connect } from "react-redux"
import CardItem from "./CardItem"
import { roundUp } from "../utils/api"
import { FontAwesome } from "@expo/vector-icons"
import { handleSaveUserScore } from "../actions/shared"
import { clearLocalNotification, setLocalNotification } from "../utils/helper"

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

    resetQuiz() {
        this.setState({
            currentQuestion: 0,
            correctAnswer: 0
        })
    }

    saveScore() {
        const { totalQuestions, correctAnswer } = this.state
        const { dispatch, authedUser, deck } = this.props
        const score = roundUp((correctAnswer / totalQuestions) * 100)
        const scoreObj = {
            score,
            userId: authedUser,
            deckId: deck.id
        }

        const saveScorePromise = dispatch(handleSaveUserScore(scoreObj))

        saveScorePromise.then(scoreInfo => {
            if (typeof scoreInfo !== "undefined") {
                clearLocalNotification().then(setLocalNotification)
                setTimeout(() => {
                    Alert.alert(
                        "Success",
                        "Score Saved Successfully",
                        [
                            {
                                text: "OK",
                                onPress: () => this.props.navigation.navigate("DeckDetails", {
                                    deckId: deck.id,
                                    title: deck.title
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

        const { currentQuestion, totalQuestions, correctAnswer } = this.state
        const { deck } = this.props

        if (currentQuestion < totalQuestions) {
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
        } else {

            const score = roundUp((correctAnswer / totalQuestions) * 100)

            return (
                <View style={styles.resultContainer}>
                    <FontAwesome name="thumbs-up" size={100} color="#00b894" />
                    <Text style={styles.quizCompletionText}>You have completed the quiz</Text>
                    <Text style={styles.scoreText}>Your score is:</Text>
                    <Text style={styles.score}>{score}</Text>
                    <TouchableOpacity style={styles.resetBtn} onPress={() => this.resetQuiz()}>
                        <Text style={styles.btnText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveBtn} onPress={() => this.saveScore()}>
                        <Text style={styles.btnText}>Save & Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd34e",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    resultContainer: {
        flex: 1,
        backgroundColor: "#ffd34e",
        justifyContent: "center",
        alignItems: "center"
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
    },
    quizCompletionText: {
        fontFamily: "RalewayBold",
        marginTop: 10
    },
    scoreText: {
        fontFamily: "RalewayBold",
        fontSize: 16,
        marginTop: 10
    },
    score: {
        fontFamily: "RalewayBold",
        fontSize: 30,
        marginTop: 5
    },
    resetBtn: {
        width: "80%",
        padding: 10,
        backgroundColor: "#636e72",
        borderColor: "#2d3436",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10
    },
    saveBtn: {
        width: "80%",
        padding: 10,
        backgroundColor: "#00cec9",
        borderColor: "#00b894",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Raleway"
    }
})

function mapStateToProps({ decks, authedUser }, { navigation }) {
    return {
        deck: decks[navigation.getParam('deckId')],
        authedUser
    }
}

export default connect(mapStateToProps)(QuizScreen)