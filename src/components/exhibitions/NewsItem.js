import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export default class NewsItem extends Component {
  render() {
    const { title, content } = this.props.data;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            {content}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomColor: colors.gray05,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.lightBlack
  },
  content: {
    fontSize: 12,
    color: colors.lightBlack
  }
});
