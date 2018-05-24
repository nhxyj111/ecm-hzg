import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import TagRadioButtonGroup from "./TagRadioButtonGroup";
import CountButtonGroup from "./CountButtonGroup";

import colors from "../../../styles/colors";
import { VH } from "../../../constants";
const POPOVER_HEIGHT = VH * 0.7;

const GROUP_COLOR = {
  type: "color",
  data: [
    {
      id: 1,
      title: "白色",
      inStock: true
    },
    {
      id: 2,
      title: "黑色",
      inStock: true
    }
  ]
};

const GROUP_TYPE = {
  type: "type",
  data: [
    {
      id: 1,
      title: "Type-s静音有刻",
      inStock: false
    },
    {
      id: 2,
      title: "Type-s静音无刻",
      inStock: true
    },
    {
      id: 3,
      title: "PRO有刻",
      inStock: true
    },
    {
      id: 4,
      title: "PRO有刻蓝牙版",
      inStock: true
    },
    {
      id: 5,
      title: "PRO无刻",
      inStock: true
    },
    {
      id: 6,
      title: "PRO无刻蓝牙版",
      inStock: true
    }
  ]
};

export default class TagPopover extends Component {
  state = {
    selected: { color: 1, type: 3 }
  };

  _onSelect = (type, id) => {
    this.setState(prevState => ({
      selected: {
        ...prevState.selected,
        [type]: id
      }
    }));
  };

  render() {
    const { scale, toggleTagPopover } = this.props;
    const { selected } = this.state;

    return (
      <View style={[styles.wrapper, { transform: [{ scale }] }]}>
        <View style={styles.heading}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: "https://dummyimage.com/100x100/ff628c/fff" }}
              style={styles.image}
            />
          </View>
          <View style={styles.descWrapper}>
            <View>
              <Text style={styles.price}>¥2190.00</Text>
              <Text style={styles.instock}>仅剩2件</Text>
              <Text style={styles.pid}>商品编号 : 2341567</Text>
            </View>
            <TouchableOpacity style={styles.close} onPress={toggleTagPopover}>
              <EvilIcons name="close" size={24} color={colors.gray02} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollview}>
          <View style={styles.groupWrapper}>
            <Text style={styles.groupTitle}>颜色</Text>
            <TagRadioButtonGroup
              group={GROUP_COLOR}
              selectedId={selected.color}
              onSelect={this._onSelect}
            />
          </View>
          <View style={styles.groupWrapper}>
            <Text style={styles.groupTitle}>版本</Text>
            <TagRadioButtonGroup
              group={GROUP_TYPE}
              selectedId={selected.type}
              onSelect={this._onSelect}
            />
          </View>
          <View style={styles.countWrapper}>
            <Text style={styles.countTitle}>数量</Text>
            <CountButtonGroup />
          </View>
        </ScrollView>

        <View style={styles.addWrapper}>
          <TouchableOpacity style={styles.addToCart}>
            <Text style={styles.addText}>加入购物车</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: POPOVER_HEIGHT,
    backgroundColor: colors.white,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -20,
    zIndex: 99,
    padding: 0
  },
  heading: {
    paddingHorizontal: 10,
    flexDirection: "row",
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  imageWrapper: {
    height: 100,
    width: 100,
    borderRadius: 3,
    borderColor: colors.gray05,
    borderWidth: 1,
    overflow: "hidden",
    marginTop: -25
  },
  image: {
    width: 100,
    height: 100
  },
  scrollview: {
    flex: 1
  },
  addWrapper: {
    backgroundColor: colors.cartRed,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    alignItems: "center"
  },
  addToCart: {
    marginTop: 15
  },
  addText: {
    fontSize: 18,
    color: colors.white
  },
  descWrapper: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.cartRed,
    marginBottom: 5
  },
  instock: {
    fontSize: 12,
    color: colors.cartRed,
    marginBottom: 3
  },
  pid: {
    fontSize: 12,
    color: colors.gray02
  },
  close: {
    //alignSelf: "flex-start"
  },

  groupWrapper: {
    paddingHorizontal: 10,
    paddingTop: 15
  },
  groupTitle: {
    marginBottom: 10,
    fontSize: 14,
    color: colors.gray02
  },
  countWrapper: {
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  countTitle: {
    fontSize: 14,
    color: colors.gray02
  }
});
