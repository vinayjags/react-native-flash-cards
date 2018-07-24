import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class HomeScreen extends Component {
    componentDidMount() {
        console.log("Home")
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd34e",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 25
    }
})

export default HomeScreen