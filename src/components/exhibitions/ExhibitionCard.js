import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import moment from "moment";

import colors from "../../styles/colors";
import { STATIC_BASE } from "../../services";

export default class ExhibitionCard extends Component {
  render() {
    const { expo } = this.props;
    const {
      DETAIL,
      NAME,
      TEL,
      ADDRESS,
      CONTACT,
      START_TIME,
      END_TIME,
      SPONSORBY,
      POSTURL
    } = expo;
    const startTime = START_TIME.split("T")
      .join(" ")
      .split(".")[0];
    const endTime = END_TIME.split("T")
      .join(" ")
      .split(".")[0];
    const postUrl = POSTURL
      ? STATIC_BASE + POSTURL
      : "https://dummyimage.com/400x700/96aa12/fff";
    return (
      <ImageBackground
        style={styles.wrapper}
        source={{ uri: postUrl }}
        resizeMode="cover"
        borderRadius={5}
      >
        <ScrollView
          style={styles.card}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 5
          }}
        >
          <Text style={styles.heading}>{NAME}</Text>
          {/* 副标题 */}
          <View style={styles.subHeading}>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>主办: </Text>
              <Text style={styles.subText}>
                {SPONSORBY} ({TEL})
              </Text>
            </View>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>活动日期: </Text>
              <Text style={styles.subText}>
                {startTime} 至 {endTime}
              </Text>
            </View>
          </View>
          {/* 展会介绍 */}
          <View style={styles.descWrapper}>
            <Text style={styles.desc} numberOfLines={9999}>
              {DETAIL}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    flex: 1,
    // TODO:
    // backgroundColor: "tomato",
    // borderRadius: 30,
    padding: 20,
    height: 360,
    position: "relative"
  },
  card: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5
  },
  heading: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10
  },
  subHeading: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10
  },
  subTextWrapper: {
    flexDirection: "row"
  },
  subText: {
    color: colors.gray05,
    fontSize: 12
  },
  descWrapper: {
    marginTop: 10
  },
  desc: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 20
    // height: "auto",
    // lineHeight: 1.5
  }
});
