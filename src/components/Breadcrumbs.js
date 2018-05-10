import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../styles/colors";

export default class Breadcrumbs extends Component {
  _renderBreadcrumbs = () => {
    let r = [];

    const { filterItems } = this.props;
    for (let item of filterItems) {
      r.push(item);
      r.push("/");
    }
    r.splice(-1, 1);
    return r;
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.breadcrumbs}>
          {this._renderBreadcrumbs().map((crumb, i) => (
            <Text key={i} style={styles.breadcrumbsText}>
              {crumb}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20
  },
  title: {
    fontWeight: "600",
    color: colors.lightBlack,
    fontSize: 18
  },
  breadcrumbs: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  breadcrumbsText: {
    fontWeight: "600",
    color: colors.lightBlack,
    fontSize: 18,
    marginLeft: 10
  }
});
