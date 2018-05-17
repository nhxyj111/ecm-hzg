import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import moment from "moment";

import CustomTag from "../CustomTag";
import { STATIC_BASE } from "../../services";
import colors from "../../styles/colors";

export default class ExhibitionItem extends Component {
  render() {
    const { onPress, data } = this.props;
    const {
      _id,
      DETAIL,
      START_TIME,
      END_TIME,
      ADDRESS,
      SPONSORBY,
      VENUE,
      PRICE, // "免费"
      NAME,
      LOGOURL,
      CONTACT,
      VIEW_NUM,
      TEL,
      LATITUDE,
      LONGITUDE
    } = data;

    const photo =
      LOGOURL !== ""
        ? STATIC_BASE + LOGOURL
        : "https://dummyimage.com/250/676767/a1a1a1";

    return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <View style={styles.left}>
          <Image source={{ uri: photo }} style={styles.image} />
        </View>
        <View style={styles.right}>
          <Text numberOfLines={1} style={styles.name}>
            {NAME}
          </Text>
          {/* <Text numberOfLines={1} style={styles.desc}>
            {DETAIL}
          </Text> */}
          <Text numberOfLines={1} style={styles.address}>
            地址: {ADDRESS}
          </Text>
          <Text numberOfLines={1} style={styles.location}>
            场馆: {VENUE}
          </Text>
          <Text numberOfLines={1} style={styles.host}>
            主办方: {SPONSORBY}
          </Text>
          <Text numberOfLines={1} style={styles.phone}>
            联系电话: {TEL}
          </Text>
          <Text numberOfLines={1} style={styles.timesHeader}>
            活动时间:{" "}
          </Text>
          <Text numberOfLines={1} style={styles.times}>
            {moment(START_TIME).format("YYYY-MM-DD")} -{" "}
            {moment(END_TIME).format("YYYY-MM-DD")}
          </Text>
        </View>
        {PRICE == 0 ? (
          <CustomTag
            gbColor="tomato"
            color="white"
            size={60}
            textSize={12}
            position="right-bottom"
            title="免费"
          />
        ) : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginBottom: 10,
    overflow: "hidden"
  },
  left: {},
  image: {
    width: 100,
    height: 100
  },
  right: {
    // backgroundColor: "tomato",
    flexShrink: 1,
    // flexGrow: 0
    marginLeft: 5
  },
  name: {
    fontSize: 14,
    color: colors.lightBlack,
    fontWeight: "bold"
  },
  desc: {
    fontSize: 12,
    color: colors.lightBlack
  },
  address: {
    fontSize: 12,
    color: colors.lightBlack
  },
  location: {
    fontSize: 12,
    color: colors.lightBlack
  },
  host: {
    fontSize: 12,
    color: colors.lightBlack
  },
  phone: {
    fontSize: 12,
    color: colors.lightBlack
  },
  timesHeader: {
    fontSize: 12,
    color: colors.lightBlack
  },
  times: {
    fontSize: 12,
    color: colors.lightBlack
  }
});
