import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../../styles/colors";
import { VW } from "../../constants";

const cardWidth = (VW - 20 * 3) / 2;
const imageHeight = cardWidth / 1.5;

export default class StoreListItem extends Component {
  render() {
    const { onPress, product } = this.props;
    const { photo, desc, price } = product;

    return (
      <TouchableOpacity style={styles.wrapper} onPress={() => onPress(product)}>
        <Image source={{ uri: photo }} style={styles.image} />
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.price}>¥ {price}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: cardWidth,
    height: cardWidth,
    // backgroundColor: "lightgreen",
    marginBottom: 20,
    flexDirection: "column"
  },
  image: {
    width: cardWidth,
    height: imageHeight
  },
  descWrapper: {
    flexDirection: "row"
  },
  desc: {
    fontSize: 12,
    color: colors.lightBlack,
    marginTop: 5
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack,
    marginTop: 8
  }
});
