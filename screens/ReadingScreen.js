import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";

export default function ReadingScreen() {
  return (
    <View>
      <Header
        style={{ borderWidth: 5, margin: 5 }}
        backgroundColor="white"
        centerComponent={{
          text: "Read a Story",
          style: { fontSize: 25 },
        }}
      />
    </View>
  );
}
