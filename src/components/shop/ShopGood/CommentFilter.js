import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import colors from "../../../styles/colors";

export default class CommentFilter extends Component {
  render() {
    const { config, selectedKey } = this.props;

    return (
      <View style={styles.wrapper}>
        {config.map(f => (
          <TouchableOpacity
            key={f.key}
            style={[
              styles.filter,
              {
                backgroundColor:
                  selectedKey === f.key ? "transparent" : colors.lightPink
              }
            ]}
          >
            {selectedKey === f.key && (
              <FeatherIcon
                name="check"
                size={10}
                color={colors.pink}
                style={{ marginRight: 3 }}
              />
            )}
            <Text style={styles.text}>
              {f.filter} {f.count}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    paddingVertical: 10,
    paddingVertical: 10,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  filter: {
    borderColor: colors.pink,
    borderRadius: 2,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10
  },
  text: {
    color: colors.lightBlack,
    fontSize: 12
  }
});
