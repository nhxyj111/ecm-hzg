import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { transparentHeaderStyle } from "../../styles/navigation";
import NewsList from "./NewsList";
import colors from "../../styles/colors";
import SearchBar2 from "../SearchBar2";
// TODO: test data
import newsData from "../../data/news";

export default class NewsMore extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <SearchBar2 />
        </View>
        <View style={styles.content}>
          <NewsList data={newsData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  heading: {
    marginTop: 80,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {}
});
