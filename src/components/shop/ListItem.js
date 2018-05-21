import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { VW } from "../../constants";
import colors from "../../styles/colors";

const DESC_WRAPPER_WIDTH = VW / 2;

export default class ListItem extends Component {
  render() {
    const { id, isHot, desc, photo, price, comment } = this.props.data;
    return (
      <TouchableOpacity style={styles.wrapper}>
        <Image source={{ uri: photo }} style={styles.image} />
        <View style={styles.right}>
          <View>
            <Text numberOfLines={2}>{desc}</Text>
          </View>
          <View>
            <Text style={styles.price}>￥{price}</Text>
            <Text style={styles.comment}>{comment}条评论</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    //  height: 200,
    paddingVertical: 8,
    paddingHorizontal: 5
  },
  image: {
    width: 150,
    height: 100,
    marginRight: 5
  },
  right: {
    width: DESC_WRAPPER_WIDTH,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.pink
  },
  comment: {
    fontSize: 12,
    color: colors.gray02
  }
});
