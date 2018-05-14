import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Badge from "./Badge";
import colors from "../styles/colors";

export default class SearchPrompt extends Component {
  render() {
    const { config, onClose } = this.props;
    return (
      <View style={styles.wrapper}>
        {config.map((item, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <View>
              <Text style={styles.sectionText}>{item.section}</Text>
            </View>
            <View style={styles.badges}>
              {item.badges.map((badge, badgeIndex) => (
                <Badge
                  key={`${sectionIndex}-${badgeIndex}`}
                  color={badge.color}
                  bgColor={badge.bgColor}
                  text={badge.text}
                />
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.close} onPress={onClose}>
          <Icon
            name="ios-close-circle-outline"
            size={20}
            color={colors.lightBlack}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    flexDirection: "column"
  },
  section: {
    flexDirection: "row",
    alignItems: "center"
  },
  sectionText: {
    color: colors.lightBlack,
    fontSize: 14
  },
  badges: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0
  }
});
