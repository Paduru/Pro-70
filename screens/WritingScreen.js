import React from "react";
import { View, TextInput, Platform, StatusBar, Image } from "react-native";
import { Header } from "react-native-elements";

export default function WritingScreen() {
  return (
    <View>
      <Header
        backgroundColor="black"
        centerComponent={{
          text: "Write a Story",
          style: { color: "white", fontSize: 25 },
        }}
      />
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder="Title of story"
          style={{ width: 300, fontSize: 15, borderWidth: 2, marginTop: 10 }}
        />
        <TextInput
          placeholder="Author of story"
          style={{ width: 300, fontSize: 15, borderWidth: 2, marginTop: 10 }}
        />
        <TextInput
          placeholder="Write the story"
          multiline={true}
          style={{
            width: 300,
            fontSize: 15,
            borderWidth: 2,
            height: 350,
            marginTop: 10,
          }}
        />
        <Image
          source={require("../assets/write.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
}
