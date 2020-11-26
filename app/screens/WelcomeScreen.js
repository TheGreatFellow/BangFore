import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sup Ma Niggas</Text>
      </View>
      <AppButton title="Login" />
      <AppButton title="Register" color="secondary" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingTop: 20,
  },
});

export default WelcomeScreen;
