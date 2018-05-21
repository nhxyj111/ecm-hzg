import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class MoreButton extends Component {
  render() {
    const { title, onPress, size, color } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { borderColor: color }]}
      >
        <Text style={[styles.buttonText, { color }]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderRadius: 2,
    borderWidth: 1
  },
  buttonText: {
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});
