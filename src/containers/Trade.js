import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import GroupButtons from "../components/GroupButtons";
import BuyerList from "../components/trade/BuyerList";
import SellerList from "../components/trade/SellerList";

import colors from "../styles/colors";

export default class Trade extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    activedList: "left"
  };

  _handleGBtn = activedList => {
    this.setState({ activedList });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <GroupButtons onPress={this._handleGBtn} />
        </View>

        <View style={styles.content}>
          {this.state.activedList === "left" ? <SellerList /> : <BuyerList />}
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
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    marginHorizontal: 0,
    marginTop: 15
  }
});
