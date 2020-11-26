import React from "react";
import { View, Text } from "react-native";

export default () => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        paddingStart: 9,
        paddingTop: 38,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 57,
          color: "rgba(255, 255, 255, 255)",
          marginStart: 84,
        }}
      >
        {" "}
        gliome{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Roboto",
          fontWeight: "300",
          fontSize: 30,
          letterSpacing: 0.42,
          color: "rgba(255, 255, 255, 255)",
          marginTop: 56.2,
        }}
      >
        {" "}
        Enter the Patient details to get access{" "}
      </Text>
      <View
        style={{
          alignItems: "flex-start",
          paddingStart: 16.18,
          paddingTop: 7.99,
          marginStart: 46.06,
          marginTop: 93.64,
          opacity: 0.86,
          width: 265,
          height: 40,
          borderRadius: 8,
          borderWidth: 3,
          borderColor: "rgba(255, 255, 255, 255)",
          backgroundColor: "#ffffff",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "300",
            fontSize: 20,
            letterSpacing: 0.24,
            color: "rgba(255, 255, 255, 255)",
            opacity: 0.85,
          }}
        >
          {" "}
          10 - digit Phone No.{" "}
        </Text>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          marginStart: 121,
          marginTop: 58.88,
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            paddingStart: 26.95,
            paddingTop: 9.77,
            opacity: 0.71,
            width: 115,
            height: 48,
            borderRadius: 24,
            backgroundColor: "rgba(241, 26, 66, 255)",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: "300",
              fontSize: 23,
              letterSpacing: 0.24,
              color: "rgba(255, 255, 255, 255)",
              opacity: 0.93,
            }}
          >
            {" "}
            Get OTP{" "}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: "Roboto",
          fontWeight: "300",
          fontSize: 30,
          letterSpacing: 0.42,
          textAlign: "center",
          color: "rgba(255, 255, 255, 255)",
          marginStart: 155,
          marginTop: 52.31,
        }}
      >
        {" "}
        OR{" "}
      </Text>
      <View
        style={{
          alignItems: "flex-start",
          paddingStart: 16.18,
          paddingTop: 8.16,
          marginStart: 46.06,
          marginTop: 59.82,
          opacity: 0.86,
          width: 265,
          height: 40,
          borderRadius: 8,
          borderWidth: 3,
          borderColor: "rgba(255, 255, 255, 255)",
          backgroundColor: "#ffffff",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "300",
            fontSize: 20,
            letterSpacing: 0.24,
            color: "rgba(255, 255, 255, 255)",
            opacity: 0.85,
          }}
        >
          {" "}
          Enter Health ID{" "}
        </Text>
      </View>
    </View>
  );
};
