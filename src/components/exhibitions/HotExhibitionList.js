import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  Dimensions
} from "react-native";

import { STATIC_BASE, axiosInstance } from "../../services";
import { CARD_GAP, VW } from "../../constants";
import colors from "../../styles/colors";

const cardWithHeight = (VW - 8 * CARD_GAP) / 3;
const defaultPhoto = "https://dummyimage.com/250/676767/a1a1a1";

export default class HotExhibitionList extends Component {
  get HotExhibitions() {
    const { exhibitions, navigation } = this.props;
    return exhibitions.map((ehb, index) => {
      let { LOGO, AD_PIC, AD_LINK, SHORT_NAME } = ehb;

      // TODO:
      let photo = AD_LINK
        ? `${STATIC_BASE}${AD_PIC}`
        : LOGO
          ? `${STATIC_BASE}${LOGO}`
          : defaultPhoto;

      let logo = "";
      const LOGO_NAME = index % 6;
      switch (LOGO_NAME) {
        case 0:
          logo = require("../../data/logo/0.png");
          break;
        case 1:
          logo = require("../../data/logo/1.png");
          break;
        case 2:
          logo = require("../../data/logo/2.png");
          break;
        case 3:
          logo = require("../../data/logo/3.png");
          break;
        case 4:
          logo = require("../../data/logo/4.png");
          break;
        case 5:
          logo = require("../../data/logo/5.png");
          break;
      }

      return (
        <TouchableHighlight
          key={ehb._id}
          style={styles.card}
          onPress={async () => {
            if (AD_LINK) {
              const response = await axiosInstance.get(
                `shop/getGoodsDetail/${AD_LINK}`
              );
              const product = response.data;
              navigation.navigate("ShopGood", { product });
            } else {
              navigation.navigate("ExhibitionDetail", { expo: ehb });
            }
          }}
        >
          <Fragment>
            <Image
              style={styles.image}
              // source={{ uri: photo }} // TODO:
              source={logo}
              resizeMode="contain"
            />

            {AD_LINK ? (
              <View style={styles.adTag}>
                <Text style={{ color: colors.cartRed, fontSize: 12 }}>
                  广告
                </Text>
              </View>
            ) : (
              <View style={styles.expoName}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 12,
                    textAlign: "center"
                  }}
                  numberOfLines={3}
                >
                  {SHORT_NAME}
                </Text>
              </View>
            )}
          </Fragment>
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.wrapper}
        // contentContainerStyle={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.HotExhibitions}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row"
    // alignItems: "center",
    // justifyContent: "center"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    // width: Platform.OS === "ios" ? 100 : 115, // todo
    // height: Platform.OS === "ios" ? 100 : 115, // todo
    width: cardWithHeight,
    height: cardWithHeight,
    marginRight: CARD_GAP,
    marginLeft: CARD_GAP,
    borderWidth: 2,
    borderColor: colors.gray05,
    borderRadius: 2
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  adTag: {
    position: "absolute",
    right: 5,
    bottom: 5,
    width: 36,
    height: 18,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.cartRed,
    justifyContent: "center",
    alignItems: "center"
  },
  expoName: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 5
  }
});
