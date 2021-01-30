import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// @ts-ignore
import MessagesScreen from "./app/screens/MessagesScreen";
let x = 1;
export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef2f9",
  },
});
