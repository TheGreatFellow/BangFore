import React from "react";
import { TouchableNativeFeedback, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.button, { backgroundColor: colors[color] }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    margin: 10,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "monospace",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
