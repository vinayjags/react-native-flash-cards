import React, { Component } from "react"
import createRootNav from "../navigations/RootNavigator"
import { connect } from "react-redux"

class Root extends Component {
  render() {
    const { isSignedIn } = this.props
    const Layout = createRootNav(isSignedIn)
    return <Layout />
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isSignedIn: authedUser === null ? false : true
  }
}

export default connect(mapStateToProps)(Root)
