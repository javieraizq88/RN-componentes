import { Animated, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useRef } from "react"

export const Animation101Screen = () => {

    const animatedOpacity = useRef(new Animated.Value(0.4)).current;

const fadeIn = () => {
    Animated.timing( animatedOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
    }).start( () =>console.log("animated ended"))
}

const fadeout = () => {
    Animated.timing( animatedOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    }).start( () =>console.log("animated start"))
}

    return (
        <View style={styles.container} >

            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity
                }
            ]} />



            <Pressable onPress={fadeIn } style={{ marginTop: 10 }} >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={ fadeout } style={{ marginTop: 10 }} >
                <Text>Fadeout</Text>
            </Pressable>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
})