import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { OpenCamera3 } from './classes/CameraFinal.js';
import { OpenHistory } from './classes/History.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.otherContainer}>
        
        // Take Picture
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera')}
          style={styles.buttonStyle}
        >
          <Text style={styles.Text}>
              Take picture
          </Text>
        </TouchableOpacity>

        // Take Picture
        <TouchableOpacity
            onPress={() => navigation.navigate('Camera New')}
            style={styles.buttonStyle}
        >
          <Text style={styles.Text}>
            Take picture New
          </Text>
        </TouchableOpacity>

        // History
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.buttonStyle}
        >
          <Text style={styles.Text}>
              See History
          </Text>
        </TouchableOpacity>

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
        <Stack.Screen name="CameraNew" component={OpenCamera3} />
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
  Text: {
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
