import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default class MessageHeader extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.heading}>广东惠州农产品展览(200/800)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    marginBottom: 15
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.lightBlack,
    textAlign: "center"
  }
});
