import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

import { VW } from "../../../constants";
import colors from "../../../styles/colors";

const IMAGE_WIDTH = VW - 2 * 15;

export default class GoodMain extends Component {
  render() {
    const { toggleTagPopover, product } = this.props;
    const {
      MERCHANDISE_ID,
      SHOP_ID,
      MERCHANDISE_NAME,
      BRIEF,
      RECOMMENDED
    } = product;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://dummyimage.com/300x200/82d8d8/fff" }}
            style={styles.image}
          />
        </View>
        <View style={styles.desc}>
          <View style={styles.left}>
            {/* not work for android (android: Text can not contain View) <View style={styles.tagWrapper}>
                <Text style={styles.tag}>推荐</Text>
              </View>{" "} */}
            <Text style={styles.info} numberOfLines={3}>
              {MERCHANDISE_NAME} / {BRIEF}
            </Text>
          </View>
          <TouchableOpacity style={styles.right}>
            <FontAwesome name="heart-o" size={20} color={colors.gray02} />
            <Text style={styles.likes}>关注</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.price}>
          <Text style={styles.symbol}>¥</Text>
          <Text style={styles.priceText}>2388.00</Text>
        </View>

        <View style={styles.selectPanel}>
          <View>
            <Text style={styles.panelTitle}>已选</Text>
          </View>
          <View style={styles.panelContent}>
            <View>
              <Text style={styles.panelContentText}>
                白色, 有刻, 蓝牙, 1件, 其他服务选项, 白色, 有刻, 蓝牙, 1件,
                其他服务选项,
              </Text>
            </View>
            <Text style={styles.panelContentAlert}>仅剩2件</Text>
          </View>
          <TouchableOpacity style={styles.panelAct} onPress={toggleTagPopover}>
            <Entypo
              name="dots-three-horizontal"
              color={colors.gray02}
              size={16}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.addressPanel}>
          <View>
            <Text style={styles.panelTitle}>送至</Text>
          </View>
          <View style={styles.panelContent}>
            <View style={styles.location}>
              <Entypo name="location-pin" color={colors.cartRed} size={16} />
              <Text style={styles.panelContentText}>北京 海淀 三环以内</Text>
            </View>
            <View style={styles.deliver}>
              <Text style={styles.instock}>现货</Text>
              <Text style={styles.deliverDate}>
                23:00前下单, 预计明天(05月24日)送达.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.panelAct}>
            <Entypo
              name="dots-three-horizontal"
              color={colors.gray02}
              size={16}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, paddingHorizontal: 0, backgroundColor: colors.gray01 },
  imageWrapper: {
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 2 / 3
  },
  desc: {
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    // borderBottomColor: colors.gray06,
    // borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 5
  },
  price: {
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingBottom: 10
  },
  symbol: {
    color: colors.cartRed,
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "flex-end"
  },
  priceText: {
    color: colors.cartRed,
    fontWeight: "bold",
    fontSize: 18
  },
  left: {
    width: "80%",
    justifyContent: "center"
  },
  tagWrapper: {
    backgroundColor: colors.cartRed,
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderRadius: 2,
    marginBottom: -2
  },
  tag: {
    color: colors.white,
    fontSize: 12
  },
  info: {
    color: colors.lightBlack,
    fontSize: 14,
    lineHeight: 16
  },
  right: {
    justifyContent: "center",
    alignItems: "center"
  },
  likes: {
    color: colors.gray02,
    fontSize: 10,
    marginTop: 5
  },
  selectPanel: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  panelTitle: {
    fontSize: 13,
    color: colors.gray02,
    paddingTop: 1
  },
  panelContent: { flex: 1, alignSelf: "flex-start", marginLeft: 10 },
  panelContentText: { fontSize: 14, color: colors.lightBlack },
  panelContentAlert: { fontSize: 14, color: colors.cartRed, marginTop: 5 },
  panelAct: {},
  addressPanel: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  location: {
    flexDirection: "row"
  },
  deliver: {
    flexDirection: "row",
    marginTop: 5
  },
  instock: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.cartRed
  },
  deliverDate: {
    fontSize: 12,
    color: colors.gray02
  }
});
