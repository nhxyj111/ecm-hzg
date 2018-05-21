import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../styles/colors";

export default class ShopSearch extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text> ShopSearch </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {}
});
