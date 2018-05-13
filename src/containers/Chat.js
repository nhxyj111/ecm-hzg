import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import RoomList from "../components/chat/RoomList";
import RoomHeader from "../components/chat/RoomHeader";
import SearchBar2 from "../components/SearchBar2";
import colors from "../styles/colors";

export default class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarLabel: "聊天"
  });

  _handleGotoMessage = room => {
    this.props.navigation.navigate("MessageContainer");
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {/* <RoomHeader /> */}
        <SearchBar2 />
        <RoomList gotoMessage={this._handleGotoMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40
  }
});
