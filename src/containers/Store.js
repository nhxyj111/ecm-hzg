import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import StoreFilterHeader from "../components/store/StoreFilterHeader";
import StoreList from "../components/store/StoreList";
import Loader from "../components/Loader";
import NoResult from "../components/NoResult";

import MoreButton from "../components/MoreButton";
import { axiosInstance } from "../services";

// TODO: test data
// import products from "../data/products";

const PAGE_SIZE = 30;

export default class Store extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarLabel: "商城"
  });

  state = {
    products: [],
    loading: false,
    hasMore: true,
    page: 1,
    totalCount: 0,
    searchKey: ""
  };

  // _handleGotoItemCard = product => {
  //   this.props.navigation.navigate("StoreItemCard", { product: product });
  // };

  loadResults = async (page, key) => {
    this.setState({ loading: true });
    let params = {
      currentPage: page,
      pageSize: PAGE_SIZE
    };
    if (typeof key === "string" && key.trim() !== "" && key !== undefined) {
      params.key = key;
    }
    const response = await axiosInstance.get("getGoodsByKeyword", { params });
    const results = response.data.data;
    const totalCount = response.data.totalCount;
    this.setState(prevState => ({
      products: [...prevState.products, ...results],
      hasMore: totalCount <= PAGE_SIZE * page ? false : true,
      loading: false,
      totalCount
    }));
  };

  componentDidMount = () => {
    this.loadResults(this.state.page, "");
  };

  _gotoShopGood = product => {
    this.props.navigation.navigate("ShopGood", { product });
  };

  _onFilter = searchKey => {
    this.setState({ searchKey, products: [], page: 1 }, () => {
      this.loadResults(this.state.page, searchKey);
    });
  };

  _loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      () => {
        this.loadResults(this.state.page, this.state.searchKey);
      }
    );
  };

  render() {
    const { products, loading, hasMore, totalCount, page } = this.state;
    return (
      <View style={styles.wrapper}>
        <StoreFilterHeader
          navigation={this.props.navigation}
          onFilter={this._onFilter}
        />
        {loading && page === 1 ? (
          <Loader />
        ) : totalCount === 0 ? (
          <NoResult />
        ) : (
          <StoreList
            products={products}
            // gotoItemCard={this._handleGotoItemCard}
            hasMore={hasMore}
            gotoShopGood={this._gotoShopGood}
            loadMore={this._loadMore}
            loading={loading}
          />
        )}
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
