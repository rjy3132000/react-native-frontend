import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome to Add Notes</Text>
      <View>
        <Text>Enter First Name</Text>
        <TextInput placeholder="Enter First Name" />
      </View>
      <View>
        <Text>Enter Second Name</Text>
        <TextInput placeholder="Enter Second Name" />
      </View>

      {/* <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      /> */}
    </View>
  );
};

export default Login;
