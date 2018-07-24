import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class SignInScreen extends Component {

    componentDidMount() {
        console.log("signin comp")
    }

    render() {
        console.log("signin render")
        return (
            <View style={styles.container}>
                <Text style={styles.text}>SignIn</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: "white",
        fontFamily: "Raleway",
        fontSize: 14
    }
})

export default SignInScreen