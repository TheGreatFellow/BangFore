import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

//Another way to use different styles for diff platforms

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 28,
        fontFamily: "Avenir",
        color: "tomato",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
        // color: "blue",
      },
    }),
  },
});
export default AppText;
