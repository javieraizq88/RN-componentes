import { Alert, Button, StyleSheet, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView";
import { Titulo } from "../../components/ui/Titulo";
import { globalStyles } from "../../../config/theme/theme";

export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

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
        }
    });


    const showPrompt = () => {
        Alert.prompt(
            "correo electronico",
            "lorem ipsum",
            (valor: string) => console.log({ valor }),
            "secure-text",
            "valor por defecto",
            "number-pad"
        )
    }

    return (
        <CustomView style={globalStyles.globalMargin}>
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
                onPress={showPrompt} />

        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});