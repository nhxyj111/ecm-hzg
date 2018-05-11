import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

import { isHiddenTabbarRoute } from "../utils";

import Exhibitions from "../containers/Exhibitions";
import Store from "../containers/Store";
import Trade from "../containers/Trade";
import Cart from "../containers/Cart";
import Setting from "../containers/Setting";

import ExhibitionDetail from "../components/exhibitions/ExhibitionDetail";
import Exhibiter from "../components/exhibitions/Exhibiter";
import ProductDetail from "../components/exhibitions/ProductDetail";
import UserInfo from "../components/setting/UserInfo";

import StoreFilterModal from "../components/store/StoreFilterModal";
import StoreItemCard from "../components/store/StoreItemCard";
import ProductFilterModal from "../components/store/ProductFilterModal";
import Shopcart from "../components/store/Shopcart";
import Check from "../components/store/Check";

const ExhibitionsTab = createStackNavigator(
  {
    Exhibitions: { screen: Exhibitions },
    ExhibitionDetail: { screen: ExhibitionDetail },
    Exhibiter: { screen: Exhibiter },
    ProductDetail: { screen: ProductDetail },
    Shopcart: { screen: Shopcart },
    Check: { screen: Check }
  },
  {
    mode: "modal"
  }
);

const StoreTab = createStackNavigator(
  {
    Store: { screen: Store },
    StoreFilterModal: { screen: StoreFilterModal },
    StoreItemCard: { screen: StoreItemCard },
    ProductFilterModal: { screen: ProductFilterModal }
  },
  {
    mode: "modal"
  }
);

const TradeTab = createStackNavigator(
  {
    Trade: { screen: Trade }
  },
  {
    mode: "modal"
  }
);

const SettingTab = createStackNavigator(
  {
    Setting: { screen: Setting },
    UserInfo: { screen: UserInfo }
  },
  {
    mode: "modal"
  }
);

const LoginedTabNav = createBottomTabNavigator(
  {
    TradeTab: { screen: TradeTab },
    StoreTab: { screen: StoreTab },
    ExhibitionsTab: { screen: ExhibitionsTab },
    Cart: { screen: Cart },
    SettingTab: { screen: SettingTab }
  },
  {
    navigationOptions: ({ navigation }) => {
      let tabConfig = {
        tabBarLabel: "设置"
      };

      if (navigation.state.key === "ExhibitionsTab") {
        tabConfig = {
          tabBarLabel: "展会",
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name="globe" size={25} color={tintColor} />;
          }
        };
      } else if (navigation.state.key === "StoreTab") {
        tabConfig = {
          tabBarLabel: "商城",
          tabBarIcon: ({ focused, tintColor }) => {
            return <EntypoIcon name="shop" size={25} color={tintColor} />;
          }
        };
      } else if (navigation.state.key === "TradeTab") {
        tabConfig = {
          tabBarLabel: "大宗采购",
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name="truck" size={25} color={tintColor} />;
          }
        };
      } else if (navigation.state.key === "Cart") {
        tabConfig = {
          tabBarLabel: "购物车",
          tabBarIcon: ({ focused, tintColor }) => {
            return (
              <FeatherIcon name="shopping-cart" size={25} color={tintColor} />
            );
          }
        };
      } else {
        tabConfig = {
          tabBarLabel: "设置",
          tabBarIcon: ({ focused, tintColor }) => {
            return <Octicons name="settings" size={25} color={tintColor} />;
          }
        };
      }
      // console.log(JSON.stringify(navigation.state.routes));
      // TODO: a 'modal' opened in nested stackNav (in tabNav)
      const routes = navigation.state.routes;
      if (isHiddenTabbarRoute(routes)) {
        tabConfig.tabBarVisible = false;
      }

      return {
        ...tabConfig
        //header: null
      };
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default LoginedTabNav;
