import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";

import colors from "../../../styles/colors";

export default class FooterBar extends Component {
  render() {
    const { gotoShop } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.tabWrapper}>
            <Foundation name="torso-business" size={24} color={colors.gray02} />
            <Text style={styles.text}>供应商</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabWrapper} onPress={gotoShop}>
            <Entypo name="shop" size={24} color={colors.gray02} />
            <Text style={styles.text}>店铺</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabWrapper}>
            <Entypo name="shopping-cart" size={24} color={colors.gray02} />
            <Text style={styles.text}>购物车</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <TouchableOpacity style={styles.addWrapper}>
            <Text style={styles.addButton}>加入购物车</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    borderTopColor: colors.gray06,
    borderTopWidth: 1
  },
  text: {
    fontSize: 12,
    color: colors.lightBlack,
    marginTop: 5,
    paddingBottom: 10
  },
  left: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  tabWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    flex: 2,
    backgroundColor: colors.cartRed
  },
  addWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  addButton: {
    fontSize: 18,
    color: colors.white
  }
});
