import { useState } from "react"
import { Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView";
import { Titulo } from "../../components/ui/Titulo";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../../config/theme/theme";

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        // TODO: agrega numeros al arreglo
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 2000);
    };

    return (
        <CustomView margin>
            <Titulo safe text="Infinite scroll" />

            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                keyExtractor={(item) => item.toString()}

                renderItem={({ item }) => (
                    <Text style={{
                        height: 300,
                        backgroundColor: colors.primary,
                        color: "white",
                        fontSize: 30

                    }} >
                        {item}
                    </Text>
                )}
            />
        </CustomView>
    )
}