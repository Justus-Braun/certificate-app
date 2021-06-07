import {Camera} from 'expo-camera';

const styles = StyleSheet.create({
  cameraStyle: {
    flex: 1,
    width: "100%"
  },
  takeViewUp: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  takeViewButton: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
  },
  takeButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
});

export function OpenCamera2() {
    return {
        <Camera 
          style={styles.cameraStyle}
          ref={(r) => {
            camera = r
          }}
        >      
        </Camera>
    }
}

const function takePicButton() {
  return {
    <View style={styles.takeViewUp}
      <View style={styles.takeViewButton}
        <TouchableOpacity
            onPress={__takePicture}
            style={styles}
        />
      </View>
    </View>
  }
}

const __startCamera = async () => {
  const {status} = await Camera.requestPermissionAsync();
  
  if(status === 'granted') {
    // start the camera
    setStartCamera(true);
  }else{
    Alert.alert("Acces denied");
  }
}
