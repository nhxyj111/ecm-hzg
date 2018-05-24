import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../../styles/colors";

export default class TagRadioButtonGroup extends Component {
  render() {
    const { selectedId, group, onSelect } = this.props;
    const { type, data } = group;
    return (
      <View style={styles.wrapper}>
        {data.map(item => {
          const addedWrapperStyles = {};
          const addedTextStyles = {};
          if (item.inStock) {
            if (item.id === selectedId) {
              addedWrapperStyles.borderColor = colors.cartRed;
              addedTextStyles.color = colors.cartRed;
            }
          } else {
            addedWrapperStyles.borderStyle = "dashed";
            addedTextStyles.color = colors.gray03;
          }

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.radio, addedWrapperStyles]}
              disabled={!item.inStock}
              onPress={() => onSelect(type, item.id)}
            >
              <Text style={[styles.radioText, addedTextStyles]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  radio: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.gray03,
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 10
    // borderStyle: "dashed"
  },
  radioText: {
    fontSize: 12,
    color: colors.lightBlack
  }
});
