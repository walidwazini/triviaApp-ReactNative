import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Home from "./components/Home";
import Question from "./components/Question";
import Score from "./components/Score"
import About from "./components/About";


const screens = {
    HomeScreen: {
        screen: Home,
    },
    Question: {
        screen: Question,
    },
    Score: {
        screen:Score,
    },
    About: {
        screen: About,
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)