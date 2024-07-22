import { View } from "react-native"
import prompt from "react-native-prompt-android";

interface Options {
    title: string,
    subtitle?: string,
    buttons: PromptButton[],
    promptType?: 'plain-text' | 'secure-text',
    placeholder?: string,
    defaultValue?: string 
}

interface PromptButton {
    title: string,
    onPress: () => void,
    style?: "cancel" | "default" | "destructive",
}



export const showPrompt = ({ title, subtitle, buttons, promptType = "plain-text", placeholder, defaultValue }: Options) => {
    prompt(
        title, 
        // 'Enter password',
        subtitle, 
        // 'Enter your password to claim your $1.5B in lottery winnings',
        buttons,
        // [
        //     { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        //     { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
        // ],
        {
            type: "plain-text",
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );
}