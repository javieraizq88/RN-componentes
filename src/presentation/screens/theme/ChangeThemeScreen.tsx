import { Text, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Titulo } from '../../components/ui/Titulo';

export const ChangeThemeScreen = () => {

  const { setTheme, currentTheme, colors } = useContext( ThemeContext );

  return (
    <CustomView margin>
      <Titulo text={`Cambiar tema: ${ currentTheme }`} safe />

      <Button 
        text="Light"
        onPress={() => setTheme('light')}
      />

      <View style={{ height: 10 }} />

      <Button 
        text="Dark"
        onPress={() => setTheme('dark')}
      />
      
      <View style={{ height: 10 }} />

      <Text style={{ color: colors.text }}>
        { JSON.stringify( colors, null, 2 ) }
      </Text>

    </CustomView>
  )
}