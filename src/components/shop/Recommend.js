import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// TODO: test data
import recommendData from "../../data/recommend";

export default class Recommend extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          source={{ uri: "https://dummyimage.com/300x200/Fad3ff/fff" }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: "100%",
    height: 200,
    marginTop: 5
  }
});
