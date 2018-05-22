import React, { Component } from "react";
import {
  Image,
  TextInput,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { PropTypes } from "prop-types";

import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";

export default class SearchBar extends Component {
  _storageSearchKeyword = async value => {
    let searchKeywords = [];
    const keywords = await AsyncStorage.getItem("searchKeywords");
    if (!!keywords) {
      searchKeywords = JSON.parse(keywords);
      if (value in searchKeywords) {
        const index = searchKeywords.indexOf(value);
        searchKeywords.splice(index, 1);
        searchKeywords.unshift(value);
      } else {
        searchKeywords.unshift(value);
      }
    } else {
      searchKeywords.push(value);
    }
    searchKeywords.splice(5);
    await AsyncStorage.setItem(
      "searchKeywords",
      JSON.stringify(searchKeywords)
    );
  };

  render() {
    const {
      leftIconPress,
      rightIconPress,
      onSearch,
      onChangeText,
      value
    } = this.props;
    return (
      <View style={styles.searchBox}>
        <TouchableOpacity onPress={leftIconPress}>
          <FontAwesome name="calendar" size={20} color={colors.gray05} />
        </TouchableOpacity>

        <TextInput
          style={styles.inputText}
          keyboardType="web-search"
          placeholder="搜索展会"
          onSubmitEditing={() => {
            if (value && value.trim() !== "") {
              this._storageSearchKeyword(value);
              onSearch();
            }
          }}
          onChangeText={onChangeText}
          value={value}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={rightIconPress}>
          <FeatherIcon name="filter" size={20} color={colors.gray05} />
        </TouchableOpacity>
      </View>
    );
  }
}
// TODO
// rightIcon
// placeholder
// action
SearchBar.propTypes = {};

const styles = StyleSheet.create({
  searchBox: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  inputText: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 15,
    paddingHorizontal: 5
  }
});
