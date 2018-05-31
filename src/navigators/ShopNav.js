import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Shop from "../screen/Shop";
import ShopCard from "../screen/ShopCard";
import ShopSearch from "../screen/ShopSearch";
import ShopGood from "../screen/ShopGood";
import ShopCommentDetail from "../screen/ShopCommentDetail";

export default createStackNavigator(
  {
    // TODO: test
    ShopSearch: { screen: ShopSearch },
    Shop: { screen: Shop },
    ShopCard: { screen: ShopCard },
    ShopGood: { screen: ShopGood },
    ShopCommentDetail: { screen: ShopCommentDetail }
  },
  {
    mode: "modal"
  }
);
