import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Timer from './components/Timer';
import reducer from './components/Timer/reducer';


const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

const styles = StyleSheet.create({});
