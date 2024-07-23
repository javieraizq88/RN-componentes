// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from './src/presentation/navigator/Navigator';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './src/presentation/context/ThemeContext';

const AppState = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NavigationContainer>
  )
}

export const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}