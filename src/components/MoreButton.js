import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../styles/colors";

export default class MoreButton extends Component {
  render() {
    const { title, onPress, size, color, disabled } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          { borderColor: color },
          disabled && { borderColor: colors.gray03 }
        ]}
        disabled={disabled}
      >
        <Text
          style={[
            styles.buttonText,
            { color },
            disabled && { color: colors.gray03 }
          ]}
        >
          {disabled ? "加载中..." : title}
        </Text>
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
