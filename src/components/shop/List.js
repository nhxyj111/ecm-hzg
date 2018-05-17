import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class List extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text> List </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center"
  }
});
