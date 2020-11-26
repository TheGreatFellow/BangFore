import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// @ts-ignore
import { NeuView } from "react-native-neu-element";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import Component0 from "./Component0";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return (
    <NeuView
      color="#eef2f9"
      height={100}
      width={100}
      borderRadius={16}
    ></NeuView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef2f9",
  },
});
