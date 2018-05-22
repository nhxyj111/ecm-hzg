import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert, Platform } from "react-native";
import Swipeout from "react-native-swipeout";
import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import LeftTopTag from "../LeftTopTag";

import colors from "../../styles/colors";

export default class SellerItem extends Component {
  render() {
    const swipeoutSettings = {};
    const {
      id,
      name,
      spec,
      desc,
      minPrice,
      maxPrice,
      quantity,
      publishTime,
      expireTime,
      publisher,
      phone,
      isNew,
      watch,
      likes,
      photo
    } = this.props.item;
    return (
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <View
            style={[
              styles.imageWrapper,
              Platform.OS === "android" && {
                borderColor: "transparent",
                borderWidth: 1
              }
            ]}
          >
            {isNew && <LeftTopTag />}

            <Image source={{ uri: photo }} style={styles.image} />
            <View style={styles.icons}>
              <View style={styles.iconWrapper}>
                <Icon name="eye" size={12} color={colors.lightBlack} />
                <Text style={styles.iconText}>{watch}</Text>
              </View>
              <View style={styles.iconWrapper}>
                <Icon name="heart" size={12} color={colors.lightBlack} />
                <Text style={styles.iconText}>{watch}</Text>
              </View>
            </View>
          </View>
          <View style={styles.descWrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.spec}>{spec}</Text>
            <Text numberOfLines={2} style={styles.desc}>
              {desc}
            </Text>
            <Text style={styles.prices}>
              价格: {minPrice} - {maxPrice}
            </Text>
            <Text style={styles.quantity}>数量: {quantity}</Text>
          </View>
        </View>

        <View style={styles.right}>
          <View>
            <Text style={styles.header}>发布时间: </Text>
            <Text style={styles.text}>{publishTime}</Text>
            <Text style={styles.header}>到期时间: </Text>
            <Text style={styles.text}>{expireTime}</Text>
          </View>
          {/* <View style={styles.publish}>
            <Text style={styles.header}>发布人: </Text>
            <Text numberOfLines={2} style={styles.text}>
              {publisher}
            </Text>
          </View>
          <View style={styles.publish}>
            <Text style={styles.header}>联系方式: </Text>
            <Text style={styles.text}>{phone}</Text>
          </View> */}
          <View style={styles.active}>
            {this.props.isActive ? (
              <EvilIcons name="arrow-up" size={24} color={colors.lightBlack} />
            ) : (
              <EvilIcons
                name="arrow-down"
                size={24}
                color={colors.lightBlack}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomColor: colors.gray01,
    borderBottomWidth: 1,
    overflow: "hidden"
  },

  left: {
    flexDirection: "row",
    flex: 3,
    overflow: "hidden"
  },

  imageWrapper: {
    position: "relative",
    overflow: "hidden"
    // borderWidth: 1, // only for android
    // borderColor: "transparent" // only for android
  },

  image: {
    height: 80,
    width: 80,
    marginRight: 3,
    marginBottom: 3
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  iconText: {
    fontSize: 10,
    color: colors.lightBlack
  },

  descWrapper: {
    flexWrap: "wrap"
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack
  },
  spec: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.lightBlack
  },
  desc: {
    flex: 1,
    maxWidth: 120,
    fontSize: 12,
    color: colors.lightBlack
  },
  prices: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  },
  quantity: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  },

  right: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  header: {
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  },
  publish: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  active: {
    alignSelf: "flex-end"
  }
});
