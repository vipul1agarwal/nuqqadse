import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuItem from './MenuItem';

const menuItems = [
    { id: 1, title: 'My Store', color: '#4da327' },
    { id: 2, title: 'My Orders', color: '#eca43e' },
    { id: 3, title: 'My Customers', color: '#ec3d6b' },
    { id: 4, title: 'My Analytics', color: '#2596be' },
]

export default function Menu() {
    return (
        <View style={styles.menu}>
            {menuItems.map(item => 
            <MenuItem key={item.id} 
                title={item.title} 
                style = {StyleSheet.create({ colorCoding: {
                    backgroundColor: item.color }})}
                // style={{ color: { backgroundColor: item.color } }} 
            />)}
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
