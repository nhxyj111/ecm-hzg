import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../styles/colors";

export default class ExhibitionItem extends Component {
  render() {
    const {
      id,
      desc,
      startDate,
      endDate,
      location,
      address,
      isNew,
      name,
      host,
      photo,
      phone
    } = this.props.data;

    return (
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Image source={{ uri: photo }} style={styles.image} />
        </View>
        <View style={styles.right}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.desc}>
            {desc}
          </Text>
          <Text numberOfLines={1} style={styles.address}>
            地址: {address}
          </Text>
          <Text numberOfLines={1} style={styles.location}>
            场馆: {location}
          </Text>
          <Text numberOfLines={1} style={styles.host}>
            主办方: {host}
          </Text>
          <Text numberOfLines={1} style={styles.phone}>
            联系电话: {phone}
          </Text>
          <Text numberOfLines={1} style={styles.timesHeader}>
            活动时间:{" "}
          </Text>
          <Text numberOfLines={1} style={styles.times}>
            {startDate} - {endDate}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    marginBottom: 10
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
