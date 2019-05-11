import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from './components/screens/Main';
const RootStack = createStackNavigator({
  Main: MainScreen
});

export default createAppContainer(RootStack);
