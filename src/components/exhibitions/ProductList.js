import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  Dimensions
} from "react-native";

import { CARD_GAP, VW } from "../../constants";
import colors from "../../styles/colors";
import { STATIC_BASE } from "../../services";

const cardWithHeight = (VW - 8 * CARD_GAP) / 3;
const defaultPhoto = "https://dummyimage.com/250/9a9a78/336688";

export default class ProductList extends Component {
  get HotProducts() {
    const { products, navigation, onPress } = this.props;
    return products.map((product, index) => {
      const { IMGURL, MERCHANDISE_NAME } = product;
      const photo = IMGURL ? STATIC_BASE + IMGURL : defaultPhoto;
      return (
        <TouchableHighlight
          key={index}
          style={styles.card}
          // TODO: test
          onPress={() => onPress(product)}
        >
          <View style={styles.productWrapper}>
            <Image
              style={styles.image}
              source={{
                uri: photo
              }}
              // resizeMode="contain"
            />
            <View style={styles.desc}>
              <Text numberOfLines={1} style={styles.descText}>
                {MERCHANDISE_NAME}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.wrapper}
        // contentContainerStyle={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.HotProducts}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row"
    // alignItems: "center",
    // justifyContent: "center"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    // width: Platform.OS === "ios" ? 100 : 115, // todo
    // height: Platform.OS === "ios" ? 100 : 115, // todo
    width: cardWithHeight,
    height: cardWithHeight,
    marginRight: CARD_GAP,
    marginLeft: CARD_GAP
  },
  productWrapper: {
    position: "relative",
    flex: 1
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  desc: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "50%",

    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  descText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white
  }
});
