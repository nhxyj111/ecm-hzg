import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

import Welcome from "../screen/Welcome";
import Login from "../screen/Login";

import LoginedTabNav from "./LoginedTabNav";

const AppNav = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Logined: { screen: LoginedTabNav }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

export default AppNav;
