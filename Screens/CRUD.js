import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const Login = () => {
  // const navigation = useNavigation();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("lastName:", lastName);
    setName("");
    setLastName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Login;
