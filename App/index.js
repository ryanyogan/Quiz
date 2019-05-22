import { createAppContainer, createStackNavigator } from "react-navigation";
import Quiz from "./screens/Quiz";
import QuizIndex from "./screens/QuizIndex";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title")
    })
  }
});

export default createAppContainer(MainStack);
