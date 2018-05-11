import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import NewsItem from "./NewsItem";

export default class NewsList extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={this.props.data}
          renderItem={({ item, index }) => <NewsItem data={item} />}
          keyExtractor={item => item.id}
          style={styles.flatlist}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {}
});
