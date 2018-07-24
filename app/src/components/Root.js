import React, { Component } from "react"
import { View, StatusBar } from "react-native"
import createRootNav from "../navigations/RootNavigator"
import { connect } from "react-redux"

class Root extends Component {
    render() {
        const { isSignedIn } = this.props
        console.log(isSignedIn)
        const Layout = createRootNav(isSignedIn);
        return (
            <Layout />
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        isSignedIn: authedUser === null ? false : true
    }
}

export default connect(mapStateToProps)(Root)