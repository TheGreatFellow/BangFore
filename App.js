import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// @ts-ignore
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import Component0 from "./Component0";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
let x = 1;
export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef2f9",
  },
});
