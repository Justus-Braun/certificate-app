import 'react-native-gesture-handler';
import React from 'react';
import { View, Button } from 'react-native';

import { OpenCamera } from './classes/Camera.js';
import { CameraField, HistoryField, ImageView , SettingsField } from "./layout/HomeScreenLayout.js";
import { OpenHistory } from "./layout/HistoryScreenLayout.js";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
      <View style={{alignItems: 'center',paddingBottom: 20, width:'100%', height: 780}}>
        <CameraField onPressFunc={navigation.navigate('Camera')}  />
        <HistoryField />
        <SettingsField />
      </View>

      /*

      <View style={homeStyles.container}>
        <View style={homeStyles.otherContainer}>
          <Button
              title="Camera"
              onPress={() => navigation.navigate('Camera')
              }>
          </Button>
        </View>
      </View>
      */

  )
}

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Certificate-app', headerTitleStyle: { alignSelf: 'center' }}}/>
        <Stack.Screen name="Camera" component={OpenCamera} />
        <Stack.Screen name="History" component={OpenHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

