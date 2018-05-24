import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import GoodDescInfo from "./GoodDescInfo";
import GoodDescSpec from "./GoodDescSpec";
import GoodDescService from "./GoodDescService";
import colors from "../../../styles/colors";
export default class GoodDesc extends Component {
  state = {
    selectedTab: 3
  };

  _onSelect = selectedTab => {
    this.setState({ selectedTab });
  };

  _renderTabContent = () => {
    const { selectedTab } = this.state;
    if (selectedTab === 1) {
      return <GoodDescInfo toggleTagPopover={this._toggleTagPopover} />;
    } else if (selectedTab === 2) {
      return <GoodDescSpec />;
    } else {
      return <GoodDescService />;
    }
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={() => this._onSelect(1)}>
            <Text
              style={[
                styles.title,
                selectedTab === 1 && { color: colors.cartRed }
              ]}
            >
              商品介绍
            </Text>
          </TouchableOpacity>
          <View style={styles.vDivider} />
          <TouchableOpacity onPress={() => this._onSelect(2)}>
            <Text
              style={[
                styles.title,
                selectedTab === 2 && { color: colors.cartRed }
              ]}
            >
              规格参数
            </Text>
          </TouchableOpacity>
          <View style={styles.vDivider} />
          <TouchableOpacity onPress={() => this._onSelect(3)}>
            <Text
              style={[
                styles.title,
                selectedTab === 3 && { color: colors.cartRed }
              ]}
            >
              包装售后
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollWrapper}>
          <ScrollView
            style={styles.scrollview}
            // contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {this._renderTabContent()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15
  },
  vDivider: {
    width: 1,
    height: 15,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray06
  },
  title: {
    color: colors.gray04,
    fontSize: 14
  },
  scrollWrapper: {
    paddingHorizontal: 10,
    flex: 1
  },
  scrollview: {
    flex: 1
  }
});
