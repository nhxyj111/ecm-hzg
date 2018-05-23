import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import colors from "../../../styles/colors";
import { VH } from "../../../constants";
const POPOVER_HEIGHT = VH * 0.7;

export default class TagPopover extends Component {
  render() {
    const { scale } = this.props;
    return (
      <View style={[styles.wrapper, { transform: [{ scale }] }]}>
        <View style={styles.heading}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: "https://dummyimage.com/100x100/ff628c/fff" }}
              style={styles.image}
            />
          </View>
          <View>
            <Text>¥2190.00</Text>
            <Text>仅剩2件</Text>
            <Text>商品编号 : 2341567</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollview}>
          <Text>TagPopover</Text>
        </ScrollView>

        <View style={styles.addWrapper}>
          <TouchableOpacity style={styles.addToCart}>
            <Text style={styles.addText}>加入购物车</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: POPOVER_HEIGHT,
    backgroundColor: colors.white,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -40,
    zIndex: 99,
    padding: 25
  },
  heading: {
    flexDirection: "row"
  },
  imageWrapper: {
    height: 100,
    width: 100,
    borderRadius: 3,
    borderColor: colors.gray05,
    borderWidth: 1,
    overflow: "hidden",
    marginTop: -60
  },
  image: {
    width: 100,
    height: 100
  },
  scrollview: {
    flex: 1
  },
  addWrapper: {
    backgroundColor: colors.cartRed,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    alignItems: "center"
  },
  addToCart: {
    marginTop: 15
  },
  addText: {
    fontSize: 18,
    color: colors.white
  }
});
