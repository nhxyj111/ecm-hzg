import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import SearchBar from "../components/SearchBar";
import CitySelector from "../components/CitySelector";

export default class Exhibitions extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   tabBarLabel: "展会"
  // });

  state = {
    showCitySelector: false
  };

  toggleCitySelector = () => {
    this.setState({ showCitySelector: !this.state.showCitySelector });
  };

  render() {
    const { showCitySelector } = this.state;
    return (
      <View style={styles.wrapper}>
        <SearchBar rightIconPress={this.toggleCitySelector} />

        <CitySelector show={showCitySelector} />

        <Text>展会list</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("ExhibitionDetail");
          }}
        >
          <Text>goto 具体展会 ExhibitionDetail</Text>
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
