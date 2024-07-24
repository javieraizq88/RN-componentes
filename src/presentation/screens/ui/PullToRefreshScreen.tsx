import { Titulo } from '../../components/ui/Titulo';
import { CustomView } from '../../components/ui/CustomView';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {

    const { colors } = useContext(ThemeContext);

    const [isRefresing, setIsRefresing] = useState(false);

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefresing(true);

        setTimeout(() => {
            setIsRefresing(false);
        }, 2000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefresing}
                    progressViewOffset={top}
                    colors={["red", "orange", "green"]}
                    progressBackgroundColor={colors.cardBackground}
                    tintColor={colors.primary}
                    onRefresh={onRefresh}
                />}
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >

            <Titulo safe text='Pull to refresh' />

        </ScrollView>

    )
}
