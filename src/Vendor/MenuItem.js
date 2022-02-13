import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function MenuItem(props) {
  const { title, style} = props
  return (
    <View style = {styles.MenuItem}>
        <View style = {[styles.inner, style.colorCoding]}>
            <Text style = {styles.text}>{title}</Text>
        </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  MenuItem: {
    width: '50%',
    height: '50%',
    padding: 5,
    color: '#fff',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#eee'
  },
  text: {
    color: '#fff',
    fontSize: 24,
  }
});
