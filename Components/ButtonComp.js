//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const ButtonComp = ({
    btnText,
    btnStyle = {},
    onPress = () => {},
}) => {
    return (
        <TouchableOpacity style={{...styles.btnStyle, ...btnStyle}}
        activeOpacity={.8}
        onPress={onPress}>
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height : 48,
        backgroundColor : "#89D6CE",
        borderRadius:4,
        alignItems : "center",
        justifyContent : "center"
    },
    btnTextStyle : {
        fontSize : 12,
        color : "#ffffff",
        fontWeight : "bold",
        textTransform : "uppercase"
    }
});

//make this component available to the app
export default ButtonComp;