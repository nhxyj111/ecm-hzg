import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import colors from "../styles/colors";
import { transparentHeaderStyle } from "../styles/navigation";

export default class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle
  });
  state = {
    countdown: 5
  };

  componentDidMount = () => {
    this.countdown = setInterval(() => {
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) this.props.navigation.navigate("Login");
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.countdown);
  };

  gotoNext = () => {
    clearInterval(this.countdown);
    this.setState({ countdown: 0 });
    this.props.navigation.navigate("Login");
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.countdownWrapper}>
          <Text style={styles.countdownText}>{this.state.countdown}秒</Text>
        </TouchableOpacity>
        <Text>登录广告</Text>

        <TouchableHighlight onPress={this.gotoNext}>
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
  },
  countdownWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.green01,
    position: "absolute",
    right: 20,
    top: 140,
    justifyContent: "center",
    alignItems: "center"
  },
  countdownText: {
    fontSize: 12
  }
});
