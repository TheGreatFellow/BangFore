import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef2f9",
  },
});
