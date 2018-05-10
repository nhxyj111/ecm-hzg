import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default class CartTableHeader extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.name}>商品</Text>
        <View style={styles.others}>
          <Text style={styles.other}>规格</Text>
          <Text style={styles.other}>数量</Text>
          <Text style={styles.other}>价格</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: colors.gray01,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.lightBlack,
    alignSelf: "flex-start",
    flex: 6
  },
  others: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 4
  },
  other: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.lightBlack
  }
});
