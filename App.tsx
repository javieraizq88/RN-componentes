// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Navigator } from './src/presentation/navigator/Navigator';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './src/presentation/context/ThemeContext';


// el useContext puede ser llamado desde el AppNavigation 
// se separo para el children tenga acceso al AppTheme

const AppNavigation = ({ children }: PropsWithChildren) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={ isDark ? DarkTheme : DefaultTheme }>
      {children}
    </NavigationContainer>
  )
}

const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>
        {children}
      </AppNavigation>
    </ThemeProvider>
  )
}

export const App = () => {
  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
  )
}