import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import StoreFilterHeader from "./StoreFilterHeader";
import Breadcrumbs from "../Breadcrumbs";
import RadioButtonsGroup from "../RadioButtonsGroup";
import colors from "../../styles/colors";

export default class ProductFilterModal extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <StoreFilterHeader showBackIcon={true} navigation={navigation} />
        <View style={styles.heading}>
          <Breadcrumbs
            title={"商品名"}
            filterItems={["nike", "11", "¥ 1500"]}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <RadioButtonsGroup
            title={"品牌"}
            options={["Nike", "Adidas", "李宁", "新百伦", "Converse", "Texd"]}
          />

          <RadioButtonsGroup
            title={"尺码"}
            options={["11", "12", "13", "14", "15", "16"]}
          />

          <RadioButtonsGroup
            title={"价格区间"}
            options={[
              "100 - 200",
              "200 - 500",
              "500 - 1000",
              "1000 - 2000",
              "2000以上"
            ]}
          />
        </ScrollView>

        {/* TODO: should be a component*/}
        <View style={styles.footerBtnGroup}>
          <TouchableOpacity
            style={styles.leftBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.leftBtnText}>取消</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightBtn}>
            <Text style={styles.rightBtnText}>下一步</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  heading: {
    marginTop: 80,
    flexDirection: "row",
    marginHorizontal: -20,
    // paddingHorizontal: -20,
    paddingBottom: 10,
    borderBottomColor: colors.gray01,
    borderBottomWidth: 1
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
