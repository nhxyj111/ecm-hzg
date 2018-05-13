import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";

export default class SendInputField extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.sender}>
          <Icon name="md-send" size={28} color={colors.lightBlack} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.lightBlack,
    borderBottomColor: colors.green01,
    borderBottomWidth: 1,
    paddingTop: 10,
    marginRight: 5
  },
  sender: {
    flexDirection: "column",
    alignItems: "flex-end"
  }
});
