// import ImagePicker from 'react-native-image-picker';
// import ImageResizer from 'react-native-image-resizer';

// export const pickImage = async () => {
//   const options = {
//     // ... your options for the image picker
//   };

//   ImagePicker.showImagePicker(options, async (response) => {
//     if (response.didCancel) {
//       // Handle cancellation
//     } else if (response.error) {
//       // Handle error
//     } else {
//       const resizedImage = await ImageResizer.createResizedImage(
//         response.uri,
//         300,
//         300,
//         'JPEG',
//         100,
//         0,
//         null,
//         true
//       );

//       const imageData = await fetch(resizedImage.uri);
//       const imageBlob = await imageData.blob();
//       const arrayBuffer = await new Response(imageBlob).arrayBuffer();
//       const uint8Array = new Uint8Array(arrayBuffer);

//       // Convert to grayscale and flatten the array
//       const grayImageData = [];
//       for (let i = 0; i < uint8Array.length; i += 4) {
//         const gray = 0.299 * uint8Array[i] + 0.587 * uint8Array[i + 1] + 0.114 * uint8Array[i + 2];
//         grayImageData.push(gray);
//       }

//       // Now you can send the grayImageData to your server
//       const result = await predict(grayImageData);
//     }
//   });
// };