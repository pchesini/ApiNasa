import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Home from './src/views/Home/Home';

//import { } from 'react-native/Libraries/NewAppScreen';




function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
  <Home/>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default App;
