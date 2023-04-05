import { ScrollView, StyleSheet } from 'react-native';
import { ImgPicker } from './ImagePicker';

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
