import { Constants } from "expo"
import React from "react"
import { View, StatusBar } from "react-native"

const CustomStatusBar = ({ ...props }) => {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent {...props} />
    </View>
  )
}

export default CustomStatusBar
