import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import colors from "../../../styles/colors";

export default class CountButtonGroup extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() =>
            this.setState(prevState => ({
              count: prevState.count < 2 ? 1 : prevState.count - 1
            }))
          }
          style={styles.button}
        >
          <Feather name="minus" size={16} color={colors.lightBlack} />
        </TouchableOpacity>

        <View style={styles.countWrapper}>
          <Text>{this.state.count}</Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))
          }
          style={styles.button}
        >
          <Feather name="plus" size={16} color={colors.lightBlack} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: colors.gray02,
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: "row"
  },
  countWrapper: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: colors.gray02,
    borderLeftWidth: 1,
    borderRightColor: colors.gray02,
    borderRightWidth: 1
  },
  count: {
    textAlign: "center",
    fontSize: 20,
    color: colors.lightBlack
  },
  button: {
    padding: 4
  }
});
