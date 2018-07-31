import HomeScreen from "../components/HomeScreen"
import AddDeckScreen from "../components/AddDeckScreen"
import { createStackNavigator } from "react-navigation"

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AddDeck: {
      screen: AddDeckScreen,
      navigationOptions: {
        headerTitle: "Add Deck"
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "#000"
    }
  }
)
