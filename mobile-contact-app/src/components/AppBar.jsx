import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contact App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5D8AA8',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AppBar;