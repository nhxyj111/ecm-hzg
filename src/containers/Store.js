import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import StoreFilterHeader from "../components/store/StoreFilterHeader";
import StoreList from "../components/store/StoreList";

// TODO: test data
import products from "../data/products";

export default class Store extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarLabel: "商城"
  });

  _handleGotoItemCard = product => {
    this.props.navigation.navigate("StoreItemCard", { product: product });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <StoreFilterHeader navigation={this.props.navigation} />
        <StoreList
          products={products}
          gotoItemCard={this._handleGotoItemCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
