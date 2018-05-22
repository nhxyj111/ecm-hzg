import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Popover from "./Popover";

import colors from "../../styles/colors";
import { VW } from "../../constants";

export default class Footer extends Component {
  state = {
    showPop: false
  };

  _togglePopover = () => {
    this.setState(prevState => ({
      showPop: !prevState.showPop
    }));
  };

  render() {
    const { gotoShopCard } = this.props;
    const { showPop } = this.state;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.info} onPress={gotoShopCard}>
          <Text style={styles.infoText}>店铺详情</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={this._togglePopover}>
          <Ionicons
            name="ios-menu-outline"
            size={20}
            color={colors.gray02}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>商品分类</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supplier}>
          <Ionicons
            name="ios-megaphone-outline"
            size={20}
            color={colors.tlBlue}
          />
          <Text style={styles.supplierText}>联系供应商</Text>
        </TouchableOpacity>

        {showPop && (
          <Popover
            position={{ bottom: 65, left: VW / 2 }}
            // position={{ top: 0, left: 0 }}
            bgColor={colors.gray07}
            borderColor={colors.gray03}
            width={120}
            color={colors.lightBlack}
            size={14}
            categories={[
              { id: 1, title: "电竞外设" },
              { id: 2, title: "家用小电器" },
              { id: 3, title: "进口零食" }
            ]}
            dividerColor={colors.gray05}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    overflow: "visible"
  },
  info: {
    justifyContent: "center",
    alignItems: "center"
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    marginVertical: 20,
    borderLeftColor: colors.gray06,
    borderRightColor: colors.gray06,
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  supplier: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  infoText: {
    fontSize: 16,
    color: colors.lightBlack
  },
  categoryText: {
    fontSize: 16,
    color: colors.lightBlack,
    marginLeft: 5,
    marginRight: 20
  },
  categoryIcon: {
    marginLeft: 20
  },
  supplierText: {
    fontSize: 16,
    color: colors.lightBlack,
    marginLeft: 5
  }
});
