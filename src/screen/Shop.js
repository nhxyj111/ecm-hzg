import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../styles/colors";
import Header from "../components/shop/Header";
import Footer from "../components/shop/Footer";
import Tabbar from "../components/shop/Tabbar";
import Recommend from "../components/shop/Recommend";

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Header />
          <Tabbar />
        </View>
        <ScrollView style={styles.scrollview}>
          <Recommend />
        </ScrollView>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray01
  },
  header: {}
});
