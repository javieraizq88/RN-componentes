import { Text, TextInput, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Titulo } from "../../components/ui/Titulo"
import { Card } from "../../components/ui/Card"
import { globalStyles } from "../../../config/theme/theme"
import { useState } from "react"

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    })

    return (
        <CustomView margin >
            <Titulo safe text="Text inputs" />

            <Card>
                <TextInput
                    style={globalStyles.input}
                    placeholder="Nombre"
                    autoCapitalize={"words"}
                    autoCorrect={false}
                    onChangeText={ value => setForm({ ...form, name: value }) }
                />

<TextInput
                    style={globalStyles.input}
                    placeholder="correo"
                    autoCapitalize={"none"}
                    autoCorrect={ false }
                    keyboardType="email-address"
                    onChangeText={ value => setForm({ ...form, email: value }) }
                />

<TextInput
                    style={globalStyles.input}
                    placeholder="telefono"
                    keyboardType="phone-pad"
                    onChangeText={ value => setForm({ ...form, phone: value }) }
                />
            </Card>

            <View style={{ height: 10 }} />

            <Card>
                <Text>{JSON.stringify(form, null, 2)} </Text>
            </Card>

        </CustomView>
    )
}