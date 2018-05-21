import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import SortTool from "./SortTool";
import colors from "../../styles/colors";
// TODO: test data
import shopItems from "../../data/shopItems";
export default class List extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <SortTool />
        <FlatList
          data={shopItems}
          renderItem={({ item, index }) => <ListItem data={item} />}
          keyExtractor={item => item.id}
          style={styles.flatlist}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  flatlist: {
    marginTop: 0
  }
});
