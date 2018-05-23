import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../../styles/colors";

export default class NavTabbar extends Component {
  render() {
    const { selectedTab, onSelect } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.borderBottom]}
          onPress={() => onSelect(1)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 1 && { fontWeight: "bold" }
            ]}
          >
            商品
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.borderBottom]}
          onPress={() => onSelect(2)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 2 && { fontWeight: "bold" }
            ]}
          >
            详情
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 3 && styles.borderBottom]}
          onPress={() => onSelect(3)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 3 && { fontWeight: "bold" }
            ]}
          >
            评价
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "50%"
    // marginBottom: 10
  },
  tab: {
    marginTop: 20
  },
  tabText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: colors.lightBlack,
    paddingBottom: 10
  },
  borderBottom: {
    borderBottomColor: colors.lightBlack,
    borderBottomWidth: 2
  }
});
