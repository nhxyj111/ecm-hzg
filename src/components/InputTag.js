import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import colors from "../styles/colors";

export default class InputTag extends Component {
  render() {
    const { title, close } = this.props;
    return (
      <TouchableOpacity onPress={close} style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <EvilIcons name="close-o" size={18} color={colors.lightBlack} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightPink,
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 2
  },
  title: {
    color: colors.lightBlack,
    fontSize: 14,
    marginRight: 5
  }
});
