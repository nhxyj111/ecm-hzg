import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class Login extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   headerRight: (
  //     <TouchableHighlight onPress={() => navigation.navigate("Logined")}>
  //       <Text>xxx</Text>
  //     </TouchableHighlight>
  //   )
  // });
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text>Login</Text>
        <TouchableHighlight onPress={() => navigation.navigate("Logined")}>
          <Text>==></Text>
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
