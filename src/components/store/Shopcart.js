import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

import CartTableHeader from "./CartTableHeader";
import ShopcartItem from "./ShopcartItem";
import colors from "../../styles/colors";

// TODO: test data
import cartdata from "../../data/cart";

export default class Shopcart extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    items: null
  };

  componentDidMount() {
    this.setState({ items: cartdata });
  }

  handleDeleteItem = id => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState(prevState => ({
      items
    }));
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>购物车</Text>
        <CartTableHeader />

        <View style={styles.list}>
          <FlatList
            data={this.state.items}
            renderItem={({ item, index }) => (
              <ShopcartItem data={item} onDelete={this.handleDeleteItem} />
            )}
            keyExtractor={item => item.id}
            style={styles.flatlist}
          />

          <Text style={styles.total}>总计 {1000}</Text>
        </View>

        {/* TODO: should be a component*/}
        <View style={styles.footerBtnGroup}>
          <TouchableOpacity
            style={styles.leftBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.leftBtnText}>返回</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightBtn}
            onPress={() => navigation.navigate("Check")}
          >
            <Text style={styles.rightBtnText}>下一步</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20,
    color: colors.lightBlack,
    fontWeight: "600",
    marginLeft: 20
  },

  list: {
    // backgroundColor: "tomato",
    width: "100%",
    marginTop: 10,
    marginBottom: 170
  },
  flatlist: {
    borderBottomColor: colors.gray01,
    borderBottomWidth: 1
  },
  total: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.lightBlack,
    marginTop: 15,
    paddingRight: 20,
    textAlign: "right"
  },
  footerBtnGroup: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: colors.white,
    borderTopColor: colors.gray04,
    borderTopWidth: 2,
    flexDirection: "row"
  },
  leftBtn: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  leftBtnText: {
    color: colors.gray04,
    fontWeight: "600",
    fontSize: 18
  },
  rightBtn: {
    width: "50%",
    height: "100%",
    backgroundColor: colors.gray04,
    justifyContent: "center",
    alignItems: "center"
  },
  rightBtnText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 18
  }
});
