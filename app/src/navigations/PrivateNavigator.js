import HomeScreen from "../components/HomeScreen"
import AddDeckScreen from "../components/AddDeckScreen"
import DeckDetailScreen from "../components/DeckDetailScreen"
import AddCardToDeckScreen from "../components/AddCardToDeckScreen"
import { createStackNavigator } from "react-navigation"
import { Platform } from "react-native"

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
    },
    DeckDetails: {
      screen: DeckDetailScreen
    },
    AddCard: {
      screen: AddCardToDeckScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "#000",
      headerTitleStyle: {
        marginLeft: Platform.OS !== "ios" ? 50 : 0
      }
    }
  }
)
