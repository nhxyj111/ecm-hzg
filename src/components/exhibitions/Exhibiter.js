import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class Exhibiter extends Component {
  render() {
    return (
      <View>
        <Text>展商信息</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("ProductDetail");
          }}
        >
          <Text>goto 某个商品</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
