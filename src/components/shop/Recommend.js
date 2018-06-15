import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { VW } from "../../constants";
import colors from "../../styles/colors";
// import recommendData from "../../data/recommend";
import { STATIC_BASE } from "../../services";

const RECOMMEND_IMAGE_WIDTH = (VW - 2 * 15 - 15) / 2;
const RECOMMEND_IMAGE_HEIGHT = (RECOMMEND_IMAGE_WIDTH * 2) / 3;

const RecommendItem = ({ item, index, gotoShopGood }) => {
  const { PICDEFAULT, PRICE, BRIEF, MERCHANDISE_NAME } = item;
  const photo =
    PICDEFAULT === ""
      ? "https://dummyimage.com/300x200/04ccaa/fff"
      : STATIC_BASE + PICDEFAULT;
  return (
    <View
      style={[
        styles.recommendWrapper,
        { flexDirection: index % 2 === 0 ? "row" : "row-reverse" }
      ]}
    >
      <Image source={{ uri: photo }} style={styles.recommendImage} />
      <View style={styles.sloganWrapper}>
        <View style={styles.slogan}>
          <Text numberOfLines={2} style={styles.sloganText}>
            {MERCHANDISE_NAME}
          </Text>
        </View>
        <Text numberOfLines={5} style={styles.desc}>
          {BRIEF}
        </Text>
        <TouchableOpacity
          style={styles.buyWrapper}
          onPress={() => gotoShopGood(item)}
        >
          <Text style={styles.buy}>立即选购</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default class Recommend extends Component {
  render() {
    const { recommends, gotoShopGood, shop } = this.props;
    const { BANNER_URL } = shop;

    // TODO:
    const photo = BANNER_URL
      ? `${STATIC_BASE}${BANNER_URL}`
      : "https://dummyimage.com/300x200/Fad3ff/fff";
    return (
      <View style={styles.wrapper}>
        {/* <Image source={{ uri: photo }} style={styles.image} /> */}
        {/* <Image source={require("../../images/618.png")} style={styles.image} /> */}
        <ImageBackground
          style={styles.image}
          source={{ uri: photo }}
          resizeMode="cover"
          // borderRadius={5}
        >
          <Text
            style={{ fontSize: 54, fontWeight: "bold", color: colors.gray02 }}
          >
            6.18
          </Text>
          <Text
            style={{ fontSize: 48, fontWeight: "bold", color: colors.gray02 }}
          >
            年中大优惠
          </Text>
        </ImageBackground>

        <View style={styles.recommend}>
          {recommends.map((item, index) => (
            <RecommendItem
              item={item}
              index={index}
              key={item._id}
              gotoShopGood={gotoShopGood}
            />
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
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
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
