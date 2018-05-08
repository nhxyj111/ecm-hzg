import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";

export default class RoundedButton extends Component {
  render() {
    const { text, textColor, background, handleOnPress, icon } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || colors.black;
    return (
      <TouchableOpacity
        style={[styles.wrapper, { backgroundColor }]}
        onPress={handleOnPress}
        activeOpacity={0.7}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[styles.buttonText, { color }]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  },
  buttonTextWrapper: {
    display: "flex",
    flexDirection: "row"
  }
});
