import Notification from "component/Notification/Notification";
import Profile from "component/Profile/Profile";

const NotificationStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Notification'}
            headerMode={false} >
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Profile'}
            headerMode={false} >
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
export { NotificationStackNavigator, ProfileStackNavigator };