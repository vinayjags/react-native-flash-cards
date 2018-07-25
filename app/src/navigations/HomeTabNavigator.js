import React from "react"
import { createBottomTabNavigator } from "react-navigation"
import DashboardScreen from "../components/DashboardScreen"
import LeaderboardScreen from "../components/LeaderboardScreen"
import { FontAwesome } from "@expo/vector-icons"

export default createBottomTabNavigator(
    {
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: {
                tabbarLabel: "Dashboard",
                tabBarIcon: ((tintColor) =>
                    <FontAwesome name="dashboard" size={30} activeColor="black" color={tintColor.tintColor} />
                )
            }
        },
        Leaderboard: {
            screen: LeaderboardScreen,
            navigationOptions: {
                tabbarLabel: "Leaderboard",
                tabBarIcon: ((tintColor) => <FontAwesome name="trophy" size={30} color={tintColor.tintColor} />)
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "black",
            style: {
                height: 56,
                backgroundColor: 'white',
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    }
)