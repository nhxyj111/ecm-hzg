import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";
import Swiper from "react-native-swiper";

import StoreFilterHeader from "./StoreFilterHeader";

import colors from "../../styles/colors";
import { VW } from "../../constants";

const SWIPER_WIDTH = VW - 2 * 20;

export default class StoreItemCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigation } = this.props;
    const { product } = navigation.state.params;
    return (
      <View style={styles.wrapper}>
        <StoreFilterHeader showBackIcon={true} navigation={navigation} />

        <View style={styles.heading}>
          <View style={styles.headingLeft}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.desc}>{product.desc}</Text>
          </View>
          <View style={styles.headingRight}>
            <Text style={styles.price}>¥ {product.price}</Text>
          </View>
        </View>
        <View style={styles.rate}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={product.rate}
            // selectedStar={rating => this.onStarRatingPress(rating)}
            starSize={12}
            fullStarColor={colors.starYellow}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <Swiper
            style={styles.swiper}
            horizontal={true}
            showsButtons={true}
            loop={true}
            removeClippedSubviews={false}
          >
            <View style={styles.slide2}>
              <Text>Beautiful</Text>
            </View>
            <View style={styles.slide1}>
              <Text>Hello Swiper</Text>
            </View>

            <View style={styles.slide3}>
              <Text>And simple</Text>
            </View>
          </Swiper>
          <View style={styles.more}>
            <Text>
              详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.footerBtnGroup}>
          <Text>test for now</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  heading: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "tomato"
    marginBottom: 15
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack
  },
  desc: {
    fontSize: 12,
    color: colors.lightBlack
  },
  rate: {
    marginBottom: 15
  },
  headingRight: {
    alignSelf: "flex-end",
    marginLeft: 0,
    flexDirection: "column"
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack,
    alignSelf: "flex-end"
  },
  rate: {
    width: 80
  },
  swiper: {
    marginTop: 10,
    width: SWIPER_WIDTH,
    height: SWIPER_WIDTH
  },
  slide1: {
    width: SWIPER_WIDTH,
    height: SWIPER_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    width: SWIPER_WIDTH,
    height: SWIPER_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    width: SWIPER_WIDTH,
    height: SWIPER_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  more: {
    marginTop: 20
  },
  footerBtnGroup: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "tomato"
  }
});
