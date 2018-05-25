import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { VW } from "../../constants";
import colors from "../../styles/colors";
// import recommendData from "../../data/recommend";

const RECOMMEND_IMAGE_WIDTH = (VW - 2 * 15 - 15) / 2;
const RECOMMEND_IMAGE_HEIGHT = RECOMMEND_IMAGE_WIDTH * 2 / 3;

const RecommendItem = ({ item, index }) => (
  <View
    style={[
      styles.recommendWrapper,
      { flexDirection: index % 2 === 0 ? "row" : "row-reverse" }
    ]}
  >
    <Image
      source={{ uri: "https://dummyimage.com/300x200/04ccaa/fff" }}
      style={styles.recommendImage}
    />
    <View style={styles.sloganWrapper}>
      <View style={styles.slogan}>
        <Text numberOfLines={2} style={styles.sloganText}>
          {item.MERCHANDISE_NAME}
        </Text>
      </View>
      <Text numberOfLines={5} style={styles.desc}>
        {item.BRIEF}
      </Text>
      <TouchableOpacity style={styles.buyWrapper}>
        <Text style={styles.buy}>立即选购</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default class Recommend extends Component {
  render() {
    const { recommends } = this.props;
    return (
      <View style={styles.wrapper}>
        <Image
          source={{ uri: "https://dummyimage.com/300x200/Fad3ff/fff" }}
          style={styles.image}
        />

        <View style={styles.recommend}>
          {recommends.map((item, index) => (
            <RecommendItem item={item} index={index} key={item._id} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: "100%",
    height: 200,
    marginTop: 5
  },
  recommend: {
    paddingHorizontal: 15,
    marginTop: 10
  },
  recommendWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  recommendImage: {
    width: RECOMMEND_IMAGE_WIDTH,
    height: RECOMMEND_IMAGE_HEIGHT
  },
  sloganWrapper: {
    width: RECOMMEND_IMAGE_WIDTH,
    // height: RECOMMEND_IMAGE_HEIGHT,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  slogan: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBlack,
    // borderStyle: "dashed",
    marginBottom: 5,
    paddingBottom: 3
  },
  sloganText: {
    fontSize: 16,
    color: colors.lightBlack
  },
  desc: {
    fontSize: 12,
    color: colors.gray02
  },
  buyWrapper: {
    marginTop: 5,
    backgroundColor: colors.gray02,
    padding: 3,
    borderRadius: 5,
    alignSelf: "flex-start"
  },
  buy: {
    fontSize: 14,
    color: colors.white
  }
});
