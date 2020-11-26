import React from "react";
import { View, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
  title: {
    fontWeight: "bold",

    fontSize: 16,
  },
  detailContainer: {
    marginLeft: 13,
    justifyContent: "center",
  },
});

export default ListItem;
