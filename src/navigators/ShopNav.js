import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Shop from "../screen/Shop";
import ShopCard from "../screen/ShopCard";
import ShopSearch from "../screen/ShopSearch";

export default createStackNavigator(
  {
    Shop: { screen: Shop },
    ShopSearch: { screen: ShopSearch },
    ShopCard: { screen: ShopCard }
  },
  {
    mode: "modal"
  }
);
