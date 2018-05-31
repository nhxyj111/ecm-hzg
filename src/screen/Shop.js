import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../styles/colors";
import Header from "../components/shop/Header";
import Footer from "../components/shop/Footer";
import Tabbar from "../components/shop/Tabbar";
import Recommend from "../components/shop/Recommend";
import List from "../components/shop/List";
import Popover from "../components/shop/Popover";
import { VW } from "../constants";
import { axiosInstance } from "../services";
import { STATIC_BASE } from "../services";

export default class Shop extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    tabKey: 0,
    showPop: false,
    shop: {},
    recommends: [],
    totalCount: 0
  };

  _onTab = tabKey => {
    this.setState({ tabKey });
  };

  _gotoShopCard = () => {
    this.props.navigation.navigate("ShopCard", {
      shop: this.state.shop,
      totalCount: this.state.totalCount
    });
  };

  _gotoShopGood = product => {
    this.props.navigation.navigate("ShopGood", { product });
  };

  _goBack = () => {
    this.props.navigation.goBack();
  };

  _togglePopover = () => {
    this.setState(prevState => ({
      showPop: !prevState.showPop
    }));
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const { shopId } = navigation.state.params;
    const response = await axiosInstance.get(`getShopByShopid/${shopId}`);
    this.setState({ shop: response.data });
    this.loadRecommend();
  };

  loadRecommend = async () => {
    const { navigation } = this.props;
    const { shopId } = navigation.state.params;
    const response = await axiosInstance.get(`getGoodsByShop/${shopId}`, {
      params: {
        currentPage: 1,
        pageSize: 4
      }
    });
    const recommends = response.data.data;
    const totalCount = response.data.totalCount;
    this.setState({ recommends, totalCount });
  };

  _onFilter = searchKey => {
    if (typeof searchKey === "string" && searchKey.trim() === "") {
      alert("请输入关键字");
    } else {
      const { navigation } = this.props;
      const { shopId } = navigation.state.params;
      navigation.navigate("ShopSearch", { shopId, searchKey });
    }
  };

  render() {
    const { tabKey, showPop } = this.state;
    const { shop, recommends, totalCount } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Header goBack={this._goBack} shop={shop} onFilter={this._onFilter} />
          <Tabbar onTab={this._onTab} totalCount={totalCount} />
        </View>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={{ paddingBottom: 80, zIndex: -1 }}
          showsVerticalScrollIndicator={false}
        >
          {tabKey === 0 ? (
            <Recommend
              recommends={recommends}
              gotoShopGood={this._gotoShopGood}
            />
          ) : (
            <List
              shopId={shop.SHOP_ID}
              searchKey=""
              gotoShopGood={this._gotoShopGood}
            />
          )}
        </ScrollView>
        <View style={styles.footer}>
          <Footer
            gotoShopCard={this._gotoShopCard}
            togglePopover={this._togglePopover}
          />
        </View>
        {showPop && (
          <Popover
            position={{ bottom: 65, left: VW / 2 }}
            // position={{ top: 0, left: 0 }}
            bgColor={colors.gray07}
            borderColor={colors.gray03}
            width={120}
            color={colors.lightBlack}
            size={14}
            categories={[
              { id: 1, title: "电竞外设" },
              { id: 2, title: "家用小电器" },
              { id: 3, title: "进口零食" }
            ]}
            dividerColor={colors.gray05}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray01
  },
  header: {},
  scrollview: {},
  footer: {
    position: "relative"
  }
});
