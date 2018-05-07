import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Cart extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "购物车"
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>购物车</Text>
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
