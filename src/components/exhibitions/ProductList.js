import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default class ProductList extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>ProductList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  scrollView: {}
});
