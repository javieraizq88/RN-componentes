import { Animated, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation"

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTop } = useAnimation();

    return (
        <View style={styles.container} >

            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]
                }
            ]} />

            <Pressable onPress={() => {
                fadeIn({}),
                    startMovingTop({
                        initialPosition: -100,
                        duration: 600,
                    })
            }} style={{ marginTop: 10 }} >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }} >
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