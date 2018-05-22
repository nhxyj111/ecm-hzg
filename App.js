import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNav from "./src/navigators/AppNav";

export default class App extends React.Component {
  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("INFO:", info);
  }
  render() {
    return <AppNav />;
  }
}
