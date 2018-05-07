import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class Products extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "商城"
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>商品列表</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("ProductDetail");
          }}
        >
          <Text>goto 某个商品</Text>
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
