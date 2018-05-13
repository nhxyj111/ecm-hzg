import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import colors from "../../styles/colors";

export default class RoomHeader extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>RoomHeader</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    marginTop: 60,
    backgroundColor: "tomato"
  }
});
