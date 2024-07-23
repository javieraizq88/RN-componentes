import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, globalStyles } from "../../../config/theme/theme";
import { Text } from "react-native";

interface Props {
    text: string,
    safe?: boolean,
    backgroundColor: string,
}

export const Subtitulo = ({ text, safe = false, backgroundColor = colors.buttonTextColor }: Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor
        }}>
            {text}
        </Text>
    )
}