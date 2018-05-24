import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class NoResult extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>搜索结果为空</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
