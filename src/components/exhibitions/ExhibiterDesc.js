import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";

import colors from "../../styles/colors";
import { STATIC_BASE } from "../../services";
export default class ExhibiterDesc extends Component {
  render() {
    const { exhibiter } = this.props;
    const {
      _id,
      COM_NAME,
      PROVINCE_ID,
      CITY_ID,
      ADDRESS,
      CONTACT,
      PHONE,
      MOBILE,
      BANNERURL,
      INTRODUCE
    } = exhibiter;

    const photo = BANNERURL
      ? STATIC_BASE + BANNERURL
      : "https://dummyimage.com/400x700/96aa12/fff";

    return (
      <ImageBackground
        style={styles.wrapper}
        source={{ uri: photo }}
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
          <Text style={styles.heading}>{COM_NAME}</Text>
          {/* 副标题 */}
          <View style={styles.subHeading}>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>联系地址: </Text>
              <Text style={styles.subText}>{ADDRESS}</Text>
            </View>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>联系方式: </Text>
              <Text style={styles.subText}>
                {CONTACT}({PHONE}/{MOBILE})
              </Text>
            </View>
          </View>
          {/* 展会介绍 */}
          <View style={styles.descWrapper}>
            <Text style={styles.desc} numberOfLines={9999}>
              {INTRODUCE}
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
    marginBottom: 15,
    position: "relative"
    // overflow: "hidden"
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
    fontWeight: "600"
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
    color: colors.white
    // height: "auto",
    // lineHeight: 1.5
  }
});
