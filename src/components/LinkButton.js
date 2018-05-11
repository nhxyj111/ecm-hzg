import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

export default class UserInfo extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity
        style={[styles.wrapper, this.props.style]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.green02,
    paddingBottom: 2
  },
  text: {
    color: colors.green02,
    fontSize: 16
  }
});
