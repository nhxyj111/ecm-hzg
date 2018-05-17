import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PropTypes } from "prop-types";

import colors from "../styles/colors";

export default class GroupButtons2 extends Component {
  state = {
    active: this.props.defaultKey
  };

  toggleActiveButton = active => {
    this.setState(
      () => ({ active }),
      () => this.props.onChange(this.state.active)
    );
  };

  render() {
    const { config } = this.props;
    const lengthFlag = config.length - 1;
    const { active } = this.state;

    return (
      <View style={styles.footerBtnGroup}>
        {config.map((item, index) => (
          <TouchableOpacity
            key={item.key}
            style={[
              active === item.key ? styles.activeBtn : styles.defaultBtn,
              lengthFlag === index ? {} : styles.rightBorder
            ]}
            onPress={() => this.toggleActiveButton(item.key)}
          >
            <Text
              style={[
                active === item.key
                  ? styles.activeBtnText
                  : styles.defaultBtnText
              ]}
            >
              {item.tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

GroupButtons2.propTypes = {
  config: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  footerBtnGroup: {
    backgroundColor: colors.white,
    borderColor: colors.gray04,
    borderWidth: 1,
    flexDirection: "row",
    width: 300,
    height: 30,
    borderRadius: 3
  },
  defaultBtn: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  defaultBtnText: {
    color: colors.gray04,
    fontSize: 12
  },
  activeBtn: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.gray04,
    justifyContent: "center",
    alignItems: "center"
  },
  activeBtnText: {
    color: colors.white,
    fontSize: 12
  },
  rightBorder: {
    borderRightColor: colors.gray04,
    borderRightWidth: 1
  }
});
