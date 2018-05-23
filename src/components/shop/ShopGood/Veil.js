import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Veil extends Component {
  render() {
    return <View style={styles.wrapper} />;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    transform: [{ scale: 2 }],
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 98
  }
});
