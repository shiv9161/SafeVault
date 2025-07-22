import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Login from './src/Screens/Auth/Login';
import Router from './src/Navigation/Router';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar barStyle={'dark-content'} />
        <Router />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
