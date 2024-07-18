import { Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../../../config/theme/theme";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

interface Props {
    name: string,
    icon: string,
    component: string,


    esPrimero?: boolean,
    esUltimo?: boolean
}

export const MenuItem = ({ name, icon, component, esPrimero = false, esUltimo = false}: Props) => {

    const navigation = useNavigation<any>();

    return (
        <Pressable
            onPress={ () => navigation.navigate(component) }
        >
            <View
                style={{
                    ...style.container,
                    backgroundColor: colors.cardBackground,
                    ...(esPrimero && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
                    ...(esUltimo && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),
                }}>
                <Icon name={icon} size={25} style={{ marginRight: 10 }} color={colors.primary} />
                <Text style={{ color: colors.text }}>{name} </Text>
                <Icon name="chevron-forward-outline" size={25} style={{ marginLeft: "auto" }} color={colors.primary} />
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
})