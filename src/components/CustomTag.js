import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

import colors from "../styles/colors";

export default class CustomTag extends Component {
  render() {
    const { gbColor, color, size, textSize, position, title } = this.props;
    let wrapperCustomStyles = {
      width: size,
      height: size,
      backgroundColor: gbColor
    };
    let textCustomStyles = {
      fontSize: textSize,
      color
    };
    if (position === "right-bottom") {
      wrapperCustomStyles = {
        ...wrapperCustomStyles,
        right: -(size / 2),
        bottom: -(size / 2),
        justifyContent: "flex-start",
        transform: [{ rotate: "-45deg" }]
      };
    } else {
      wrapperCustomStyles = {
        ...wrapperCustomStyles,
        left: -(size / 2),
        top: -(size / 2),
        justifyContent: "flex-end",
        transform: [{ rotate: "-45deg" }]
      };
    }

    return (
      <View style={[styles.tag, wrapperCustomStyles]}>
        <Text style={[styles.text, textCustomStyles]}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    // TODO: should be customized
    // width: 40,
    // height: 40,
    // backgroundColor: colors.gray01,
    position: "absolute",
    // right: 0,
    // bottom: 0,
    zIndex: 99,
    // justifyContent: "flex-start",
    alignItems: "center"
    // transform: [{ rotate: "-45deg" }]
  },
  text: {
    // fontSize: 10,
    fontWeight: "600",
    paddingTop: 2
    // color: colors.white
  }
});
