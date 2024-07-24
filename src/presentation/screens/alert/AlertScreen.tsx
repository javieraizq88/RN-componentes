import { Alert, Button, View } from "react-native"
import prompt from 'react-native-prompt-android';

import { CustomView } from "../../components/ui/CustomView";
import { Titulo } from "../../components/ui/Titulo";
import { globalStyles } from "../../../config/theme/theme";
import { showPrompt } from "../../../config/adapters/prompt.adapter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const AlertScreen = () => {

    const { isDark } = useContext(ThemeContext);

    const createTwoButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
                userInterfaceStyle: isDark ? "dark" : "light"
            }
        );

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            },
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
        ],
            {
                cancelable: true,
                onDismiss() {
                    console.log("onDismiss")
                },
                userInterfaceStyle: isDark ? "dark" : "light"
            });

    const onShowPrompt = () => {

        showPrompt({
            title: "title",
            subtitle: "subtitle",
            buttons: [
                {
                    title: "ok",
                    onPress: () => console.log("ok"),
                }
            ],
            placeholder: "placebolder"
        })
        // codigo natiov solo valido para IOS
        // Alert.prompt(
        //     "correo electronico",
        //     "lorem ipsum",
        //     (valor: string) => console.log({ valor }),
        //     "secure-text",
        //     "valor por defecto",
        //     "number-pad"
        // )
    }

    return (
        <CustomView margin>
            <Titulo safe text="Alertas" />

            <Button
                title='alerta 2 botones'
                onPress={createTwoButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                title='alerta 3 botones'
                onPress={createThreeButtonAlert} />

            <View style={{ height: 10 }} />

            <Button
                title='menu '
                onPress={onShowPrompt} />

        </CustomView>
    )
}