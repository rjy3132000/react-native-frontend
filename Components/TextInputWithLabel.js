//import liraries
import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";

// create a component
const TextInputWithLabel = ({
  Label,
  placeHolder,
  onChnageText = () => {},
  inputStyles = {},
  rightIcon,
  onPressRight,
  ...props
}) => {
  return (
    <View style={{...styles.inputStyles, ...inputStyles}}>
      <Text style={styles.labelTextStyles}>{Label}</Text>
      <View style={styles.flexView}>
        <TextInput
            placeholder={placeHolder}
            style={styles.inlineStyles}
            {...props}
        />
        {
            !!rightIcon ?
            <TouchableOpacity 
                activeOpacity={.8}
                onPress={onPressRight}
            >
                <Image style={{tintColor:"rgba(0,0,0,.5)"}} source={rightIcon} />
            </TouchableOpacity>
            : null
        }
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    inputStyles : {
        borderBottomWidth : 1,
        borderBottomColor : "rgba(0,0,0,.5)",
        borderRadius : 4
    },
    inlineStyles : {
        paddingVertical: 8,
        fontSize : 16,
        color : "rgba(0,0,0,.5)",
        flex:1
    },
    labelTextStyles : {
        fontSize : 14,
        color : "rgba(0,0,0,.5)"
    },
    flexView : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems : "center"
    }
});

export default TextInputWithLabel;
