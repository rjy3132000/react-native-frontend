//import liraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

// create a component
const Login = () => {
    const navigate = NavigationContainer()
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='Home Page' onPress={() => navigate.navigation("Home")} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Login;