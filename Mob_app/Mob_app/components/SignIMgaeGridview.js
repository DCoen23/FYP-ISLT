import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: 'Access key',
  secretAccessKey: 'Seceret key',
});

const data = [
  { id: 1, imageKey: 'ISL_pic/A_isl.jpg', text: 'A' },
  { id: 2, imageKey: 'ISL_pic/B_isl.jpg', text: 'B' },
  { id: 3, imageKey: 'ISL_pic/C_isl.jpg', text: 'C' },
  { id: 4, imageKey: 'ISL_pic/D_isl.jpg', text: 'D' },
];

const getSignedUrl = async (imageKey) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'isltbucket',
    Key: imageKey,
    Expires: 60 * 5, 
  };

  try {
    const signedUrl = await s3.getSignedUrlPromise('getObject', params);
    return signedUrl;
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    return null;
  }
};

const GridItem = ({ item }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const signedUrl = await getSignedUrl(item.imageKey);
      setImageUrl(signedUrl);
    };

    fetchImage();
  }, [item.imageKey]);

  return (
    <View style={styles.item}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const GridImages = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <GridItem item={item} />}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // You can adjust the number of columns here
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 150, // You can adjust the size of the image here
    height: 150, // You can adjust the size of the image here
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GridImages;
