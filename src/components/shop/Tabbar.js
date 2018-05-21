import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

import colors from "../../styles/colors";

const TABBAR_CONFIG = [
  {
    key: 1,
    number: 9,
    title: "全部商品"
  },
  {
    key: 2,
    number: 9,
    title: "热销"
  },
  {
    key: 3,
    number: 9,
    title: "上新"
  },
  {
    key: 4,
    number: 9,
    title: "店铺动态"
  }
];

export default class Tabbar extends Component {
  state = {
    key: 0
  };

  _onPress = key => {
    this.setState({ key }, () => {
      this.props.onTab(key);
    });
  };

  render() {
    const { key } = this.state;

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.tab, key === 0 && styles.selectedBorder]}
          onPress={() => this._onPress(0)}
        >
          <EntypoIcon
            name="shop"
            size={24}
            color={key === 0 ? colors.pink : colors.lightBlack}
          />
          <Text
            style={[
              styles.text,
              { color: key === 0 ? colors.pink : colors.lightBlack }
            ]}
          >
            店铺首页
          </Text>
        </TouchableOpacity>

        {TABBAR_CONFIG.map(item => (
          <TouchableOpacity
            key={item.key}
            style={[styles.tab, item.key === key && styles.selectedBorder]}
            onPress={() => this._onPress(item.key)}
          >
            <Text
              style={[
                styles.number,
                {
                  color: key === item.key ? colors.pink : colors.lightBlack
                }
              ]}
            >
              {item.number}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: key === item.key ? colors.pink : colors.lightBlack
                }
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  tab: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  number: {
    fontSize: 14
  },
  text: {
    fontSize: 12,
    paddingBottom: 3
  },
  selectedBorder: {
    borderBottomWidth: 2,
    borderBottomColor: colors.pink
  }
});
