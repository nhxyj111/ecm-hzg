import React, { Component } from "react";
import {
  TextInput,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { PropTypes } from "prop-types";
import FeatherIcon from "react-native-vector-icons/Feather";

import colors from "../styles/colors";

export default class SearchBar2 extends Component {
  render() {
    return (
      <View style={styles.searchBox}>
        <TextInput
          style={styles.inputText}
          keyboardType="web-search"
          placeholder="搜索展会资讯"
        />

        <TouchableOpacity onPress={this.props.rightIconPress}>
          <FeatherIcon name="filter" size={20} color={colors.gray05} />
        </TouchableOpacity>
      </View>
    );
  }
}
// TODO:
// rightIcon
// placeholder
// action
SearchBar2.propTypes = {};

const styles = StyleSheet.create({
  searchBox: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    borderRadius: 5,
    backgroundColor: colors.gray01,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  inputText: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 15
  }
});
