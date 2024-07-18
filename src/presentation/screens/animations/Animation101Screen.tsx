import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useRef } from "react"

export const Animation101Screen = () => {

    const animatedOpacity = useRef(new Animated.Value(0.4)).current;
    const animatedTop = useRef(new Animated.Value(-100)).current;


    const fadeIn = () => {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log("animated ended"));

        Animated.timing(animatedTop, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.poly(1),
        }).start(() => console.log("animated ended"));
    };

    const fadeOut = () => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => animatedTop.resetAnimation());
    }

    return (
        <View style={styles.container} >

            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform:  [{
                        translateY: animatedTop
                    }]
                }
            ]} />



            <Pressable onPress={fadeIn} style={{ marginTop: 10 }} >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={fadeOut} style={{ marginTop: 10 }} >
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