import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ExhibiterCard from "./ExhibiterCard";

export default class ExhibiterList extends Component {
  render() {
    const { exhibiters } = this.props;
    return (
      <View style={styles.wrapper}>
        {exhibiters.map((ehb, index) => (
          <ExhibiterCard key={index} photo={ehb.photo} name={ehb.name} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // padding: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    justifyContent: "space-between",
    margin: 20
  },
  scrollView: {}
});
