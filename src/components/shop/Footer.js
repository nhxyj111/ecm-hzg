import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";

export default class Footer extends Component {
  render() {
    const { gotoShopCard } = this.props;
    const { togglePopover } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.info} onPress={gotoShopCard}>
          <Text style={styles.infoText}>店铺详情</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={togglePopover}>
          <Ionicons
            name="ios-menu-outline"
            size={20}
            color={colors.gray02}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>商品分类</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supplier}>
          <Ionicons
            name="ios-megaphone-outline"
            size={20}
            color={colors.tlBlue}
          />
          <Text style={styles.supplierText}>联系供应商</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    overflow: "visible"
  },
  info: {
    justifyContent: "center",
    alignItems: "center"
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    marginVertical: 20,
    borderLeftColor: colors.gray06,
    borderRightColor: colors.gray06,
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  supplier: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  infoText: {
    fontSize: 16,
    color: colors.lightBlack
  },
  categoryText: {
    fontSize: 16,
    color: colors.lightBlack,
    marginLeft: 5,
    marginRight: 20
  },
  categoryIcon: {
    marginLeft: 20
  },
  supplierText: {
    fontSize: 16,
    color: colors.lightBlack,
    marginLeft: 5
  }
});
