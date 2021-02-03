import React from "react";
import { TouchableNativeFeedback, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <View style={[styles.buttonContainer]}>
      <TouchableNativeFeedback
        onPress={onPress}
        // background={TouchableNativeFeedback.Ripple("")}
      >
        <View style={[styles.button, { backgroundColor: colors[color] }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
  },
  buttonContainer: {
    borderRadius: 25,
    width: "100%",
    height: 48,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
    overflow: "hidden", //this is important for the ripple not to flow.
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
