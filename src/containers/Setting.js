import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class Setting extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   tabBarLabel: "设置"
  // });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>设置</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("UserInfo");
          }}
        >
          <Text>goto UserInfo</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
