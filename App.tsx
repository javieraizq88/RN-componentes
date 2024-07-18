// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Navigator } from './src/presentation/navigator/Navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}