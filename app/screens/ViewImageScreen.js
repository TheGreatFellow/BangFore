import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcons}>
        <MaterialCommunityIcons name="close" size={35} color={colors.primary} />
      </View>
      <View style={styles.deleteIcons}>
        <MaterialCommunityIcons
          name="delete"
          size={35}
          color={colors.secondary}
        />
      </View>
      <Image
        style={styles.imgcon}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  closeIcons: {
    position: "absolute",
    // backgroundColor: colors.primary,
    top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    left: 10,
  },
  deleteIcons: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    // backgroundColor: colors.secondary,
    right: 15,
  },
  imgcon: {
    width: "100%",
    height: "100%",
    bottom: -20,
  },
});

export default ViewImageScreen;
