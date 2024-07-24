import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { useAnimation } from "../../hooks/useAnimation"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CustomView } from "../../components/ui/CustomView";
import { Button } from "../../components/ui/Button";

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTop } = useAnimation();
    const { colors } = useContext(ThemeContext);

    return (
        <CustomView style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    backgroundColor: colors.primary
                },
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]
                }
            ]} />

            <Button onPress={() => {
                fadeIn({}),
                    startMovingTop({
                        initialPosition: -100,
                        duration: 600,
                    })
            }} style={{ marginTop: 10 }}
                text="FadeIn" />

            <Button onPress={() => fadeOut({})}
                style={{ marginTop: 10 }}
                text="Fadeout" />
        </CustomView>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    purpleBox: {
        width: 150,
        height: 150
    }
})