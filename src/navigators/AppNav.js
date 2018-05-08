import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

import Welcome from "../screen/Welcome";
import Login from "../screen/Login";
import Register from "../screen/Register";

import LoginedTabNav from "./LoginedTabNav";

const AppNav = createStackNavigator(
  {
    // TODO: for test
    Logined: { screen: LoginedTabNav },

    // TODO:
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    // Logined: { screen: LoginedTabNav },
    Register: { screen: Register }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

export default AppNav;
