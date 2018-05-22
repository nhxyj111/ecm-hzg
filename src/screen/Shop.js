import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../styles/colors";
import Header from "../components/shop/Header";
import Footer from "../components/shop/Footer";
import Tabbar from "../components/shop/Tabbar";
import Recommend from "../components/shop/Recommend";
import List from "../components/shop/List";

export default class Shop extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    tabKey: 0
  };

  _onTab = tabKey => {
    this.setState({ tabKey });
  };

  _gotoShopCard = () => {
    this.props.navigation.navigate("ShopCard");
  };

  _goBack = () => {
    this.props.navigation.navigate("Exhibiter");
  };

  render() {
    const { tabKey } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Header goBack={this._goBack} />
          <Tabbar onTab={this._onTab} />
        </View>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={{ paddingBottom: 80, zIndex: -1 }}
        >
          {tabKey === 0 ? <Recommend /> : <List />}
        </ScrollView>
        <View style={styles.footer}>
          <Footer gotoShopCard={this._gotoShopCard} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray01
  },
  header: {},
  scrollview: {},
  footer: {
    position: "relative"
  }
});
