import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "70%",
    height: 2,
    backgroundColor: colors.light,
    alignSelf: "center",
  },
});
export default ListItemSeparator;
