import { Modal, Platform, StyleSheet, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Titulo } from "../../components/ui/Titulo"
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <CustomView>
            <Titulo safe text="Modal" />


            <Button
                text="Abrir modal"
                onPress={() => setModalVisible(true)}
            />

            {/* visible={modalVisible} -> oculta el modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.1)"
                }} >
                    <View style={{ marginHorizontal: 10 }} >
                        <Titulo safe text="Modal Content" />
                    </View>

                    <View style={{ flex: 1 }} />

                    <Button
                        text="Cerrar modal"
                        onPress={() => setModalVisible(false)}
                        style={{
                            height: Platform.OS === "android" ? 40 : 60,
                            borderRadius: 0,
                        }}
                    >

                    </Button>
                </View>
            </Modal>
        </CustomView>
    )
}

