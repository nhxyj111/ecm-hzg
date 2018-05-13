import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import MessageHeader from "./MessageHeader";
import Message from "./Message";
import SendInputField from "./SendInputField";
import colors from "../../styles/colors";
// TODO: test data
import messageData from "../../data/messages";

export default class MessageContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <MessageHeader />
        <View>
          <FlatList
            data={messageData}
            renderItem={({ item, index }) => <Message message={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <SendInputField />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 120
  }
});
