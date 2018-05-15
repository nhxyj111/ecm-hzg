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

const cardWithHeight = (VW - 8 * CARD_GAP) / 3;

export default class ProductList extends Component {
  get HotExhibitions() {
    const { exhibitions, navigation, onPress } = this.props;
    return exhibitions.map((ehb, index) => (
      <TouchableHighlight
        key={index}
        style={styles.card}
        // TODO: test
        onPress={onPress}
      >
        <Image
          style={styles.image}
          source={{ uri: ehb.photo }}
          // resizeMode="contain"
        />
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <ScrollView
        style={styles.wrapper}
        // contentContainerStyle={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.HotExhibitions}
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
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
