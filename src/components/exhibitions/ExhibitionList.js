import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { transparentHeaderStyle } from "../../styles/navigation";
import GroupButtons2 from "../GroupButtons2";
import colors from "../../styles/colors";
import ExhibitionItem from "./ExhibitionItem";
// TODO: test data
import ehbData from "../../data/exhibitions";

export default class ExhibitionList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  render() {
    const GBConfig = [
      {
        key: "1",
        tab: "1月-4月"
      },
      {
        key: "5",
        tab: "5月-8月"
      },
      {
        key: "9",
        tab: "9月-12月"
      }
    ];
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <GroupButtons2 config={GBConfig} />
        </View>

        <View style={styles.content}>
          <FlatList
            data={ehbData}
            renderItem={({ item, index }) => <ExhibitionItem data={item} />}
            keyExtractor={item => item.id}
          />
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
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    marginHorizontal: 0,
    marginTop: 15
  }
});
