import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return <StartGameScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
