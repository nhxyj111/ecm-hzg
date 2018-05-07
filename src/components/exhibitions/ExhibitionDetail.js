import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class ExhibitionDetail extends Component {
  render() {
    return (
      <View>
        <Text>具体某个展会</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("Exhibiter");
          }}
        >
          <Text>goto 展商 Exhibiter</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
