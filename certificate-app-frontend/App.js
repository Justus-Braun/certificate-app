import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { OpenCamera } from './classes/Camera.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.otherContainer}>
        <Button
        title="Camera"
        onPress={() => navigation.navigate('Camera')
        }>
        </Button>
      </View>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'certificate-app', headerTitleStyle: { alignSelf: 'center' }}}/>
        <Stack.Screen name="Camera" component={OpenCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

var styles = StyleSheet.create({

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