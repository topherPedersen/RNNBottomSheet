import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>RNNBottomSheet</Text>
      </SafeAreaView>
    );
  }
}

export default App;