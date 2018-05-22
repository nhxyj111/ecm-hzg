import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Popover extends Component {
  render() {
    const {
      color,
      bgColor,
      size,
      borderColor,
      categories,
      position,
      width,
      dividerColor
    } = this.props;

    const flag = categories.length - 1;

    return (
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: bgColor,
            borderColor,
            width,
            ...position,
            transform: [{ translateX: -(width / 2) }]
          }
        ]}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              {
                width: "80%",
                paddingVertical: 8,
                justifyContent: "center",
                alignItems: "center"
              },
              flag !== index && {
                borderBottomColor: dividerColor,
                borderBottomWidth: 1
              }
            ]}
          >
            <Text style={{ color, fontSize: size }}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <View style={[styles.arrow, { borderTopColor: borderColor }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    borderColor: "red",
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 1,
    alignItems: "center"
  },
  arrow: {
    width: 10,
    height: 10,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -10,
    borderWidth: 5,
    borderColor: "transparent"
  }
});
