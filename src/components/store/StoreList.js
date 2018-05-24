import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StoreListItem from "./StoreListItem";
import MoreButton from "../MoreButton";

import colors from "../../styles/colors";

export default class StoreList extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  // _handleClickItem = product => {
  //   // alert(JSON.stringify(product));
  //   this.props.gotoItemCard(product);
  // };

  render() {
    const { products, hasMore, gotoShopGood, loadMore, loading } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
          {products.map((product, index) => (
            <StoreListItem
              key={index}
              product={product}
              onPress={() => gotoShopGood(product)}
            />
          ))}
          {hasMore && (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MoreButton
                color={colors.lightBlack}
                size={14}
                title="更多..."
                onPress={loadMore}
                disabled={loading}
              />
            </View>
          )}
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
