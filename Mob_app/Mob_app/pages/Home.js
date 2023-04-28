import { ScrollView, StyleSheet } from 'react-native';
import  ImgPicker  from '../components/ImagePicker';

const HomeScreen = ({ navigation }) => {

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
});

export default HomeScreen;