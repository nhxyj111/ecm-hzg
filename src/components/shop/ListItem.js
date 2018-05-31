import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { VW } from "../../constants";
import colors from "../../styles/colors";

const DESC_WRAPPER_WIDTH = VW / 2;

export default class ListItem extends Component {
  render() {
    const { gotoShopGood, data } = this.props;
    const { _id, MERCHANDISE_NAME, BRIEF } = data;
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => gotoShopGood(data)}
      >
        <Image
          source={{ uri: "https://dummyimage.com/300x200/04ccaa/fff" }}
          style={styles.image}
        />
        <View style={styles.right}>
          <View>
            <Text numberOfLines={2}>
              {MERCHANDISE_NAME} / {BRIEF}
            </Text>
          </View>
          <View>
            <Text style={styles.price}>￥889</Text>
            <Text style={styles.comment}>1222条评论</Text>
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
