import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StoreListItem from "./StoreListItem";

export default class StoreList extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  _handleClickItem = product => {
    // alert(JSON.stringify(product));
    this.props.gotoItemCard(product);
  };

  render() {
    const { products } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
          {products.map((product, index) => (
            <StoreListItem
              key={index}
              product={product}
              onPress={this._handleClickItem}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20
  },
  scrollViewWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
