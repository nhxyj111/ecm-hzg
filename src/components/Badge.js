import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../styles/colors";

export default class Badge extends Component {
  render() {
    const { color, bgColor, text } = this.props;
    return (
      <TouchableOpacity style={[styles.wrapper, { backgroundColor: bgColor }]}>
        <Text numberOfLines={1} style={[styles.text, { color }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 4,
    padding: 3,
    borderRadius: 2
  },
  text: {
    fontSize: 10
  }
});
