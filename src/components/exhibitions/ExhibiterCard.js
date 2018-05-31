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
const defaultPhoto = "https://dummyimage.com/100x100/FF6347/fff";

export default class ExhibiterCard extends Component {
  render() {
    const { exhibiter } = this.props;
    const { SHOP_NAME, LOGO_URL } = exhibiter;
    const photo = LOGO_URL ? STATIC_BASE + LOGO_URL : defaultPhoto;
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this.props.onPress}>
        <ImageBackground
          style={styles.bgImag}
          source={{ uri: photo }}
          resizeMode="cover"
          borderRadius={3}
        />
        <Text style={styles.exhibiterName}>{SHOP_NAME}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 0
  },
  bgImag: {
    height: cardWithHeight,
    width: cardWithHeight,
    borderWidth: 2,
    borderColor: colors.gray05,
    borderRadius: 2
  },
  exhibiterName: {
    fontSize: 16,
    color: colors.gray04,
    paddingTop: 10,
    paddingBottom: 15,
    textAlign: "center",
    width: cardWithHeight
  }
});
