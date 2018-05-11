import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../styles/colors";

export default class GroupButtons extends Component {
  state = {
    actived: "left"
  };

  toggleActiveButton = () => {
    if (this.state.actived === "left") {
      this.setState({ actived: "right" }, () => {
        this.props.onPress(this.state.actived);
      });
    } else {
      this.setState({ actived: "left" }, () => {
        this.props.onPress(this.state.actived);
      });
    }
  };

  render() {
    let leftBtn = styles.activeBtn;
    let leftBtnText = styles.activeBtnText;
    let rightBtn = styles.defaultBtn;
    let rightBtnText = styles.defaultBtnText;
    if (this.state.actived === "right") {
      [leftBtn, rightBtn] = [rightBtn, leftBtn];
      [leftBtnText, rightBtnText] = [rightBtnText, leftBtnText];
    }

    return (
      <View style={styles.footerBtnGroup}>
        <TouchableOpacity style={leftBtn} onPress={this.toggleActiveButton}>
          <Text style={leftBtnText}>商品出售</Text>
        </TouchableOpacity>
        <TouchableOpacity style={rightBtn} onPress={this.toggleActiveButton}>
          <Text style={rightBtnText}>商品求购</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  defaultBtnText: {
    color: colors.gray04,
    fontSize: 12
  },
  activeBtn: {
    width: "50%",
    height: "100%",
    backgroundColor: colors.gray04,
    justifyContent: "center",
    alignItems: "center"
  },
  activeBtnText: {
    color: colors.white,
    fontSize: 12
  }
});
