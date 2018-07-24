import SignInScreen from "../components/SignInScreen"
import { createStackNavigator } from "react-navigation"

export default createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    }
  },
  {
    initialRouteName: "SignIn"
  }
)
