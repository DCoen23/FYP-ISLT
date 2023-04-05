import { Button, ScrollView, StyleSheet, Pressable, Text } from 'react-native';
import { ImgPicker } from './ImagePicker';
import {useState} from 'react'
import { fetchItems} from './sql'

const HomeScreen = ({ navigation }) => {
    const [itemfetch, setitemfetch] = useState([]);

    async function handleFetchItem(){
        const dbResult = await fetchItems();
        console.log(dbResult)
        setitemfetch(JSON.stringify(dbResult));
        console.log(itemfetch);
    }

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <ImgPicker />
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    button: {
    height: 60,
    paddingHorizontal: 20,
    flex: 1, 
    width: '100%'
    },
    allButton: {
    backgroundColor: '#007bff',
    borderWidth: 1,
    },
    text: {
    color: 'black',
    },
    addButton: {
    backgroundColor: '#28a745',
    //borderWidth: 1,
    borderColor: '#28a745',
    },
    specButton: {
    backgroundColor: '#dc3545',
    borderWidth: 1,
    borderColor: '#dc3545',
    },
    updateButton: {
    backgroundColor: '#6c757d',
    borderWidth: 1,
    borderColor: '#6c757d',
    },
});

export default HomeScreen;
