import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import SearchBar2 from "../../components/SearchBar2";
import Product from "../../components/exhibitions/Product";
import { transparentHeaderStyle } from "../../styles/navigation";
import colors from "../../styles/colors";
import { axiosInstance } from "../../services";

export default class ProductSearch extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  state = {
    results: []
  };

  componentDidMount = () => {
    this._loadResults();
  };

  _loadResults = async () => {
    const { navigation } = this.props;
    const { exhibiterId } = navigation.state.params;
    const response = await axiosInstance.get(
      `getProductsByExhitor/${exhibiterId}`
    );
    const results = response.data;
    this.setState({ results });
  };

  _onSearch = () => {};

  render() {
    return (
      <View style={styles.wrapper}>
        <SearchBar2
          onSearch={this._onSearch}
          rightIcon={<Icon name="ios-search" size={20} color={colors.gray05} />}
          placeholder="搜索展商商品"
          bgColor={colors.gray01}
          // onFocus={this._onFocus}
        />
        <ScrollView
          style={styles.scrollViewWrapper}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingTop: 15
          }}
        >
          {this.state.results.map((item, index) => (
            <Product item={item} key={item._id} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    display: "flex",
    flex: 1,
    backgroundColor: colors.white
  },

  scrollViewWrapper: {
    marginTop: 120,
    padding: 0,
    paddingHorizontal: 20,
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
