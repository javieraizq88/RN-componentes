import { useContext, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import { FadeInImage } from "../../components/ui/FadeInImage";
import { ThemeContext } from "../../context/ThemeContext";

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        // TODO: agrega numeros al arreglo
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 2000);
    };
    const { colors } = useContext (ThemeContext); 
    
    return (
        <View style={{ backgroundColor: "black" }} >
            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                keyExtractor={(item) => item.toString()}

                renderItem={({ item }) =>
                    <ListItem number={item} />
                }
                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: "center" }} >
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

interface PropsListItem {
    number: number
}
export const ListItem = ({ number }: PropsListItem) => {

    return (
        <FadeInImage
            uri={`https://picsum.photos/id/${number}/500/400`}
            style={{
                height: 400,
                width: "100%"
            }}
        />
        // <Image
        //     source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
        //     style={{
        //         height: 400,
        //         width: "100%"
        //     }}
        // />
    )
}