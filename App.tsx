// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { Navigator } from './src/presentation/navigator/Navigator';
import { ThemeProvider } from './src/presentation/context/ThemeContext';


// el useContext puede ser llamado desde el AppNavigation 
// se separo para el children tenga acceso al AppTheme


export const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  )
}