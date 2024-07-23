import { Titulo } from '../../components/ui/Titulo';
import { CustomView } from '../../components/ui/CustomView';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { globalStyles } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {

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
                    refreshing={ isRefresing }
                    progressViewOffset={ top }
                    colors={["red", "orange", "green"]}
                    onRefresh = { onRefresh }
                />}
                style={[ globalStyles.mainContainer, globalStyles.globalMargin]}
                >
       
                <Titulo safe text='Pull to refresh' />
        
        </ScrollView>

    )
}
