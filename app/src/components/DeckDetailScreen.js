import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { connect } from "react-redux"
import { getImagePath } from "../utils/api"

class DeckDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('title')} Deck`
        }
    }

    render() {
        const { deck, author, isEditable, navigation } = this.props
        const { navigate } = navigation
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{deck.title} Deck</Text>
                <Image style={styles.authorImage} source={getImagePath(author.avatarURL)} />
                <Text style={styles.author}>Created By {author.name}</Text>
                <Text style={styles.deckCardCount}>No. of Cards: {deck.cards.length}</Text>
                {isEditable === true && (
                    <TouchableOpacity style={styles.editBtn} onPress={() => navigate("AddCard", {
                        deckId: deck.id,
                        title: deck.title
                    })}>
                        <Text style={styles.btnText}>Add Card</Text>
                    </TouchableOpacity>
                )}
                {deck.cards.length !== 0 && (
                    <TouchableOpacity style={styles.startBtn} onPress={() => navigate("Quiz", {
                        deckId: deck.id,
                        title: deck.title
                    })}>
                        <Text style={styles.btnText}>Start Quiz</Text>
                    </TouchableOpacity>
                )}
                {deck.cards.length === 0 && (
                    <Text style={styles.noCardsText}>You cannot play this deck since there are no cards in this deck</Text>
                )}
            </View >
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
    deckTitle: {
        fontFamily: "RalewayBold",
        fontSize: 20,
    },
    deckCardCount: {
        fontFamily: "Raleway",
        fontSize: 16,
        marginTop: 10
    },
    author: {
        fontFamily: "Raleway",
        fontSize: 16,
        marginTop: 10
    },
    authorImage: {
        width: 100,
        height: 100
    },
    editBtn: {
        backgroundColor: "#74b9ff",
        borderColor: "#0984e3",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        width: "90%",
        marginLeft: "5%"
    },
    startBtn: {
        backgroundColor: "#a29bfe",
        borderColor: "#6c5ce7",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        width: "90%",
        marginLeft: "5%"
    },
    btnText: {
        fontFamily: "Raleway",
        textAlign: "center",
        color: "white",
        fontSize: 16
    },
    noCardsText: {
        fontFamily: "RalewayBold",
        fontSize: 22,
        color: "#d63031",
        marginTop: 10,
        textAlign: "center"
    }
})

function mapStateToProps({ decks, users, authedUser }, { navigation }) {
    const deckId = navigation.getParam('deckId')
    return {
        deck: decks[deckId],
        author: users[decks[deckId].createdBy],
        isEditable: authedUser === decks[deckId].createdBy
    }
}

export default connect(mapStateToProps)(DeckDetailScreen)