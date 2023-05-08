import React, { useState } from 'react';
import {  View,  Button,  Image,  Text,  StyleSheet,  Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

const { cacheDirectory } = FileSystem;
const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();
  const [predictedLabel, setPredictedLabel] = useState('');

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );

    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'OK' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
  
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
  
    if (!image.cancelled) {
      const label = await predict(image.uri);
      setPredictedLabel(label);
      setPickedImage(image.uri);
    }
  };  

  const predict = async (imageUri) => {
    const resizedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 300, height: 300 } }],
      { format: ImageManipulator.SaveFormat.JPEG, compress: 1, base64: true }
    );
  
    const base64Content = resizedImage.base64;
  
    const imagePayload = {
      data: base64Content,
    };
  
    try {
      const response = await fetch('http://192.168.1.9:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imagePayload),
      });
  
      if (!response.ok) {
        console.error(`Server responded with status ${response.status}`);
        const text = await response.text();
        console.error(`Server response: ${text}`);
        return null;
      }
  
      const result = await response.json();
      console.log(result);
      return result.label;
    } catch (error) {
      console.error("Error in predict function: ", error);
      return null;
    }
  };
  

  return (
    <View style={styles.imagePicker}>
      <View style={styles.predictionContainer}>
        <Text style={styles.predictionText}>
          Predicted label: {predictedLabel}
        </Text>
      </View>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title="Take Image" color="#444" onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  predictionContainer: {
    marginBottom: 20,
  },
  predictionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});


export default ImgPicker;