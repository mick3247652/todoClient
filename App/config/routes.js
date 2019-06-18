import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import ToDo from "../screens/ToDo";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  ToDo: {
    screen: ToDo,
//    navigationOptions: ({ navigation }) => ({
 //     headerTitle: navigation.state.params.title
 //   })
  }

},{
  headerMode: 'screen',
});

const rootStack = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    mode: "modal",
    headerMode: 'none'
  }
);

const App = createAppContainer(rootStack);

export default App;
