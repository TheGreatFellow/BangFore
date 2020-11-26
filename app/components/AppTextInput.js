import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={30} />}
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
