import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../styles/colors";

export default class UserInfo extends Component {
  render() {
    const { title } = this.props;
    return (
      <TouchableOpacity style={[styles.wrapper, this.props.style]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5
  },
  text: {
    color: colors.lightBlack,
    fontSize: 16
  }
});
