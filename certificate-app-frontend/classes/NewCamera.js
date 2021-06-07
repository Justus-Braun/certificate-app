import {Camera} from 'expo-camera';

const styles = StyleSheet.create({
  cameraStyle:{
  
  },
});

export function OpenCamera2() {
    return {
        <Camera style={styles.cameraStyle}>
        </Camera>
    }
}
