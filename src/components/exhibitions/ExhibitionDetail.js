import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";
import { transparentHeaderStyle } from "../../styles/navigation";

import ExhibiterList from "./ExhibiterList";
import ExhibitionCard from "./ExhibitionCard";

import exhibiters from "../../data/exhibiters";
export default class ExhibitionDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    // tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollViewWrapper}>
          <ExhibitionCard />
          <ExhibiterList exhibiters={exhibiters} />

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
    marginTop: 40,
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
