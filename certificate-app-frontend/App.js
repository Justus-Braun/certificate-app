import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
// import { OpenCamera3 } from './classes/CameraFinal.js';
import { OpenCamera } from './classes/Camera.js';
import { OpenHistory } from './classes/History.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {



  return (
    <View style={styles.container}>
      <View style={styles.otherContainer}>
        <CameraFanc />
        <HistoryFanc />
      </View>
    </View>
  )
}

const CameraFanc = () => {
  // Take Picture
  const navToCamera = () => navigation.navigate('Camera');

  return (
      <TouchableOpacity onPress={navToCamera} style={styles.buttonStyle}>
        <Text style={styles.TextStyle}>Take picture</Text>
      </TouchableOpacity>
  );
}

const HistoryFanc = () => {
  // History
  const navToHisory = () => navigation.navigate('History');

  return (
      <TouchableOpacity onPress={navToHisory} style={styles.buttonStyle}>
        <Text style={styles.TextStyle}>See History</Text>
      </TouchableOpacity>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'certificate-app', headerTitleStyle: { alignSelf: 'center' }}}/>
        <Stack.Screen name="Camera" component={OpenCamera} />
        <Stack.Screen name="History" component={OpenHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Export StyleSheet in single files

var styles = StyleSheet.create({
  buttonStyle: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  TextStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 0,
    width: 200,
  },
  marginTop: {
    width: 200,
    height: 80,
  },
  otherContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  button: {

  },
});
