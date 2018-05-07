import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class Trade extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   tabBarLabel: "大宗采购"
  // });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>大宗采购</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("TradeList");
          }}
        >
          <Text>goto 大宗采购list</Text>
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
