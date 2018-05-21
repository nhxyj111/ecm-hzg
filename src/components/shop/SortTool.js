import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";
export default class SortTool extends Component {
  state = {
    tabKey: 0,
    stockSwitch: false,
    priceFlag: 0
  };

  _onPress = tabKey => {
    if (tabKey === 3) {
      this.setState(prevState => ({ stockSwitch: !prevState.stockSwitch }));
    } else {
      this.setState(prevState => {
        if (tabKey === 2) {
          return {
            tabKey,
            priceFlag: prevState.priceFlag === 1 ? 0 : 1
          };
        } else {
          return { tabKey };
        }
      });
    }
  };

  render() {
    const { tabKey, stockSwitch, priceFlag } = this.state;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.recommend}
          onPress={() => this._onPress(0)}
        >
          <Text
            style={[
              styles.text,
              { color: tabKey === 0 ? colors.pink : colors.lightBlack }
            ]}
          >
            推荐
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sales} onPress={() => this._onPress(1)}>
          <Text
            style={[
              styles.text,
              { color: tabKey === 1 ? colors.pink : colors.lightBlack }
            ]}
          >
            销量
          </Text>
          <Ionicons
            name="md-arrow-dropdown"
            size={14}
            color={tabKey === 1 ? colors.pink : colors.lightBlack}
            style={styles.salesIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.price} onPress={() => this._onPress(2)}>
          <Text
            style={[
              styles.text,
              { color: tabKey === 2 ? colors.pink : colors.lightBlack }
            ]}
          >
            价格
          </Text>
          <View style={styles.iconGroup}>
            <Ionicons
              name="md-arrow-dropup"
              size={12}
              color={
                tabKey === 2 && priceFlag === 1
                  ? colors.pink
                  : colors.lightBlack
              }
              style={styles.arrowUp}
            />
            <Ionicons
              name="md-arrow-dropdown"
              size={12}
              color={
                tabKey === 2 && priceFlag === 0
                  ? colors.pink
                  : colors.lightBlack
              }
              style={styles.arrowDown}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stock} onPress={() => this._onPress(3)}>
          <Text
            style={[
              styles.text,
              { color: stockSwitch ? colors.pink : colors.lightBlack }
            ]}
          >
            仅看有货
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  recommend: {},
  sales: {
    flexDirection: "row"
  },
  salesIcon: {
    marginLeft: 3
  },
  price: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconGroup: {
    marginLeft: 3,
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center"
  },
  arrowUp: {
    marginBottom: -3
  },
  arrowDown: {
    marginTop: -3
  },
  stock: {},
  text: {
    fontSize: 14
  }
});
