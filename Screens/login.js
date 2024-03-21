import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonComp from "../Components/ButtonComp";
import LoginPage from "../assets/LoginImage.jpg";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={LoginPage}
          style={styles.imgStyles}
        >
          <Text style={styles.loginTextStyles}>Login</Text>
        </ImageBackground>
        <View style={styles.mainStyles}>
          <View style={styles.inputContainer}>
            <Text style={styles.LabelText}>username</Text>
            <TextInput placeholder="Enter username" style={styles.TextInput}/>
          </View>
          <View>
            <Text style={styles.LabelText}>password</Text>
            <TextInput placeholder="Enter password" secureTextEntry={true} style={styles.TextInput}/>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.forgetView}>
            <Text style={styles.forgetText}>Forget Password ?</Text>
          </TouchableOpacity>
          <ButtonComp
            btnText={"login"}
            onPress={() => alert("Login Success")}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text>Not a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between"
    },
    imgStyles : {
        width : "100%",
        height : 200,
        justifyContent:"center",
        alignItems : "center"
    },
    loginTextStyles : {
        fontSize : 32,
        color:"#fff",
        fontWeight : "bold",
    },
    inputStyles : {
        borderBottomWidth : 1,
        borderBottomColor : "rgba(0,0,0,.8)",
        borderRadius : 4
    },
    mainStyles : {
        paddingHorizontal : 24,
        paddingTop : 44,
    },
    forgetView : {
        alignSelf : 'flex-end', 
        marginVertical:24
    },
    forgetText : {
        fontSize: 16,
        color : "#89D6CE",
        fontWeight : "400"
    },
    bottomView : {
        flexDirection:"row", 
        alignItems:"center", 
        marginBottom : 40,
        justifyContent:"center"
    },
    TextInput : {
        borderBottomWidth : 1,
        borderBottomColor : "rgba(0,0,0,.5)",
        borderRadius : 4,
        marginBottom : 10
    },
    LabelText : {
        fontSize : 14,
        color : "rgba(0,0,0,.5)",
        textTransform : "capitalize",
        marginBottom : 5
    },
    inputContainer : {
        marginBottom : 15
    }
});

export default Home;
