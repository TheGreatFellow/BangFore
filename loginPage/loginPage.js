import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Image as ReactImage } from "react-native";

function LoginPage() {
  return (
    <ScrollView
      data-layer="40c22536-c06f-4fcf-9628-08798dfed82c"
      style={styles.loginPage}
    >
      {/* <ReactImage
        data-layer="bede9f64-7218-48f6-812d-393cbe7cba3d"
        source={require("./assets/pngtree25dHealthMedicalDoctors4115608.png")}
        style={styles.loginPage_pngtree25dHealthMedicalDoctors4115608}
      /> */}
      <Text
        data-layer="01e843dc-9cef-4cdd-8934-4f707161f3a3"
        style={styles.loginPage_welcome}
      >
        Welcome!
      </Text>
      <View style={styles.loginPage_enterThePatientDetailsToGetAccess}>
        <Text
          data-layer="14361a5c-c569-4edf-bd11-432344127416"
          style={{
            marginTop: -0.5,
            color: "rgba(255, 255, 255, 1)",
            fontSize: 30,
            fontWeight: "300",
            fontStyle: "normal",
            fontFamily: "Roboto",
            textAlign: "left",
            lineHeight: 33,
          }}
        >
          Enter the Patient details to get access
        </Text>
      </View>
      <View style={styles.loginPage_or}>
        <Text
          data-layer="fe4b47f7-ca0f-4381-a361-b43be033572d"
          style={{
            marginTop: -1.5,
            color: "rgba(255, 255, 255, 1)",
            fontSize: 30,
            fontWeight: "300",
            fontStyle: "normal",
            fontFamily: "Roboto",
            textAlign: "center",
            lineHeight: 33,
          }}
        >
          OR
        </Text>
      </View>
      <Text
        data-layer="76d3812f-727c-40b7-b617-9664645e78e1"
        style={styles.loginPage_x10DigitPhoneNo}
      >
        10-digit Phone No.
      </Text>
      <Text
        data-layer="34fe98d1-f11a-4033-8cf2-30a2307afe39"
        style={styles.loginPage_enterHealthId}
      >
        Enter Health ID
      </Text>
      <View
        data-layer="a643aefd-c570-4b67-98d7-6b9e1b2c3bbd"
        style={styles.loginPage_rectangle2}
      ></View>
      <Text
        data-layer="d9cf5111-c4f1-4f61-88ca-9ea5368dd159"
        style={styles.loginPage_getOtp}
      >
        Get OTP
      </Text>
      <View
        data-layer="53ac681c-74e5-4e71-aa93-2d2404117420"
        style={styles.loginPage_rectangle3}
      ></View>
      <View
        data-layer="4dad1d0e-4923-48f6-b3bc-49490a87ae1f"
        style={styles.loginPage_rectangle4}
      ></View>
      <View style={styles.loginPage_x98a7a2c4}>
        <Text
          data-layer="21d721e8-f57f-478f-91cc-32717d26e96d"
          style={{
            marginTop: -2.5,
            color: "rgba(255, 255, 255, 1)",
            fontSize: 34,
            fontWeight: "300",
            fontStyle: "normal",
            fontFamily: "Roboto",
            textAlign: "left",
            lineHeight: 37.400000000000006,
          }}
        >
          :
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginPage: {
    opacity: 1,
    position: "relative",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 414,
    height: 736,
    left: 0,
    top: 0,
  },
  loginPage_pngtree25dHealthMedicalDoctors4115608: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 1440,
    height: 810,
    left: -168,
    top: -6,
  },
  loginPage_welcome: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 50,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 222,
    height: 73,
    left: 96,
    top: 38,
  },
  loginPage_enterThePatientDetailsToGetAccess: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "left",
    lineHeight: 33,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 243,
    height: 105,
    left: 22,
    top: 179,
  },
  loginPage_or: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "center",
    lineHeight: 33,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 47,
    height: 36,
    left: 184,
    top: 520,
  },
  loginPage_x10DigitPhoneNo: {
    opacity: 0.8100000023841858,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 142,
    height: 23,
    left: 89,
    top: 383,
  },
  loginPage_enterHealthId: {
    opacity: 0.8199999928474426,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 142,
    height: 23,
    left: 89,
    top: 592,
  },
  loginPage_rectangle2: {
    opacity: 0.7099999785423279,
    position: "absolute",
    backgroundColor: "rgba(241, 26, 66, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: 115,
    height: 48,
    left: 150,
    top: 441,
  },
  loginPage_getOtp: {
    opacity: 0.9300000071525574,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 62,
    height: 29,
    left: 177,
    top: 451,
  },
  loginPage_rectangle3: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 3,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 3,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 3,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 3,
    borderLeftColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: 265,
    height: 40,
    left: 80,
    top: 374,
  },
  loginPage_rectangle4: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 3,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 3,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 3,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 3,
    borderLeftColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: 265,
    height: 40,
    left: 80,
    top: 583,
  },
  loginPage_x98a7a2c4: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "left",
    lineHeight: 37.400000000000006,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 5,
    height: 40,
    left: 102,
    top: 239.5,
  },
});

export default LoginPage;
