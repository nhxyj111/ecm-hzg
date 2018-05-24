import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>数据加载中</Text>
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
