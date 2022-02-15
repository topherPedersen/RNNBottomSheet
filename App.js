import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

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

/*
 * Must wrap application entry point with gestureHandlerRootHOC
 * https://docs.swmansion.com/react-native-gesture-handler/docs/#installation
 */
const AppContainer = gestureHandlerRootHOC(() => (<App />));

export default AppContainer;