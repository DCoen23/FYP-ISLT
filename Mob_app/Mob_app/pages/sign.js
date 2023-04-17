import { StyleSheet, View } from 'react-native';
import React from 'react';
import GridImages from '../components/SignIMgaeGridview'

const SignScreen = ({ navigation }) => {
    return (
    <View contentContainerStyle={styles.container}>
        <GridImages/>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },      
});

export default SignScreen;
