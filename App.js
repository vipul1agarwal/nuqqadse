import { View } from 'react-native';
import RISetup from './app/RISetup'
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <RISetup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});