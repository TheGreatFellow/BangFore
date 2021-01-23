import React from "react";
import { View, StyleSheet, Image, Platform, StatusBar } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailScreen() {
  let imgid =
    "https://avatars2.githubusercontent.com/u/" +
    Math.floor(Math.random() * 1000) +   
    "?s=360";
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <AppText style={styles.title}>Red Jacket for sale</AppText>
      <AppText style={styles.price}>$100</AppText>
      <ListItem
        title="The Regular Guy"
        subTitle="5 listings"
        image={{ uri: imgid }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: colors.black,
    fontSize: 19,
    margin: 10,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    marginHorizontal: 10,
    marginBottom: 30,
    fontSize: 18,
    opacity: 0.7,
    fontWeight: "bold",
  },
});
export default ListingDetailScreen;
