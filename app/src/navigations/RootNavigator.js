import { createSwitchNavigator } from "react-navigation"
import PublicNav from "./PublicNavigator"
import PrivateNav from "./PrivateNavigator"

export default createRootNav = (isSignedIn) => {
    return createSwitchNavigator(
        {
            PublicScreens: PublicNav,
            PrivateScreens: PrivateNav,
        },
        {
            initialRouteName: "PublicScreens",
        }
    )
}
