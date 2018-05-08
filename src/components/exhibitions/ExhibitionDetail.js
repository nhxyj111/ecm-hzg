import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from "react-native";

import colors from "../../styles/colors";

import ProductList from "./ProductList";
import ExhibitionCard from "./ExhibitionCard";
export default class ExhibitionDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollViewWrapper}>
          <ExhibitionCard />
          <ProductList />

          {/* <Text>具体某个展会</Text>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate("Exhibiter");
            }}
          >
            <Text>goto 展商 Exhibiter</Text>
          </TouchableHighlight> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1
    // backgroundColor: colors.white
  },
  scrollViewWrapper: {
    marginTop: 40,
    padding: 0,
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
