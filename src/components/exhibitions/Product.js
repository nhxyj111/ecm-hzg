import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import colors from "../../styles/colors";
import { CARD_GAP, VW } from "../../constants";
import { STATIC_BASE } from "../../services";

const cardWithHeight = (VW - 20 * 4) / 3;
const defaultPhoto = "https://dummyimage.com/250/9a9a78/336688";

export default class Product extends Component {
  render() {
    const { item } = this.props;
    const { IMGURL, MERCHANDISE_NAME } = item;
    const photo = IMGURL !== "" ? STATIC_BASE + IMGURL : defaultPhoto;
    return (
      <TouchableOpacity style={styles.wrapper}>
        <ImageBackground
          style={styles.bgImag}
          source={{ uri: photo }}
          resizeMode="cover"
          // borderRadius={3}
        />
        <View style={styles.name}>
          <Text style={styles.nameText}>{MERCHANDISE_NAME}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 0,
    position: "relative",
    marginBottom: 15
  },
  bgImag: {
    height: cardWithHeight,
    width: cardWithHeight
  },

  name: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "50%",

    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white
  }
});
