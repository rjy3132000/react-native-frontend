import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Login to Home SCreen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Home;
