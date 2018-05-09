import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import colors from "../../styles/colors";
import { CARD_GAP, VW } from "../../constants";

const cardWithHeight = (VW - 20 * 4) / 3;

export default class ExhibiterCard extends Component {
  render() {
    const { name, photo } = this.props;
    return (
      <View style={styles.wrapper}>
        <ImageBackground
          style={styles.bgImag}
          source={{ uri: photo }}
          resizeMode="cover"
          borderRadius={3}
        />
        <Text style={styles.exhibiterName}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 0
  },
  bgImag: {
    height: cardWithHeight,
    width: cardWithHeight
  },
  exhibiterName: {
    fontSize: 16,
    color: colors.gray04,
    paddingTop: 10,
    paddingBottom: 15,
    textAlign: "center"
  }
});
