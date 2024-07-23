import { Switch, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card"
import { useState } from "react"
import { CustomSwitch } from "../../components/ui/CustomSwitch"
import { Separator } from "../../components/ui/Separator"

export const SwitchScreen = () => {

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: true,
        opcion1: false,
        opcion2: true
    })

    return (
        <CustomView style={{ margin: 100 }}>
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => useState({ ...state, isActive: value })}
                    text="is Active"
                />
                <Separator />
                <CustomSwitch
                    isOn={state.opcion1}
                    onChange={(value) => useState({ ...state, opcion1: value })}
                    text="opcion 1"
                />
                <Separator />
                <CustomSwitch
                    isOn={state.opcion2}
                    onChange={(value) => useState({ ...state, opcion2: value })}
                    text="opcion 2"
                />
                {/* <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                /> */}
            </Card>
        </CustomView>
    )
}