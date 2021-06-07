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
  preViewPic: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  CameraPreviewStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

const [previewVisible, setPreviewVisible] = useState(false)
const [capturedImage, setCapturedImage] = useState<any>(null)

export function OpenCamera2() {
    return {
        <Camera 
          style={styles.cameraStyle}
          ref={
            (r) => {camera = r}
          }
        >  
          
          <View style={styles.preViewPic}>
            takePicButton();
          </View>
    
        </Camera>
    }
}

const function takePicButton() {
  return (
    <View style={styles.takeViewUp}
      <View style={styles.takeViewButton}
        <TouchableOpacity
            onPress={__takePicture}
            style={styles}
        />
      </View>
    </View>
  )
}

const __takePicture = async () => {
  if (!camera) {
    return 
  }
  
  const photo = await camera.takePictureAsync();
  console.log(photo);
  setPreviewVisible(true);
  setCapturedImage(photo);
  
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

const CameraPreview = ({photo}: any) => {
  console.log('sdsfds', photo);
  
  return (
    <View style={styles.CameraPreviewStyle}>
      <ImageBackground 
        source={{uri: photo && photo.uri}}
        style={{
          flex: 1
        }}
      />
    </View>
  )
}
