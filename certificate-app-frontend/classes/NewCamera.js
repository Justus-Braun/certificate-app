import {Camera} from 'expo-camera';

const styles = StyleSheet.create({
  cameraStyle: {
    flex: 1,
    width: "100%"
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

const __startCamera = async () => {
  const {status} = await Camera.requestPermissionAsync();
  
  if(status === 'granted') {
    // start the camera
    setStartCamera(true);
  }else{
    Alert.alert("Acces denied");
  }
}
