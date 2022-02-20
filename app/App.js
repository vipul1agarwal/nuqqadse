//Navigation File
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './Navigation/StackNavigator';
import TabNavigator from './Navigation/TabNavigator';
import { StyleSheet, Text, View } from 'react-native';
const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
            {/* <DashboardStackNavigator /> */}
            {/* <TabNavigator /> */}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        },
    });

export default App;