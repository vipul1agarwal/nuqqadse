import { View } from 'react-native';
import RISetup from './app/RISetup'
import { StyleSheet } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/Redux/Reducers'
export default function App() {
  return (
    <View style={styles.container}>
      <ReduxProvider store={store}>
        <RISetup />
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});