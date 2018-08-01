import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert
} from "react-native"
import { handleAddDeck } from "../actions/shared"
import { connect } from "react-redux"

class AddDeckScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    createDeck() {
        if (this.state.title === "") {
            return
        }
        this.refs["title"].blur()
        const { dispatch } = this.props
        const addDeckPromise = dispatch(
            handleAddDeck({
                title: this.state.title,
                user: this.props.authedUser
            })
        )

        addDeckPromise
            .then(deck => {
                if (typeof deck !== "undefined") {
                    setTimeout(() => {
                        Alert.alert(
                            "Success",
                            "Deck Created Successfully",
                            [
                                {
                                    text: "OK",
                                    onPress: () => this.props.navigation.navigate("Home")
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
                <Text style={styles.hdrTitle}>Please enter the title of the deck</Text>
                <TextInput
                    autoCapitalize="words"
                    style={styles.titleInput}
                    placeholder="Deck Title"
                    value={this.state.title}
                    onChangeText={title => this.setState({ title })}
                    ref="title"
                />
                <TouchableOpacity
                    disabled={this.state.title === ""}
                    style={styles.submitBtn}
                    onPress={() => this.createDeck()}
                >
                    <Text style={styles.submitBtnText}>Create Deck</Text>
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

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddDeckScreen)
