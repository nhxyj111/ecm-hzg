import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Room from "./Room";
import colors from "../../styles/colors";
// TODO: test data
import roomsData from "../../data/rooms";

export default class RoomList extends Component {
  render() {
    const { gotoMessage } = this.props;

    return (
      <View style={styles.wrapper}>
        <FlatList
          data={roomsData}
          renderItem={({ item, index }) => (
            <Room room={item} onPress={() => gotoMessage(item)} />
          )}
          keyExtractor={room => room.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15
    // flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  }
});
