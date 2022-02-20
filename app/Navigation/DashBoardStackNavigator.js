import TabNavigator from "./TabNavigator";
import SearchProduct from "component/SearchProduct/SearchProduct";

export const DashboardStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Dashboard'}
            headerMode={false} >
            <Stack.Screen name="Dashboard" component={TabNavigator} />
            <Stack.Screen name="SearchProduct" component={SearchProduct} />
        </Stack.Navigator>
    );
}
