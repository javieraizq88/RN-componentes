import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";

import { Titulo } from "../../components/ui/Titulo";
import { MenuItem } from "../../components/ui/MenuItem";
import { CustomView } from "../../components/ui/CustomView";


const animationMenuItems = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    }
]

export const menuItems = [
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'CustomSectionListScreen',
    },
    {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen',
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen',
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component: 'SlidesScreen',
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen',
    },
];

const uiMenuItems = [
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
    },
    {
        name: 'TextInputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen',
    },

]

export const HomeScreen = () => {
    return (
        <CustomView margin >
            <ScrollView>
                <Titulo text="prueba del texro asdadsADS" safe />
                {
                    animationMenuItems.map((item, index) => (
                        <MenuItem key={item.component} {...item}
                            esPrimero={index === 0}
                            esUltimo={index === animationMenuItems.length - 1}
                        />
                    ))
                }

                <View style={{ marginTop: 30 }} />
                {
                    menuItems.map((item, index) => (
                        <MenuItem key={item.component} {...item}
                            esPrimero={index === 0}
                            esUltimo={index === menuItems.length - 1}
                        />
                    ))
                }

                <View style={{ marginTop: 30 }} />
                {
                    uiMenuItems.map((item, index) => (
                        <MenuItem key={item.component} {...item}
                            esPrimero={index === 0}
                            esUltimo={index === uiMenuItems.length - 1}
                        />
                    ))
                }

            </ScrollView>
        </CustomView>
    )
}