import React, { Component, Fragment } from "react"
import createRootNav from "../navigations/RootNavigator"
import { connect } from "react-redux"
import Loader from "../shared/loader"

class Root extends Component {
  constructor(props) {
    super(props)
    this.layout = null
    this.isSignedIn = false
  }
  render() {
    const { isSignedIn, loader } = this.props
    if (this.layout === null || this.isSignedIn !== isSignedIn) {
      this.layout = createRootNav(isSignedIn)
      this.isSignedIn = isSignedIn
    }
    return (
      <Fragment>
        <this.layout />
        <Loader loading={loader.status} message={loader.message} />
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, loader }) {
  return {
    isSignedIn: authedUser === null ? false : true,
    loader
  }
}

export default connect(mapStateToProps)(Root)
