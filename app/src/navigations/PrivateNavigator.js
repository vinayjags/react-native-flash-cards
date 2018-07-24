import HomeScreen from "../components/HomeScreen"
import { createStackNavigator } from "react-navigation"

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        }
    },
    {
        initialRouteName: "Home",
    }
)