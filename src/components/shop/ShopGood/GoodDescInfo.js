import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import colors from "../../../styles/colors";
import { VW } from "../../../constants";

const IMAGE_WIDTH = VW - 2 * 10;
const IMAGE_HEIGHT = IMAGE_WIDTH * 2 / 3;

const images = [
  "https://dummyimage.com/300x200/ff628c/fff",
  "https://dummyimage.com/300x200/82d8d8/fff",
  "https://dummyimage.com/300x200/CF256D/fff",
  "https://dummyimage.com/300x200/5f9e9e/fff",
  "https://dummyimage.com/300x200/243E51/fff",
  "https://dummyimage.com/300x200/3C9F4A/fff",
  "https://dummyimage.com/300x200/04ccaa/fff",
  "https://dummyimage.com/300x200/337caa/fff",
  "https://dummyimage.com/300x200/d280a0/fff",
  "https://dummyimage.com/300x200/bcb0e0/fff",
  "https://dummyimage.com/300x200/ff628c/fff",
  "https://dummyimage.com/300x200/ffee80/fff"
];

export default class GoodDescInfo extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <View style={styles.line} />
          <Text style={styles.headText}>商品信息</Text>
          <View style={styles.line} />
        </View>

        {images.map((image, index) => (
          <Image key={index} style={styles.image} source={{ uri: image }} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  heading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  headText: {
    fontSize: 13,
    color: colors.gray02,
    marginHorizontal: 15
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray05
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT
  }
});
