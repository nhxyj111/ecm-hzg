import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import SortTool from "./SortTool";
import MoreButton from "../MoreButton";
// import Loader from "../Loader";
// import NoResult from "../NoResult";
import colors from "../../styles/colors";
import { axiosInstance } from "../../services";
// import shopItems from "../../data/shopItems";

const PAGE_SIZE = 30;
export default class List extends Component {
  state = {
    products: [],
    loading: false,
    hasMore: true,
    page: 1,
    totalCount: 0
  };

  loadResults = async (page, key) => {
    this.setState({ loading: true });
    let params = {
      currentPage: page,
      pageSize: PAGE_SIZE
    };

    if (typeof key === "string" && key.trim() !== "") {
      params.key = key;
    }

    const response = await axiosInstance.get(
      `getGoodsByShop/${this.props.shopId}`,
      { params }
    );
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
    this.loadResults(this.state.page, this.props.searchKey);
  };

  _loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      () => {
        this.loadResults(this.state.page, this.props.searchKey);
      }
    );
  };

  render() {
    const { products, loading, hasMore, totalCount, page } = this.state;

    return (
      <View style={styles.wrapper}>
        <SortTool />
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <ListItem data={item} gotoShopGood={this.props.gotoShopGood} />
          )}
          keyExtractor={item => item._id}
          style={styles.flatlist}
        />
        {hasMore && (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MoreButton
              color={colors.lightBlack}
              size={14}
              title="更多..."
              onPress={this._loadMore}
              disabled={loading}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  flatlist: {
    marginTop: 0
  }
});
