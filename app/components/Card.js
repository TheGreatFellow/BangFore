import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    margin: 10,
  },
  subTitle: {
    color: colors.black,
    marginHorizontal: 10,
    marginBottom: 20,
    fontSize: 17,
    opacity: 0.35,
    fontWeight: "bold",
  },
});
export default Card;
