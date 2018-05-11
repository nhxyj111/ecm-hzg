import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../styles/colors";

export default class ExhibitionItem extends Component {
  render() {
    const {
      id,
      desc,
      startDate,
      endDate,
      location,
      address,
      isNew,
      name,
      host,
      photo
    } = this.props.data;

    return (
      <View style={styles.wrapper}>
        <Text>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20
  }
});
