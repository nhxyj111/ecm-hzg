import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import List from "../components/shop/List";
import colors from "../styles/colors";
export default class ShopSearch extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    shopId: undefined,
    searchKey: ""
  };

  componentDidMount = () => {
    const { navigation } = this.props;
    const { shopId, searchKey } = navigation.state.params;
    this.setState({ shopId, searchKey });
  };

  render() {
    const { shopId, searchKey } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <View style={styles.searchBox}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <FeatherIcon name="arrow-left" size={20} color={colors.gray02} />
            </TouchableOpacity>

            <TextInput
              style={styles.inputText}
              keyboardType="web-search"
              placeholder="搜本店铺"
              onSubmitEditing={() => {}}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity>
              <FeatherIcon name="list" size={20} color={colors.gray02} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={{ paddingBottom: 30, zIndex: -1 }}
          showsVerticalScrollIndicator={false}
        >
          {shopId &&
            searchKey && <List shopId={shopId} searchKey={searchKey} />}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1
  },
  heading: {
    paddingTop: 40
  },
  searchBox: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    borderRadius: 5,
    backgroundColor: colors.gray01,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  inputText: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 15,
    paddingHorizontal: 5
  }
});
