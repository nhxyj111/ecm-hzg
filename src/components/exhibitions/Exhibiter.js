import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

import ExhibiterDesc from "./ExhibiterDesc";
import SearchBar2 from "../../components/SearchBar2";
import Timeline from "../../components/Timeline";
import colors from "../../styles/colors";
import { transparentHeaderStyle } from "../../styles/navigation";
import { axiosInstance } from "../../services";
// TODO: test for now
import timelineData from "../../data/timelines";
import ProductList from "../../components/exhibitions/ProductList";
import exhibitionsList from "../../data/exhibitions";
export default class Exhibiter extends Component {
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

  state = {
    products: []
  };

  // _onFocus = () => {};

  // _onSearch = () => {};

  _onPress = product => {
    this.props.navigation.navigate("ProductDetail", { product });
  };

  componentDidMount = async () => {
    const { exhibiter } = this.props.navigation.state.params;
    const response = await axiosInstance.get(
      `getProductsByExhitor/${exhibiter._id}`
    );
    const products = response.data;
    this.setState({ products });
  };

  _moreProducts = () => {
    const { navigation } = this.props;
    const {
      exhibiter: { _id }
    } = navigation.state.params;
    navigation.navigate("ProductSearch", { exhibiterId: _id });
  };

  render() {
    const { navigation } = this.props;
    const { exhibiter } = navigation.state.params;
    // const {_id,COM_NAME,PROVINCE_ID,CITY_ID, ADDRESS,CONTACT,PHONE,MOBILE}
    const { products } = this.state;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.scrollViewWrapper}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <ExhibiterDesc exhibiter={exhibiter} />
          {/* <SearchBar2
            onSearch={this._onSearch}
            rightIcon={
              <Icon name="ios-search" size={20} color={colors.gray05} />
            }
            placeholder="搜索展商商品"
            bgColor={colors.gray01}
            onFocus={this._onFocus}
          /> */}

          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>正在参展热门商品</Text>
            <TouchableOpacity
              style={styles.moreWrapper}
              onPress={this._moreProducts}
            >
              <Text style={styles.more}>更多</Text>
              <FeatherIcon name="arrow-right" size={14} color={colors.gray04} />
            </TouchableOpacity>
          </View>

          <View style={styles.items}>
            <ProductList products={products} onPress={this._onPress} />
          </View>

          <Timeline data={timelineData} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 40,
    display: "flex",
    flex: 1,
    backgroundColor: colors.white
  },
  scrollViewWrapper: {
    marginTop: 80,
    padding: 0,
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  heading: {
    color: colors.gray04,
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom: 15
  },
  moreWrapper: {
    flexDirection: "row",
    marginRight: 20
  },
  more: {
    paddingBottom: 20,
    marginRight: 5,
    color: colors.gray04,
    fontSize: 14
  },
  items: {
    marginBottom: 20
  }
});
