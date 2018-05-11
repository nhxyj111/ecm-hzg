import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

import colors from "../styles/colors";

export default class LeftTopTag extends Component {
  render() {
    return (
      <View style={styles.tag}>
        <Text style={styles.text}>New</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    // TODO: should be customized
    width: 40,
    height: 40,
    backgroundColor: colors.pink,
    position: "absolute",
    left: -20,
    top: -20,
    zIndex: 99,
    justifyContent: "flex-end",
    alignItems: "center",
    transform: [{ rotate: "-45deg" }]
  },
  text: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.white
  }
});
