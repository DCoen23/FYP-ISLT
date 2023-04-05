import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const data = [
  {
    id: 1,
    image: require('../assets/Rock.jpg'),
    text: 'Rock',
  },
  {
    id: 2,
    image: require('../assets/Paper.jpg'),
    text: 'Paper',
  },
  {
    id: 3,
    image: require('../assets/scissors.jpg'),
    text: 'scissors',
  },
  // Add more image/text data as needed
];

const GridImages = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
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