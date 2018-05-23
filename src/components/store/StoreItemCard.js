import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import StarRating from "react-native-star-rating";
import Swiper from "react-native-swiper";
import { Font } from "expo";

import StoreFilterHeader from "./StoreFilterHeader";

import colors from "../../styles/colors";
import { VW } from "../../constants";

const SWIPER_WIDTH = VW - 2 * 20;

export default class StoreItemCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    fontLoaded: false
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      Arial: require("../../fonts/Arial.ttf")
    });
    this.setState({ fontLoaded: true });
  };

  render() {
    const { navigation } = this.props;
    const { product } = navigation.state.params;
    const { fontLoaded } = this.state;
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
          style={{ marginTop: 15 }}
        >
          {fontLoaded && (
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
          )}
          <View style={styles.more}>
            <Text>
              详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.详细商品介绍,详细商品介绍,详细商品介绍.
            </Text>
          </View>

          <View style={styles.spec}>
            <View style={styles.specItem}>
              <View style={styles.itemWrapper}>
                <Text style={styles.itemText}>库存</Text>
                <Text style={styles.itemText}>120</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.itemText}>产品代码</Text>
                <Text style={styles.itemText}>{product.id}</Text>
              </View>
            </View>

            <View style={styles.specItem}>
              <View style={styles.itemWrapper}>
                <Text style={styles.itemText}>分享</Text>
                <Text style={styles.itemText}>120</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.itemText}>喜欢</Text>
                <Text style={styles.itemText}>120</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footerBtnGroup}>
          <TouchableOpacity
            style={styles.leftBtn}
            onPress={() => navigation.navigate("ProductFilterModal")}
          >
            <Text style={styles.leftBtnText}>选择品牌/尺码/价格等</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightBtn}>
            <Text style={styles.rightBtnText}>加入购物车</Text>
          </TouchableOpacity>
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
    height: 60,
    backgroundColor: colors.white,
    borderTopColor: colors.gray04,
    borderTopWidth: 2,
    flexDirection: "row"
  },
  leftBtn: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  leftBtnText: {
    color: colors.gray04,
    fontWeight: "600",
    fontSize: 15
  },
  rightBtn: {
    width: "50%",
    height: "100%",
    backgroundColor: colors.gray04,
    justifyContent: "center",
    alignItems: "center"
  },
  rightBtnText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 18
  },
  spec: { flexDirection: "column", marginTop: 10 },
  specItem: { flexDirection: "row", marginTop: 10 },
  itemWrapper: { flex: 1, alignSelf: "center" },
  itemText: {
    fontSize: 13,
    color: colors.lightBlack,
    alignSelf: "center",
    marginTop: 3
  }
});
