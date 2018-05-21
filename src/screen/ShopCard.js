import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import { VW } from "../constants";
// tab间分割竖线偏移
const SHIFT_LEN = (VW - 2 * 20) / 4 / 3;

export default class ShopCard extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: "店铺详情",
      headerStyle: {
        backgroundColor: colors.white
      },
      headerTintColor: colors.lightBlack,
      headerTitleStyle: {
        fontWeight: "normal"
      }
    };
  };

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.desc}>
            <View style={styles.left}>
              <Image
                source={{ uri: "https://dummyimage.com/300x200/FF63ff/fff" }}
                style={styles.logo}
              />
              <View style={styles.nameWrapper}>
                <View style={styles.name}>
                  <Text style={styles.nameText}>XXXX会展购旗舰店</Text>
                </View>
                <View style={styles.recommend}>
                  <Text style={styles.recommendText}>推荐商户</Text>
                </View>
              </View>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.watch}>
                <FeatherIcon name="heart" size={14} color={colors.white} />
                <Text style={styles.watchText}>关注</Text>
              </TouchableOpacity>
              <View style={styles.watchNum}>
                <Text style={styles.watchNumText}>1999</Text>
              </View>
            </View>
          </View>

          <View style={styles.tabs}>
            <View style={styles.tab}>
              <Text style={styles.number}>9</Text>
              <Text style={styles.tabName}>全部商品</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.number}>0</Text>
              <Text style={styles.tabName}>上新</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.number}>3</Text>
              <Text style={styles.tabName}>热销</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.number}>0</Text>
              <Text style={styles.tabName}>店铺动态</Text>
            </View>
          </View>
        </View>

        <View style={styles.itemWrapper}>
          <View style={[styles.item, styles.borderBottom]}>
            <Text style={styles.itemText}>联系供应商</Text>
            <FontAwesome name="mobile-phone" size={24} color={colors.tlBlue} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>店铺二维码</Text>
            <FontAwesome name="qrcode" size={22} color={colors.lightBlack} />
          </View>
        </View>

        <View style={styles.itemWrapper}>
          <View style={[styles.item, styles.borderBottom]}>
            <Text style={styles.itemText2}>店铺简介</Text>
            <Text style={styles.itemDesc}>高端外设产品和海外代购</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText2}>开店时间</Text>
            <Text style={styles.itemDesc}>2018-01-01</Text>
          </View>
        </View>

        <View style={styles.brand}>
          <View style={styles.brandHeader}>
            <Text style={styles.brandHeaderText}>销售品牌</Text>
          </View>
          <View style={styles.brandList}>
            <View style={styles.brandItem}>
              <Text style={styles.brandText}>HHKB</Text>
            </View>
            <View style={styles.brandItem}>
              <Text style={styles.brandText}>罗技</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: colors.white,
    flex: 1
  },
  header: {
    marginTop: 0,
    backgroundColor: colors.white,
    flexDirection: "column",
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  desc: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10
  },
  left: {
    flexDirection: "row"
  },

  logo: {
    width: 90,
    height: 35,
    alignSelf: "flex-end"
  },
  nameWrapper: {
    marginLeft: 5,
    alignSelf: "flex-end"
  },
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.lightBlack
  },
  recommend: {
    backgroundColor: colors.darkOrange,
    padding: 2,
    borderRadius: 2,
    alignSelf: "flex-start"
  },
  recommendText: {
    fontSize: 12,
    color: colors.white
  },
  right: {
    flexDirection: "column"
  },
  watch: {
    backgroundColor: colors.darkOrange,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 5,
    flexDirection: "row"
  },
  watchNum: {
    backgroundColor: colors.gray05,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5
  },
  watchText: {
    color: colors.white,
    fontSize: 13,
    marginLeft: 5
  },
  watchNumText: {
    color: colors.gray04,
    fontSize: 11,
    textAlign: "center"
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 8
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    borderLeftColor: colors.gray05,
    borderLeftWidth: 1,
    paddingLeft: SHIFT_LEN,
    marginLeft: SHIFT_LEN * -1
    // borderRightColor: colors.gray05,
    // borderRightWidth: 1
  },
  number: {
    fontSize: 14,
    color: colors.lightBlack,
    paddingBottom: 8
  },
  tabName: {
    fontSize: 12,
    color: colors.gray02
  },
  itemWrapper: {
    borderBottomColor: colors.gray05,
    borderBottomWidth: 1,
    borderTopColor: colors.gray05,
    borderTopWidth: 1,
    marginTop: 10,
    backgroundColor: colors.white,
    flexDirection: "column"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    marginLeft: 10,
    paddingVertical: 10
  },
  borderBottom: {
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 14,
    color: colors.lightBlack
  },
  itemText2: {
    fontSize: 13,
    color: colors.lightBlack
  },
  itemDesc: {
    fontSize: 12,
    color: colors.gray02
  },
  brand: {
    flexDirection: "column",
    marginTop: 10
  },
  brandHeader: {
    borderTopColor: colors.gray05,
    borderTopWidth: 1,
    marginTop: 10,
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10
  },
  brandHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.lightBlack
  },
  brandList: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    paddingBottom: 0,
    backgroundColor: colors.gray01,
    borderBottomColor: colors.gray05,
    borderBottomWidth: 1
  },
  brandItem: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    borderBottomColor: colors.tlBlue,
    borderBottomWidth: 2
  },
  brandText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.lightBlack
  }
});
