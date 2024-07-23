import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102Screen } from '../screens/animations/Animation102Screen';
import { SwitchScreen } from '../screens/switches/SwitchScreen';
import { AlertScreen } from '../screens/alert/AlertScreen';
import { TextInputScreen } from '../screens/inputs/TextInputScreen';
import { PullToRefreshScreen } from '../screens/ui/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/ui/CustomSectionListScreen';
import { ModalScreen } from '../screens/ui/ModalScreen';

const Stack = createStackNavigator();

export const Navigator =() => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation1 01" component={Animation101Screen} />
      <Stack.Screen name="Animation1 02" component={Animation102Screen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="alert" component={AlertScreen} />
      <Stack.Screen name="Text Input" component={TextInputScreen} />
      <Stack.Screen name="Pull To Refresh" component={PullToRefreshScreen} />
      <Stack.Screen name="Custom Section List" component={CustomSectionListScreen} />
      <Stack.Screen name="Modal Screen" component={ModalScreen} />
      
    </Stack.Navigator>
  );
}