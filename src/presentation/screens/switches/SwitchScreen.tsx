import { Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card"
import { Button } from "../../components/ui/Button"

export const SwitchScreen = () => {
    return (
        <CustomView style={{ margin: 100 }}>
            <Card>
                {/* <Text>SwitchScreen</Text> */}

                <Button
                    text="click"
                    onPress={() => { }}
                />
            </Card>
        </CustomView>
    )
}